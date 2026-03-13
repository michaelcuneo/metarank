import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const auth = locals.auth?.();

	if (!auth?.userId) {
		throw redirect(302, '/login');
	}

	return {
		userId: auth.userId
	};
}