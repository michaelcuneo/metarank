import { OpenAI } from 'openai';
import { Resource } from 'sst';

const MAX_BODY_CHARS = 10_000;
const MIN_BODY_CHARS = 100;
const MAX_RETRY_ATTEMPTS = 1;

const openai = new OpenAI({
	apiKey: Resource.OPENAI_KEY.value
});

export interface PostInput {
	title: string;
	body: string;
	tags?: string[];
	location?: string;
	targetQuery?: string;
	languageCode?: string;
}

export interface SeoMetaResponseV1 {
	metaTitle: string;
	metaDescription: string;
	slug: string;
	keywords: string;
	ogDescription: string;
	ogImage: string | null;
	searchIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
	primaryLocation: string | null;
	languageCode: string;
}

async function parseJsonWithRetry(
	run: (attempt: number) => Promise<string>
): Promise<Record<string, unknown>> {
	let lastError: unknown;

	for (let attempt = 0; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
		try {
			const text = await run(attempt);
			return JSON.parse(text);
		} catch (err) {
			lastError = err;
		}
	}

	throw lastError;
}

function stripHtml(input: string): string {
	return input.replace(/<[^>]+>/g, ' ');
}

function stripMarkdown(input: string): string {
	return input
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
		.replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
		.replace(/[#>*_~-]/g, ' ');
}

function normalizeWhitespace(input: string): string {
	return input.replace(/\s+/g, ' ').trim();
}

function sanitizeText(input: string): string {
	return normalizeWhitespace(stripMarkdown(stripHtml(input)));
}

function inferLanguageCode(text: string, fallback?: string): string {
	if (fallback?.trim()) return fallback.trim();

	const asciiRatio = text.length > 0 ? text.replace(/[\x00-\x7F]/g, '').length / text.length : 0;

	if (asciiRatio > 0.2) {
		return 'unknown';
	}

	return 'en';
}

function extractCandidatePhrases(input: PostInput): string[] {
	const stopWords = new Set([
		'a',
		'an',
		'and',
		'are',
		'as',
		'at',
		'be',
		'but',
		'by',
		'for',
		'from',
		'how',
		'in',
		'is',
		'it',
		'of',
		'on',
		'or',
		'that',
		'the',
		'this',
		'to',
		'was',
		'with',
		'you',
		'your',
		'into',
		'than',
		'then',
		'they',
		'their',
		'we',
		'our',
		'can',
		'will',
		'using',
		'use',
		'used',
		'guide',
		'overview',
		'introduction',
		'learn',
		'tutorial'
	]);

	const source = sanitizeText(
		[input.title, input.targetQuery, ...(input.tags ?? []), input.body.slice(0, 2000)]
			.filter(Boolean)
			.join(' ')
	).toLowerCase();

	const words = source
		.replace(/[^a-z0-9\s-]/g, ' ')
		.split(/\s+/)
		.filter(Boolean);

	const phrases = new Set<string>();

	for (let i = 0; i < words.length; i++) {
		for (let size = 2; size <= 4; size++) {
			const slice = words.slice(i, i + size);
			if (slice.length !== size) continue;

			if (slice.every((w) => stopWords.has(w))) continue;
			if (slice.some((w) => w.length < 2)) continue;

			const phrase = slice.join(' ');
			if (phrase.length < 6) continue;
			if (phrase.includes('import ') || phrase.includes(' const ')) continue;

			phrases.add(phrase);
		}
	}

	return Array.from(phrases).slice(0, 25);
}

function inferIntentHint(targetQuery?: string): string {
	if (!targetQuery) return '';

	const q = targetQuery.toLowerCase();

	const commercialSignals = [
		'best',
		'top',
		'vs',
		'compare',
		'comparison',
		'review',
		'alternatives'
	];
	const productSignals = ['api', 'software', 'tool', 'platform', 'service', 'sdk'];

	if (commercialSignals.some((w) => q.includes(w)) || productSignals.some((w) => q.includes(w))) {
		return `The search intent for this query is COMMERCIAL.
The user is evaluating or selecting a product or service.`;
	}

	return '';
}

function normalizeKeywords(
	raw: string | string[] | undefined,
	targetQuery?: string,
	options?: { max?: number }
): string {
	if (!raw && !targetQuery) return '';

	const max = options?.max ?? 8;

	const stopWords = new Set([
		'a',
		'an',
		'the',
		'your',
		'this',
		'that',
		'these',
		'those',
		'how',
		'to',
		'guide',
		'learn',
		'tutorial',
		'overview',
		'introduction',
		'first',
		'second',
		'next',
		'best',
		'new',
		'build',
		'make',
		'create',
		'get',
		'using'
	]);

	const phrases = [
		...(targetQuery ? [targetQuery] : []),
		...(Array.isArray(raw) ? raw : raw ? raw.split(',') : [])
	];

	const cleaned = phrases
		.map((p) => p.toLowerCase().trim())
		.map((p) => p.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, ' '))
		.filter((p) => p.length >= 5)
		.filter((p) => {
			const words = p.split(' ');
			return !words.every((w) => stopWords.has(w));
		})
		.sort((a, b) => b.split(' ').length - a.split(' ').length);

	const unique = Array.from(new Set(cleaned));

	return unique.slice(0, max).join(', ');
}

export async function generateSeoMeta(post: PostInput): Promise<SeoMetaResponseV1> {
	if (!post.body || !post.body.trim()) {
		throw new Error('Post body is empty');
	}

	if (post.body.length < MIN_BODY_CHARS) {
		throw new Error('Post body is too short to generate meaningful SEO metadata');
	}

	if (post.body.length > MAX_BODY_CHARS) {
		throw new Error(`Post body exceeds maximum length of ${MAX_BODY_CHARS} characters`);
	}

	if (post.targetQuery && post.targetQuery.length > 120) {
		throw new Error('Target query is too long');
	}

	const cleanBody = sanitizeText(post.body);
	if (!cleanBody.trim()) {
		throw new Error('Post body is empty, cannot generate SEO metadata');
	}

	const languageCode = inferLanguageCode(cleanBody.slice(0, 600), post.languageCode);

	const candidatePhrases = extractCandidatePhrases({
		...post,
		body: cleanBody
	});

	const imageMatch = post.body.match(
		/!\[.*?\]\((https?:\/\/[^\s)]+)\)|<img[^>]+src="(https?:\/\/[^"]+)"/
	);
	const ogImage = imageMatch?.[1] || imageMatch?.[2] || null;

	const intentHint = inferIntentHint(post.targetQuery);

	const targetQueryInstruction = post.targetQuery
		? `The PRIMARY SEO TARGET is: "${post.targetQuery}".
All generated fields MUST strongly align with this query.
If there is any conflict between candidate phrases and the target query,
the target query takes priority.`
		: 'Infer the primary search intent and keyword from the content.';

	const prompt = `You are an expert SEO assistant.

Generate SEO-optimized metadata for a blog post based on the information provided below.
If the primary target query includes comparison or evaluation terms
such as "best", "top", "vs", "compare", or lists specific products,
classify the search intent as "commercial".
Avoid tutorial-style phrases such as "guide", "introduction", or "overview"
in the metaTitle when the search intent is commercial.

${targetQueryInstruction}
${intentHint}

Use the candidate phrases below only as hints.
You should ignore weak, generic, or irrelevant phrases.
Prefer phrases that are semantically meaningful and useful for search engines.

Include:
- metaTitle (max 60 chars)
- metaDescription (max 160 chars)
- slug (SEO-friendly, lowercase, hyphenated)
- keywords (comma-separated, SEO-relevant)
- ogDescription (max 200 chars)
- searchIntent (one of: informational, commercial, transactional, navigational)
- primaryLocation (if any)
- languageCode

Post Title: ${post.title}
Location: ${post.location ?? ''}
Target Search Query: ${post.targetQuery ?? ''}
Provided Language Code: ${post.languageCode ?? ''}
Inferred Language Code: ${languageCode}

Candidate Phrases: ${candidatePhrases.join(', ')}

Content Snippet:
${cleanBody.slice(0, 2200)}

Return ONLY a raw JSON object with those fields.

Do not include:
- Markdown
- bullet lists
- explanations
- any text outside the JSON object.`;

	const json = await parseJsonWithRetry(async (attempt) => {
		const chat = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content: 'You are an SEO assistant. Return ONLY valid JSON. Fix formatting errors if any.'
				},
				{ role: 'user', content: prompt }
			],
			temperature: attempt === 0 ? 0.4 : 0
		});

		return chat.choices[0].message.content ?? '';
	});

	const validIntents = ['informational', 'commercial', 'transactional', 'navigational'] as const;

	const searchIntent = validIntents.includes(json.searchIntent as (typeof validIntents)[number])
		? (json.searchIntent as SeoMetaResponseV1['searchIntent'])
		: 'informational';

	return {
		metaTitle: String(json.metaTitle ?? ''),
		metaDescription: String(json.metaDescription ?? ''),
		slug: String(json.slug ?? ''),
		keywords: normalizeKeywords(json.keywords as string | string[] | undefined, post.targetQuery),
		ogDescription: String(json.ogDescription ?? ''),
		ogImage,
		searchIntent,
		primaryLocation: (json.primaryLocation as string | null) ?? null,
		languageCode: String(json.languageCode ?? languageCode)
	};
}
