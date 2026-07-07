import { json } from "@sveltejs/kit";
import { Resource } from "sst";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const UNLIMITED_OWNER_USER_ID = process.env.METARANK_UNLIMITED_USER_ID?.trim();
function resolvePlan(userId, requestedPlan) {
  if (UNLIMITED_OWNER_USER_ID && userId === UNLIMITED_OWNER_USER_ID) {
    return "unlimited";
  }
  if (requestedPlan === "team" || requestedPlan === "pro") {
    return requestedPlan;
  }
  return "free_user";
}
async function POST({ request }) {
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
    plan: resolvePlan(String(body.userId), body.plan),
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
export {
  POST
};
