import { json } from '@sveltejs/kit';
import { Resource } from 'sst';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function POST({ request }) {
	const body = await request.json();

	const now = Date.now();

	const existing = await db.send(
		new GetCommand({
			TableName: Resource.MetarankUsers.name,
			Key: { userId: body.userId }
		})
	);

	const item = {
		userId: body.userId,
		email: body.email,
		firstName: body.firstName,
		lastName: body.lastName,
		imageUrl: body.imageUrl,
		plan: body.plan ?? 'free_user',
		createdAt: existing.Item?.createdAt ?? now,
		updatedAt: now,
		lastActiveAt: body.lastActiveAt ?? now
	};

	await db.send(
		new PutCommand({
			TableName: Resource.MetarankUsers.name,
			Item: item
		})
	);

	return json(item);
}
