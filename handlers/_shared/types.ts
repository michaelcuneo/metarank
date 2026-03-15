export type Plan = 'free_user' | 'pro' | 'team';

export type UserRecord = {
	userId: string;
	email?: string | null;
	firstName?: string | null;
	lastName?: string | null;
	imageUrl?: string | null;
	plan: Plan;
	status?: 'active' | 'suspended';
	createdAt: number;
	updatedAt: number;
	lastActiveAt?: number;
};

export type BillingRecord = {
	userId: string;
	plan?: Plan;
	requestsLimit?: number;
	stripeCustomerId?: string | null;
	stripeSubscriptionId?: string | null;
	status?: string;
	createdAt?: number;
	updatedAt?: number;
};

export type UsageSnapshotRecord = {
	userId: string;
	period: string;
	requestCount: number;
	updatedAt: string;
};

export type ApiKeyRecord = {
	keyHash: string;
	keyId: string;
	userId: string;
	name: string;
	prefix: string;
	createdAt: number;
	revokedAt?: number | null;
};

export type SeoCacheRecord = {
	cacheKey: string;
	response: string;
	createdAt: string;
	ttl: number;
};
