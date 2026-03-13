import type { Handle } from '@sveltejs/kit';
import crypto from 'node:crypto';
import { Resource } from 'sst';
import { clerkClient } from 'svelte-clerk/server';

function hash(data: object) {
	return crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64url');
}

function getPlanForUser(auth: ClerkAuthObject | null): Plan {
	if (auth?.has({ plan: 'scale' })) return 'scale';
	if (auth?.has({ plan: 'pro' })) return 'pro';
	return 'free_user';
}

const WEEK = 7 * 24 * 60 * 60 * 1000;

export const syncUserHandle: Handle = async ({ event, resolve }) => {
	const auth = event.locals.auth?.();
	const userId = auth?.userId;

	if (!userId) {
		event.cookies.delete('user_hash', { path: '/' });
		event.cookies.delete('user_hash_set_at', { path: '/' });
		return resolve(event);
	}

	const now = Date.now();
	const cookieHash = event.cookies.get('user_hash');
	const cookieAt = Number(event.cookies.get('user_hash_set_at') || 0);

	if (cookieHash && cookieAt && now - cookieAt < WEEK) {
		return resolve(event);
	}

	const clerkUser = await clerkClient.users.getUser(userId);
	const clerkPlan = getPlanForUser(auth);

	const payload = {
		userId,
		email: clerkUser.emailAddresses?.[0]?.emailAddress ?? null,
		firstName: clerkUser.firstName ?? null,
		lastName: clerkUser.lastName ?? null,
		imageUrl: clerkUser.imageUrl ?? null,
		plan: clerkPlan,
		lastActiveAt: now
	};

	const res = await fetch(`${Resource.MetarankAPI.url}/v1/account/internal/sync`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	});

	if (!res.ok) {
		return resolve(event);
	}

	const account = await res.json();

	const newHash = hash({
		id: userId,
		plan: account.plan,
		updatedAt: account.updatedAt
	});

	event.cookies.set('user_hash', newHash, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: process.env.NODE_ENV === 'production',
		maxAge: WEEK / 1000
	});

	event.cookies.set('user_hash_set_at', now.toString(), {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: process.env.NODE_ENV === 'production',
		maxAge: WEEK / 1000
	});

	return resolve(event);
};