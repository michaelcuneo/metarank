import {
	ComprehendClient,
	DetectKeyPhrasesCommand,
	DetectEntitiesCommand,
	DetectDominantLanguageCommand
} from '@aws-sdk/client-comprehend';
import { OpenAI } from 'openai';
import type { LanguageCode } from '@aws-sdk/client-comprehend';
import { getEnv } from './env.js';

const MAX_BODY_CHARS = 10_000;
const MIN_BODY_CHARS = 100;
const MAX_RETRY_ATTEMPTS = 1;

const region = (await getEnv('AWS_REGION')) || 'ap-southeast-2';
const openaiKey = await getEnv('OPENAI_API_KEY');
console.log('Using OpenAI Key from env:', openaiKey ? 'YES' : 'NO');
const {
	endpoint: llmEndpoint,
	model: llmModel,
	apiKey: llmKey
} = {
	endpoint: await getEnv('LLM_ENDPOINT'),
	model: await getEnv('LLM_MODEL'),
	apiKey: await getEnv('LLM_API_KEY')
};

if (!openaiKey) {
	throw new Error('OPENAI_API_KEY is not set in environment');
}

const comprehend = new ComprehendClient({ region: region });
const openai = new OpenAI({ apiKey: openaiKey });

export interface PostInput {
	title: string;
	body: string;
	tags?: string[];
	location?: string;
	targetQuery?: string;
	languageCode?: string;
}

async function parseJsonWithRetry(
	run: (attempt: number) => Promise<string>
): Promise<Record<string, unknown>> {
	let lastError: unknown;

	for (let attempt = 0; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
		if (attempt > 0) {
			console.warn(`Retrying SEO JSON generation (attempt ${attempt})`);
		}

		try {
			const text = await run(attempt);
			return JSON.parse(text);
		} catch (err) {
			lastError = err;
		}
	}

	throw lastError;
}

export async function generateSeoMeta(post: PostInput) {
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

	const textForLang = post.body.slice(0, 500);
	if (!textForLang.trim()) {
		throw new Error('Post body is empty, cannot generate SEO metadata');
	}

	let languageCode = post.languageCode;

	if (!languageCode) {
		const langResp = await comprehend.send(
			new DetectDominantLanguageCommand({ Text: textForLang })
		);
		const supportedLangs = [
			'hi',
			'de',
			'zh-TW',
			'ko',
			'pt',
			'en',
			'it',
			'fr',
			'zh',
			'es',
			'ar',
			'ja',
			'ru',
			'tr',
			'fa',
			'th',
			'vi',
			'ms',
			'id',
			'fil'
		];
		const rawLang = langResp.Languages?.[0]?.LanguageCode ?? 'en';
		languageCode = supportedLangs.includes(rawLang) ? rawLang : 'en';
	}

	const keyPhraseRes = await comprehend.send(
		new DetectKeyPhrasesCommand({
			Text: post.body,
			LanguageCode: languageCode as LanguageCode
		})
	);

	const entityRes = await comprehend.send(
		new DetectEntitiesCommand({
			Text: post.body,
			LanguageCode: languageCode as LanguageCode
		})
	);

	function cleanKeyPhrases(phrases: string[]): string[] {
		return phrases
			.filter(
				(p) =>
					/^[\w\s,.-]{4,}$/.test(p) &&
					!p.includes('```') &&
					!p.match(/^[-#@*]+/) &&
					!p.toLowerCase().includes('import') &&
					!p.toLowerCase().includes('const') &&
					!p.toLowerCase().includes('generateSeoMeta')
			)
			.map((p) => p.trim());
	}

	const keyPhrases = cleanKeyPhrases(
		keyPhraseRes.KeyPhrases?.map((k) => k.Text).filter((k): k is string => Boolean(k)) || []
	);

	const entities = Array.from(
		new Set(entityRes.Entities?.map((e) => e.Text?.trim()).filter((e) => e && e.length > 2) || [])
	);

	const imageMatch = post.body.match(
		/!\[.*?\]\((https?:\/\/[^\s)]+)\)|<img[^>]+src="(https?:\/\/[^"]+)"/
	);
	const ogImage = imageMatch?.[1] || imageMatch?.[2] || null;

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

	const intentHint = inferIntentHint(post.targetQuery);

	const targetQueryInstruction = post.targetQuery
		? `The PRIMARY SEO TARGET is: "${post.targetQuery}".
All generated fields MUST strongly align with this query.
If there is any conflict between extracted phrases and the target query,
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

Clean the extracted phrases and entities below by:
- Removing generic, technical, or code-related terms (e.g., 'HTML', 'body', 'title', 'import', 'code', 'markdown', 'const', 'generateSeoMeta')
- Prioritizing phrases that are semantically meaningful and relevant for search engines
- Remove duplicates

Then use the refined list to generate optimized metadata.

Include:
- metaTitle (max 60 chars)
- metaDescription (max 160 chars)
- slug (SEO-friendly, lowercase, hyphenated)
- keywords (comma-separated, SEO-relevant)
- ogDescription (max 200 chars)
- searchIntent (e.g., informational, commercial)
- primaryLocation (if any)

Post Title: ${post.title}
Location: ${post.location}
Target Search Query: ${post.targetQuery}

Extracted Key Phrases: ${keyPhrases.slice(0, 15).join(', ')}
Extracted Entities: ${entities.slice(0, 15).join(', ')}

Content Snippet:
${post.body.slice(0, 1800)}

Return ONLY a raw JSON object with those fields.

⚠️ Do not include:
- Markdown
- bullet lists
- explanations
- any text outside the JSON object.`;

	let text;

	try {
		const json = await parseJsonWithRetry(async (attempt) => {
			if (llmEndpoint && llmModel) {
				const localResp = await fetch(llmEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						...(llmKey ? { Authorization: `Bearer ${llmKey}` } : {})
					},
					body: JSON.stringify({
						model: llmModel,
						messages: [
							{ role: 'system', content: 'You are an SEO assistant. Return ONLY valid JSON.' },
							{ role: 'user', content: prompt }
						],
						temperature: attempt === 0 ? 0.4 : 0
					})
				});

				const parsed = await localResp.json();
				return parsed.choices?.[0]?.message?.content ?? parsed.response ?? '';
			}

			const chat = await openai.chat.completions.create({
				model: 'gpt-4',
				messages: [
					{
						role: 'system',
						content:
							'You are an SEO assistant. Return ONLY valid JSON. Fix formatting errors if any.'
					},
					{ role: 'user', content: prompt }
				],
				temperature: attempt === 0 ? 0.4 : 0
			});

			return chat.choices[0].message.content ?? '';
		});

		function normalizeKeywords(
			raw: string | string[] | undefined,
			targetQuery?: string,
			options?: {
				max?: number;
			}
		): string {
			if (!raw && !targetQuery) return '';

			const max = options?.max ?? 8;

			const stopWords = new Set([
				// articles & fillers
				'a',
				'an',
				'the',
				'your',
				'this',
				'that',
				'these',
				'those',

				// instructional fluff
				'how',
				'to',
				'guide',
				'learn',
				'tutorial',
				'overview',
				'introduction',

				// ordinal / weak qualifiers
				'first',
				'second',
				'next',
				'best',
				'new',

				// generic verbs
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
				// prefer multi-word phrases
				.sort((a, b) => b.split(' ').length - a.split(' ').length);

			const unique = Array.from(new Set(cleaned));

			return unique.slice(0, max).join(', ');
		}

		const validIntents = ['informational', 'commercial', 'transactional', 'navigational'] as const;
		const searchIntent = validIntents.includes(json.searchIntent as (typeof validIntents)[number])
			? (json.searchIntent as 'informational' | 'commercial' | 'transactional' | 'navigational')
			: 'informational';

		const response: SeoMetaResponseV1 = {
			metaTitle: json.metaTitle as string,
			metaDescription: json.metaDescription as string,
			slug: json.slug as string,
			keywords: normalizeKeywords(json.keywords as string | string[], post.targetQuery),
			ogDescription: json.ogDescription as string,
			ogImage,
			searchIntent,
			primaryLocation: (json.primaryLocation as string | null) ?? null,
			languageCode
		};

		return response;
	} catch (err) {
		console.error('AI output parse failed:', text);
		throw new Error('Failed to parse AI SEO response', { cause: err });
	}
}
