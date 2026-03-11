import type { Handle } from '@sveltejs/kit';
import crypto from 'node:crypto';
import { Resource } from 'sst';
import { clerkClient } from 'svelte-clerk/server';

function hash(data: object) {
	return crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64url');
}

function getPlanLimitsForUser(auth: ClerkAuthObject | null): Plan {
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

	// 1. Clerk is source of truth
	const clerkUser = await clerkClient.users.getUser(userId);
	const clerkPlan = getPlanLimitsForUser(auth);

	// 2. Fetch DB user
	let userRecord = null;
	try {
		const res = await fetch(`${Resource.MetarankAPI.url}/user/${userId}`);
		userRecord = res.ok ? await res.json() : null;
	} catch {
		// ignore
	}

	const dbPlan = userRecord?.plan ?? 'free_user';
	const planChanged = clerkPlan !== dbPlan;

	// 3. NOW it's safe to check the cookie
	const cookieHash = event.cookies.get('user_hash');
	const cookieAt = Number(event.cookies.get('user_hash_set_at') || 0);

	if (!planChanged && cookieHash && cookieAt && now - cookieAt < WEEK) {
		return resolve(event);
	}

	// 4. Clear derived state on plan change
	if (planChanged) {
		event.cookies.delete('user_hash', { path: '/' });
		event.cookies.delete('user_hash_set_at', { path: '/' });
	}

	// 5. Upsert canonical user record
	const profile = {
		userId,
		email: clerkUser.emailAddresses?.[0]?.emailAddress ?? null,
		firstName: clerkUser.firstName ?? null,
		lastName: clerkUser.lastName ?? null,
		imageUrl: clerkUser.imageUrl ?? null
	};

	const upsertPayload = {
		...profile,
		plan: clerkPlan,
		createdAt: userRecord?.createdAt ?? now,
		updatedAt: now,
		lastActiveAt: now
	};

	await fetch(`${Resource.MetarankAPI.url}/user/upsert`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(upsertPayload)
	});

	// 6. Issue new hash (plan-aware)
	const newHash = hash({
		id: userId,
		plan: clerkPlan,
		updatedAt: now
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
