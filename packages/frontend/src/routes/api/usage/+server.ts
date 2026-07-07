import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

type Plan = 'free_user' | 'pro' | 'team' | 'unlimited';

type UsageType = 'metered' | 'unlimited';

const UNLIMITED_OWNER_USER_ID = process.env.METARANK_UNLIMITED_USER_ID?.trim();

function normalizePlan(userId: string, plan: unknown): Plan {
	if (UNLIMITED_OWNER_USER_ID && userId === UNLIMITED_OWNER_USER_ID) {
		return 'unlimited';
	}

	if (plan === 'team' || plan === 'pro' || plan === 'free_user') {
		return plan;
	}

	return 'free_user';
}

function getPlanLimit(plan: Plan): number | null {
	switch (plan) {
		case 'unlimited':
			return null;
		case 'team':
			return 25000;
		case 'pro':
			return 5000;
		default:
			return 25;
	}
}

function resolveRequestsLimit(plan: Plan, billingLimit: unknown): number | null {
	if (billingLimit === null) {
		return null;
	}

	if (typeof billingLimit === 'number' && Number.isFinite(billingLimit) && billingLimit >= 0) {
		return billingLimit;
	}

	return getPlanLimit(plan);
}

function getCurrentPeriod(): string {
	return new Date().toISOString().slice(0, 7);
}

export async function GET({ locals }) {
	const auth = locals.auth?.();
	const userId = auth?.userId;

	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	const period = getCurrentPeriod();

	const [userResult, billingResult, usageResult] = await Promise.all([
		db.send(
			new GetCommand({
				TableName: Resource.MetarankUsers.name,
				Key: { userId }
			})
		),
		db.send(
			new GetCommand({
				TableName: Resource.MetarankBillingTable.name,
				Key: { userId }
			})
		),
		db.send(
			new GetCommand({
				TableName: Resource.MetarankUsageSnapshots.name,
				Key: { userId, period }
			})
		)
	]);

	const user = userResult.Item;
	if (!user) {
		return json({ error: 'Account not found' }, { status: 404 });
	}

	const billing = billingResult.Item ?? null;
	const usage = usageResult.Item ?? null;

	const plan = normalizePlan(userId, billing?.plan ?? user.plan ?? 'free_user');
	const requestsLimit = resolveRequestsLimit(plan, billing?.requestsLimit);
	const usageType: UsageType = requestsLimit === null ? 'unlimited' : 'metered';
	const requestsUsed = Number(usage?.requestCount ?? 0);

	return json({
		period,
		requestsUsed,
		requestsLimit,
		plan,
		usageType
	});
}
