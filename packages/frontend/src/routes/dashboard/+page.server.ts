import { redirect } from '@sveltejs/kit';

export async function load({ locals, fetch }) {
	const auth = locals.auth?.();

	if (!auth?.userId) {
		throw redirect(302, '/login');
	}

	const [accountRes, usageRes] = await Promise.all([
		fetch('/api/account'),
		fetch('/api/usage')
	]);

	if (!accountRes.ok) {
		throw new Error('Failed to load account');
	}

	if (!usageRes.ok) {
		throw new Error('Failed to load usage');
	}

	return {
		account: await accountRes.json(),
		usage: await usageRes.json()
	};
}