// @ts-nocheck
import { error, fail } from '@sveltejs/kit';
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

type CreatedKey = {
	keyId: string;
	name: string;
	key: string;
	prefix: string;
	createdAt: number;
};

async function getErrorMessage(res: Response) {
	const body = await res.text().catch(() => '');

	if (!body) {
		return `Request failed with status ${res.status}`;
	}

	try {
		const parsed = JSON.parse(body) as { error?: string };
		return parsed.error ?? body;
	} catch {
		return body;
	}
}

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	const res = await fetch('/api/keys');

	if (!res.ok) {
		const message = await getErrorMessage(res);
		console.error('/api/keys load failed:', res.status, message);
		throw error(res.status, message);
	}

	const data = (await res.json()) as KeysResponse;

	return {
		keys: data.items
	};
};

export const actions = {
	create: async ({ request, fetch }: import('./$types').RequestEvent) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString().trim() ?? '';

		if (!name) {
			return fail(400, {
				createError: 'Key name is required.'
			});
		}

		const res = await fetch('/api/keys', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		});

		if (!res.ok) {
			const message = await getErrorMessage(res);

			return fail(res.status, {
				createError: message
			});
		}

		const createdKey = (await res.json()) as CreatedKey;

		return {
			createdKey
		};
	},

	revoke: async ({ request, fetch }: import('./$types').RequestEvent) => {
		const formData = await request.formData();
		const keyId = formData.get('keyId')?.toString() ?? '';

		if (!keyId) {
			return fail(400, {
				revokeError: 'Missing API key id.'
			});
		}

		const res = await fetch(`/api/keys/${keyId}`, {
			method: 'DELETE'
		});

		if (!res.ok && res.status !== 204) {
			const message = await getErrorMessage(res);

			return fail(res.status, {
				revokeError: message
			});
		}

		return {
			revokedKeyId: keyId
		};
	}
};
;null as any as Actions;