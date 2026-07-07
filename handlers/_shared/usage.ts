import { Resource } from 'sst';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db } from './db';

function getCurrentPeriod(): string {
	return new Date().toISOString().slice(0, 7);
}

export function getPlanLimit(plan: string): number | null {
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

export function resolveRequestsLimit(plan: string, billingLimit?: number | null): number | null {
	if (billingLimit === null) {
		return null;
	}

	if (typeof billingLimit === 'number' && Number.isFinite(billingLimit) && billingLimit >= 0) {
		return billingLimit;
	}

	return getPlanLimit(plan);
}

export function hasReachedUsageLimit(requestCount: number, requestsLimit: number | null): boolean {
	return requestsLimit !== null && requestCount >= requestsLimit;
}

export async function getBilling(userId: string) {
	const result = await db.send(
		new GetCommand({
			TableName: Resource.MetarankBillingTable.name,
			Key: { userId }
		})
	);

	return result.Item ?? null;
}

export async function getCurrentUsage(userId: string) {
	const period = getCurrentPeriod();

	const result = await db.send(
		new GetCommand({
			TableName: Resource.MetarankUsageSnapshots.name,
			Key: {
				userId,
				period
			}
		})
	);

	return {
		period,
		requestCount: Number(result.Item?.requestCount ?? 0)
	};
}

export async function incrementUsage(userId: string) {
	const period = getCurrentPeriod();

	await db.send(
		new UpdateCommand({
			TableName: Resource.MetarankUsageSnapshots.name,
			Key: {
				userId,
				period
			},
			UpdateExpression: 'SET updatedAt = :updatedAt ADD requestCount :increment',
			ExpressionAttributeValues: {
				':updatedAt': new Date().toISOString(),
				':increment': 1
			}
		})
	);
}
