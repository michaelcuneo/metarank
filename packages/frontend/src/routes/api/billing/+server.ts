import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

export async function GET({ locals }) {
	const auth = locals.auth?.();
	const userId = auth?.userId;

	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	const [userResult, billingResult] = await Promise.all([
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
		)
	]);

	const user = userResult.Item;
	if (!user) {
		return json({ error: 'Account not found' }, { status: 404 });
	}

	const billing = billingResult.Item ?? null;

	return json({
		userId,
		plan: billing?.plan ?? user.plan ?? 'free_user',
		status: billing?.status ?? 'active',
		requestsLimit: billing?.requestsLimit ?? null,
		stripeCustomerId: billing?.stripeCustomerId ?? null,
		stripeSubscriptionId: billing?.stripeSubscriptionId ?? null
	});
}