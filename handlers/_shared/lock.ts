import crypto from 'node:crypto';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
	marshallOptions: { removeUndefinedValues: true }
});

const LOCK_TTL_SECONDS = 30;

export type SeoGenerationLock = {
	cacheKey: string;
	ownerId: string;
	ttl: number;
};

export async function acquireSeoLock(cacheKey: string): Promise<SeoGenerationLock | null> {
	const ownerId = crypto.randomUUID();
	const now = Math.floor(Date.now() / 1000);
	const ttl = now + LOCK_TTL_SECONDS;

	try {
		await db.send(
			new PutCommand({
				TableName: Resource.MetarankSeoLocks.name,
				Item: {
					cacheKey,
					ownerId,
					createdAt: now,
					ttl
				},
				ConditionExpression: 'attribute_not_exists(cacheKey)'
			})
		);

		return {
			cacheKey,
			ownerId,
			ttl
		};
	} catch (err: any) {
		// ConditionalCheckFailedException = someone else owns the lock
		if (err?.name === 'ConditionalCheckFailedException') {
			return null;
		}

		throw err;
	}
}

export async function releaseSeoLock(lock: SeoGenerationLock): Promise<void> {
	try {
		await db.send(
			new DeleteCommand({
				TableName: Resource.MetarankSeoLocks.name,
				Key: { cacheKey: lock.cacheKey },
				ConditionExpression: 'ownerId = :ownerId',
				ExpressionAttributeValues: {
					':ownerId': lock.ownerId
				}
			})
		);
	} catch {
		// ignore release failures; TTL will clean up stale locks
	}
}
