import crypto from 'node:crypto';
import { Resource } from 'sst';
import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { db } from './db';

function hashApiKey(rawKey: string): string {
	return crypto.createHash('sha256').update(rawKey).digest('hex');
}

export async function requireApiKeyUser(event: any) {
	const auth =
		event.headers?.authorization ??
		event.headers?.Authorization;

	if (!auth?.startsWith('Bearer ')) {
		throw new Error('Invalid API key');
	}

	const rawKey = auth.slice('Bearer '.length).trim();

	if (!rawKey.startsWith('mrk_')) {
		throw new Error('Invalid API key');
	}

	const keyHash = hashApiKey(rawKey);

	const keyResult = await db.send(
		new GetCommand({
			TableName: Resource.MetarankApiKeys.name,
			Key: { keyHash }
		})
	);

	const apiKey = keyResult.Item;
	if (!apiKey || apiKey.revokedAt) {
		throw new Error('Invalid API key');
	}

	const userResult = await db.send(
		new GetCommand({
			TableName: Resource.MetarankUsers.name,
			Key: { userId: apiKey.userId }
		})
	);

	const user = userResult.Item;
	if (!user) {
		throw new Error('Account not found');
	}

	return { apiKey, user };
}