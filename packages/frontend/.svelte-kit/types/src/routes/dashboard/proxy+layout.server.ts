// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

type UsageResponse = {
	period: string;
	requestsUsed: number;
	requestsLimit: number | null;
	plan: 'free_user' | 'pro' | 'team' | 'unlimited';
	usageType: 'metered' | 'unlimited';
};

export const load = async ({ locals, fetch }: Parameters<LayoutServerLoad>[0]) => {
	const auth = locals.auth?.();

	if (!auth?.userId) {
		throw redirect(302, '/signin');
	}

	const usageRes = await fetch('/api/usage');

	if (!usageRes.ok) {
		throw error(usageRes.status, 'Failed to load usage');
	}

	const usage = (await usageRes.json()) as UsageResponse;

	return {
		userId: auth.userId,
		usage
	};
};
