import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

type Plan = 'free_user' | 'pro' | 'team';

function getPlanLimit(plan: Plan): number {
	switch (plan) {
		case 'team':
			return 25000;
		case 'pro':
			return 5000;
		default:
			return 25;
	}
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

	const plan = (billing?.plan ?? user.plan ?? 'free_user') as Plan;
	const requestsLimit = Number(billing?.requestsLimit ?? getPlanLimit(plan));
	const requestsUsed = Number(usage?.requestCount ?? 0);

	return json({
		period,
		requestsUsed,
		requestsLimit,
		plan
	});
}
