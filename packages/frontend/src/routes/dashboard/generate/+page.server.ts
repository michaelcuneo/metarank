import { error, fail } from '@sveltejs/kit';
import { Resource } from 'sst';
import type { Actions, PageServerLoad } from './$types.js';

type ApiKeyItem = {
	keyId: string;
	name: string;
	prefix: string;
	createdAt: number;
	revoked: boolean;
};

type KeysResponse = {
	items: ApiKeyItem[];
};

type GenerateResult = {
	metaTitle: string;
	metaDescription: string;
	slug: string;
	keywords: string;
	ogDescription: string;
	searchIntent?: string;
	primaryLocation?: string;
	languageCode?: string;
};

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/keys');

	if (!res.ok) {
		throw error(res.status, 'Failed to load API keys');
	}

	const data = (await res.json()) as KeysResponse;

	return {
		keys: data.items.filter((key) => !key.revoked)
	};
};

export const actions: Actions = {
	generate: async ({ request, fetch }) => {
		const formData = await request.formData();

		const apiKey = formData.get('apiKey')?.toString().trim() ?? '';
		const title = formData.get('title')?.toString().trim() ?? '';
		const body = formData.get('body')?.toString().trim() ?? '';
		const location = formData.get('location')?.toString().trim() ?? '';
		const targetQuery = formData.get('targetQuery')?.toString().trim() ?? '';

		if (!apiKey) {
			return fail(400, {
				error: 'Select a key or paste an API key before generating.',
				values: { apiKey, title, body, location, targetQuery }
			});
		}

		if (!title) {
			return fail(400, {
				error: 'Title is required.',
				values: { apiKey, title, body, location, targetQuery }
			});
		}

		if (!body) {
			return fail(400, {
				error: 'Body is required.',
				values: { apiKey, title, body, location, targetQuery }
			});
		}

		const res = await fetch(`${Resource.MetarankAPI.url}/v1/seo/meta`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				title,
				body,
				location: location || undefined,
				targetQuery: targetQuery || undefined
			})
		});

		const data = (await res.json().catch(() => null)) as GenerateResult | { error?: string } | null;

		if (!res.ok) {
			return fail(res.status, {
				error:
					data && 'error' in data
						? (data.error ?? 'Failed to generate metadata')
						: 'Failed to generate metadata',
				values: { apiKey, title, body, location, targetQuery }
			});
		}

		return {
			result: data as GenerateResult,
			values: { apiKey, title, body, location, targetQuery }
		};
	}
};
