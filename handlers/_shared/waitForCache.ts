import { getCachedSeoMeta } from './cache';

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitForCachedSeoMeta<T>(
	cacheKey: string,
	options?: {
		attempts?: number;
		delayMs?: number;
	}
): Promise<T | null> {
	const attempts = options?.attempts ?? 10;
	const delayMs = options?.delayMs ?? 400;

	for (let i = 0; i < attempts; i++) {
		const cached = await getCachedSeoMeta<T>(cacheKey);

		if (cached) {
			return cached;
		}

		await sleep(delayMs);
	}

	return null;
}
