import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

export async function getCachedSeoMeta(cacheKey: string) {
	const res = await db.send(
		new GetCommand({
			TableName: Resource.MetarankSeoCache.name,
			Key: { cacheKey }
		})
	);

	return res.Item?.response ?? null;
}

export async function setCachedSeoMeta(cacheKey: string, response: unknown) {
	const now = Math.floor(Date.now() / 1000);

	await db.send(
		new PutCommand({
			TableName: Resource.MetarankSeoCache.name,
			Item: {
				cacheKey,
				response,
				createdAt: now,
				ttl: now + TTL_SECONDS
			}
		})
	);
}
