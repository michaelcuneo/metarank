import { error, redirect } from '@sveltejs/kit';

type AccountResponse = {
	userId: string;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	imageUrl: string | null;
	plan: 'free_user' | 'pro' | 'team' | 'unlimited';
	status: 'active' | 'suspended';
	requestsUsed: number;
	requestsLimit: number | null;
	usageType: 'metered' | 'unlimited';
	createdAt: number;
	updatedAt: number;
};

type UsageResponse = {
	period: string;
	requestsUsed: number;
	requestsLimit: number | null;
	plan: 'free_user' | 'pro' | 'team' | 'unlimited';
	usageType: 'metered' | 'unlimited';
};

type KeysResponse = {
	items: Array<{
		keyId: string;
		name: string;
		prefix: string;
		createdAt: number;
		revoked: boolean;
	}>;
};

type BillingResponse = {
	userId: string;
	plan: 'free_user' | 'pro' | 'team' | 'unlimited';
	status: string;
	requestsLimit: number | null;
	stripeCustomerId: string | null;
	stripeSubscriptionId: string | null;
};

export async function load({ locals, fetch }) {
	const auth = locals.auth?.();

	if (!auth?.userId) {
		throw redirect(302, '/login');
	}

	const [accountRes, usageRes, keysRes, billingRes] = await Promise.all([
		fetch('/api/account'),
		fetch('/api/usage'),
		fetch('/api/keys'),
		fetch('/api/billing')
	]);

	if (!accountRes.ok) {
		throw error(accountRes.status, 'Failed to load account');
	}

	if (!usageRes.ok) {
		throw error(usageRes.status, 'Failed to load usage');
	}

	if (!keysRes.ok) {
		throw error(keysRes.status, 'Failed to load API keys');
	}

	if (!billingRes.ok) {
		throw error(billingRes.status, 'Failed to load billing');
	}

	const [account, usage, keys, billing] = await Promise.all([
		accountRes.json() as Promise<AccountResponse>,
		usageRes.json() as Promise<UsageResponse>,
		keysRes.json() as Promise<KeysResponse>,
		billingRes.json() as Promise<BillingResponse>
	]);

	return {
		account,
		usage,
		keys: keys.items,
		billing
	};
}
