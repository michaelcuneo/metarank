import { requireApiKeyUser } from './_shared/auth';
import { getCachedSeoMeta, setCachedSeoMeta } from './_shared/cache';
import { createSeoCacheKey } from './_shared/cacheKey';
import { acquireSeoLock, releaseSeoLock } from './_shared/lock';
import { waitForCachedSeoMeta } from './_shared/waitForCache';
import { getBilling, getCurrentUsage, getPlanLimit, incrementUsage } from './_shared/usage';
import {
	ok,
	badRequest,
	unauthorized,
	forbidden,
	tooManyRequests,
	internalError
} from './_shared/http';
import { generateSeoMeta } from './_shared/generateSeoMeta';

type GenerateSeoRequest = {
	title: string;
	body: string;
	location?: string;
	targetQuery?: string;
};

function normalizeRequestBody(body: GenerateSeoRequest): GenerateSeoRequest {
	return {
		title: body.title?.trim() ?? '',
		body: body.body?.trim() ?? '',
		location: body.location?.trim() || undefined,
		targetQuery: body.targetQuery?.trim() || undefined
	};
}

export async function handler(event: any) {
	try {
		const { user } = await requireApiKeyUser(event);

		if ((user.status ?? 'active') !== 'active') {
			return forbidden('Account is not active');
		}

		if (!event.body) {
			return badRequest('Request body is required');
		}

		let parsedBody: GenerateSeoRequest;

		try {
			parsedBody = JSON.parse(event.body);
		} catch {
			return badRequest('Invalid JSON body');
		}

		const body = normalizeRequestBody(parsedBody);

		if (!body.title) {
			return badRequest('Title is required');
		}

		if (!body.body) {
			return badRequest('Body is required');
		}

		if (body.body.length > 10_000) {
			return badRequest('Body exceeds maximum length');
		}

		const billing = await getBilling(user.userId);
		const plan = billing?.plan ?? user.plan ?? 'free_user';
		const usage = await getCurrentUsage(user.userId);
		const requestsLimit = billing?.requestsLimit ?? getPlanLimit(plan);

		if (usage.requestCount >= requestsLimit) {
			return tooManyRequests('Monthly usage limit reached');
		}

		const cacheKey = createSeoCacheKey({
			title: body.title,
			body: body.body,
			location: body.location,
			targetQuery: body.targetQuery
		});

		const cached = await getCachedSeoMeta(cacheKey);

		if (cached) {
			await incrementUsage(user.userId);

			return ok(cached, {
				'X-MetaRank-Cache': 'hit'
			});
		}

		const lock = await acquireSeoLock(cacheKey);

		if (!lock) {
			const waited = await waitForCachedSeoMeta(cacheKey, {
				attempts: 10,
				delayMs: 400
			});

			if (waited) {
				await incrementUsage(user.userId);

				return ok(waited, {
					'X-MetaRank-Cache': 'hit-after-wait'
				});
			}

			const retryCached = await getCachedSeoMeta(cacheKey);

			if (retryCached) {
				await incrementUsage(user.userId);

				return ok(retryCached, {
					'X-MetaRank-Cache': 'late-hit'
				});
			}
		}

		try {
			const result = await generateSeoMeta(body);

			await Promise.all([setCachedSeoMeta(cacheKey, result), incrementUsage(user.userId)]);

			return ok(result, {
				'X-MetaRank-Cache': 'miss'
			});
		} finally {
			if (lock) {
				await releaseSeoLock(lock);
			}
		}
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
