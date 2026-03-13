import { redirect, error } from '@sveltejs/kit';

type KeysResponse = {
	items: Array<{
		keyId: string;
		name: string;
		prefix: string;
		createdAt: number;
		revoked: boolean;
	}>;
};

export async function load({ locals, fetch }) {
	const auth = locals.auth?.();

	if (!auth?.userId) {
		throw redirect(302, '/login');
	}

	const res = await fetch('/api/keys');

	if (!res.ok) {
		throw error(res.status, 'Failed to load API keys');
	}

	const keys = (await res.json()) as KeysResponse;

	return {
		keys: keys.items
	};
}