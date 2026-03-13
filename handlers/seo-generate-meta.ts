import { requireApiKeyUser } from './_shared/auth';
import { getCachedSeoMeta, setCachedSeoMeta } from './_shared/cache';
import { createSeoCacheKey } from './_shared/cacheKey';
import { getBilling, getCurrentUsage, getPlanLimit, incrementUsage } from './_shared/usage';
import { ok, badRequest, unauthorized, forbidden, tooManyRequests, internalError } from './_shared/http';
import { generateSeoMeta } from './_shared/generateSeoMeta';

type GenerateSeoRequest = {
	title: string;
	body: string;
	location?: string;
	targetQuery?: string;
};

export async function handler(event: any) {
	try {
		const { user } = await requireApiKeyUser(event);

		if ((user.status ?? 'active') !== 'active') {
			return forbidden('Account is not active');
		}

		if (!event.body) {
			return badRequest('Request body is required');
		}

		const body = JSON.parse(event.body) as GenerateSeoRequest;

		if (!body.title?.trim()) {
			return badRequest('Title is required');
		}

		if (!body.body?.trim()) {
			return badRequest('Body is required');
		}

		const billing = await getBilling(user.userId);
		const plan = billing?.plan ?? user.plan ?? 'free_user';
		const usage = await getCurrentUsage(user.userId);
		const requestsLimit = billing?.requestsLimit ?? getPlanLimit(plan);

		if (usage.requestCount >= requestsLimit) {
			return tooManyRequests('Monthly usage limit reached');
		}

		const cacheKey = createSeoCacheKey(body);
		const cached = await getCachedSeoMeta(cacheKey);

		if (cached) {
			await incrementUsage(user.userId);

			return ok(cached, {
				'X-MetaRank-Cache': 'hit'
			});
		}

		const result = await generateSeoMeta(body);

		await Promise.all([
			setCachedSeoMeta(cacheKey, result),
			incrementUsage(user.userId)
		]);

		return ok(result, {
			'X-MetaRank-Cache': 'miss'
		});
	} catch (err: any) {
		if (err?.message === 'Invalid API key') {
			return unauthorized('Invalid API key');
		}

		if (err?.message === 'Account not found') {
			return forbidden('Account not found');
		}

		console.error('seo-generate-meta failed', err);
		return internalError(err?.message ?? 'Failed to generate SEO metadata');
	}
}