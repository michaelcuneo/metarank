import { buildClerkProps } from 'svelte-clerk/server';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	if (!locals.auth().userId) {
		cookies.delete('user_hash', {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production'
		});
	}
	return {
		...buildClerkProps(locals.auth()),
		auth: {
			isSignedIn: Boolean(locals.auth().userId)
		}
	};
};
