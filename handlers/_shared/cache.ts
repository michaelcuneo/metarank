import crypto from 'node:crypto';

const META_ENGINE_VERSION = 'metarank-v1';
const META_MODEL = 'gpt-4o-mini';

export function createSeoCacheKey(input: {
	title: string;
	body: string;
	location?: string;
	targetQuery?: string;
}): string {
	const normalized = JSON.stringify({
		title: input.title.trim(),
		body: input.body.replace(/\s+/g, ' ').trim(),
		location: input.location?.trim() ?? '',
		targetQuery: input.targetQuery?.trim() ?? '',
		version: META_ENGINE_VERSION,
		model: META_MODEL
	});

	return crypto.createHash('sha256').update(normalized).digest('hex');
}