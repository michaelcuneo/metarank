import crypto from 'node:crypto';
import { clerkClient } from 'svelte-clerk/server';
function hash(data) {
    return crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64url');
}
function getPlanForUser(auth) {
    if (auth?.has({ plan: 'team' }))
        return 'team';
    if (auth?.has({ plan: 'pro' }))
        return 'pro';
    return 'free_user';
}
const WEEK = 7 * 24 * 60 * 60 * 1000;
async function getCurrentAccount(fetchFn) {
    try {
        const res = await fetchFn('/api/account');
        if (!res.ok) {
            return null;
        }
        const data = (await res.json());
        return {
            userId: String(data.userId),
            plan: data.plan ?? 'free_user',
            updatedAt: Number(data.updatedAt ?? Date.now())
        };
    }
    catch {
        return null;
    }
}
export const syncUserHandle = async ({ event, resolve }) => {
    const auth = event.locals.auth?.();
    const userId = auth?.userId;
    if (!userId) {
        event.cookies.delete('user_hash', { path: '/' });
        event.cookies.delete('user_hash_set_at', { path: '/' });
        return resolve(event);
    }
    if (event.url.pathname.startsWith('/api')) {
        return resolve(event);
    }
    const now = Date.now();
    const cookieHash = event.cookies.get('user_hash');
    const cookieAt = Number(event.cookies.get('user_hash_set_at') || 0);
    const clerkPlan = getPlanForUser(auth);
    const currentAccount = await getCurrentAccount(event.fetch);
    const storedPlan = currentAccount?.plan ?? 'free_user';
    const planChanged = storedPlan !== clerkPlan;
    if (!planChanged && cookieHash && cookieAt && now - cookieAt < WEEK) {
        return resolve(event);
    }
    if (planChanged) {
        event.cookies.delete('user_hash', { path: '/' });
        event.cookies.delete('user_hash_set_at', { path: '/' });
    }
    const clerkUser = await clerkClient.users.getUser(userId);
    const payload = {
        userId,
        email: clerkUser.emailAddresses?.[0]?.emailAddress ?? null,
        firstName: clerkUser.firstName ?? null,
        lastName: clerkUser.lastName ?? null,
        imageUrl: clerkUser.imageUrl ?? null,
        plan: clerkPlan,
        lastActiveAt: now
    };
    const res = await event.fetch('/api/account/internal/sync', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        return resolve(event);
    }
    const account = (await res.json());
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
