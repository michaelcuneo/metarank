// @ts-nocheck
import { buildClerkProps } from 'svelte-clerk/server';
import type { LayoutServerLoad } from './$types.js';

export const load = async ({ locals, cookies }: Parameters<LayoutServerLoad>[0]) => {
	if (!locals.auth().userId) {
		cookies.delete('user_hash', {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production'
		});
	}
	return {
		...buildClerkProps(locals.auth())
	};
};
