import { json } from "@sveltejs/kit";
import { Resource } from "sst";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: { removeUndefinedValues: true }
});
const UNLIMITED_OWNER_USER_ID = process.env.METARANK_UNLIMITED_USER_ID?.trim();
function normalizePlan(userId, plan) {
  if (UNLIMITED_OWNER_USER_ID && userId === UNLIMITED_OWNER_USER_ID) {
    return "unlimited";
  }
  if (plan === "team" || plan === "pro" || plan === "free_user") {
    return plan;
  }
  return "free_user";
}
async function GET({ locals }) {
  const auth = locals.auth?.();
  const userId = auth?.userId;
  if (!userId) {
    return json({ error: "Unauthorized" }, { status: 401 });
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
    return json({ error: "Account not found" }, { status: 404 });
  }
  const billing = billingResult.Item ?? null;
  const plan = normalizePlan(userId, billing?.plan ?? user.plan ?? "free_user");
  return json({
    userId,
    plan,
    status: billing?.status ?? "active",
    requestsLimit: billing?.requestsLimit ?? null,
    stripeCustomerId: billing?.stripeCustomerId ?? null,
    stripeSubscriptionId: billing?.stripeSubscriptionId ?? null
  });
}
export {
  GET
};
