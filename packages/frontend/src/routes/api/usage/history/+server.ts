import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

export async function GET({ locals }) {
	const auth = locals.auth?.();
	const userId = auth?.userId;

	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	const result = await db.send(
		new QueryCommand({
			TableName: Resource.MetarankUsageSnapshots.name,
			KeyConditionExpression: 'userId = :userId',
			ExpressionAttributeValues: {
				':userId': userId
			},
			ScanIndexForward: false,
			Limit: 12
		})
	);

	const items = (result.Items ?? []).map((item) => ({
		period: String(item.period),
		requestCount: Number(item.requestCount ?? 0)
	}));

	return json({ items });
}