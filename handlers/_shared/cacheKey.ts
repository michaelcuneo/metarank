import crypto from 'node:crypto';

type SeoInput = {
	title?: string;
	body: string;
	location?: string;
	targetQuery?: string;
};

export function createSeoCacheKey(input: SeoInput): string {
	const normalized = {
		title: input.title?.trim() ?? '',
		body: input.body.trim(),
		location: input.location?.trim() ?? '',
		targetQuery: input.targetQuery?.trim() ?? ''
	};

	const hash = crypto.createHash('sha256').update(JSON.stringify(normalized)).digest('hex');

	return `seo:${hash}`;
}
