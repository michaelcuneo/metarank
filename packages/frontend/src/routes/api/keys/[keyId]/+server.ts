import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

export async function DELETE({ params, locals }) {
	const auth = locals.auth?.();
	const userId = auth?.userId;

	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	const keyId = params.keyId;

	if (!keyId) {
		return json({ error: 'API key not found' }, { status: 404 });
	}

	const result = await db.send(
		new QueryCommand({
			TableName: Resource.MetarankApiKeys.name,
			IndexName: 'byUser',
			KeyConditionExpression: 'userId = :userId',
			ExpressionAttributeValues: {
				':userId': userId
			}
		})
	);

	const apiKey = (result.Items ?? []).find((item) => item.keyId === keyId);

	if (!apiKey) {
		return json({ error: 'API key not found' }, { status: 404 });
	}

	if (apiKey.revokedAt) {
		return new Response(null, { status: 204 });
	}

	await db.send(
		new UpdateCommand({
			TableName: Resource.MetarankApiKeys.name,
			Key: { keyHash: apiKey.keyHash },
			UpdateExpression: 'SET revokedAt = :revokedAt',
			ExpressionAttributeValues: {
				':revokedAt': Date.now()
			}
		})
	);

	return new Response(null, { status: 204 });
}
