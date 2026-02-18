import type { Handle } from '@sveltejs/kit';
import crypto from 'node:crypto';
import { Resource } from 'sst';
import { clerkClient } from 'svelte-clerk/server';

function hash(data: object) {
	return crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64url');
}

const WEEK = 7 * 24 * 60 * 60 * 1000;

export const syncUserHandle: Handle = async ({ event, resolve }) => {
	const auth = event.locals.auth?.();
	const userId = auth?.userId;

	// ─────────────────────────────
	// 1) LOGOUT → Clear cookies
	// ─────────────────────────────
	if (!userId) {
		if (event.cookies.get('user_hash')) {
			event.cookies.delete('user_hash', { path: '/' });
			event.cookies.delete('user_hash_set_at', { path: '/' });
		}
		return resolve(event);
	}

	// ─────────────────────────────
	// 2) Cookie cache check
	// ─────────────────────────────
	const cookieHash = event.cookies.get('user_hash');
	const cookieAt = Number(event.cookies.get('user_hash_set_at') || 0);
	const now = Date.now();

	if (cookieHash && cookieAt && now - cookieAt < WEEK) {
		return resolve(event);
	}

	// ─────────────────────────────
	// 3) Get Clerk profile
	// ─────────────────────────────
	const clerkUser = await clerkClient.users.getUser(userId);

	const profile = {
		userId,
		email: clerkUser.emailAddresses?.[0]?.emailAddress ?? null,
		firstName: clerkUser.firstName ?? null,
		lastName: clerkUser.lastName ?? null,
		imageUrl: clerkUser.imageUrl ?? null
	};

	// ─────────────────────────────
	// 4) Fetch AIMirror user
	// ─────────────────────────────
	let userRecord = null;
	try {
		const res = await fetch(`${Resource.AIMApi.url}/user/${userId}`);
		userRecord = res.ok ? await res.json() : null;
	} catch {
		userRecord = null;
	}

	// ─────────────────────────────
	// 5) Upsert user with Clerk data
	// ─────────────────────────────
	const upsertPayload = {
		...profile,
		plan: userRecord?.plan ?? 'free',
		createdAt: userRecord?.createdAt ?? now,
		updatedAt: now,
		lastActiveAt: now
	};

	await fetch(`${Resource.AIMApi.url}/user/upsert`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(upsertPayload)
	});

	// ─────────────────────────────
	// 6) New hash cookie
	// ─────────────────────────────
	const newHash = hash({
		id: userId,
		updatedAt: upsertPayload.updatedAt
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
