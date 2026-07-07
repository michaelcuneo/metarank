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
function getPlanLimit(plan) {
  switch (plan) {
    case "unlimited":
      return null;
    case "team":
      return 25e3;
    case "pro":
      return 5e3;
    default:
      return 25;
  }
}
function resolveRequestsLimit(plan, billingLimit) {
  if (billingLimit === null) {
    return null;
  }
  if (typeof billingLimit === "number" && Number.isFinite(billingLimit) && billingLimit >= 0) {
    return billingLimit;
  }
  return getPlanLimit(plan);
}
function getCurrentPeriod() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
}
async function GET({ locals }) {
  const auth = locals.auth?.();
  const userId = auth?.userId;
  if (!userId) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }
  const period = getCurrentPeriod();
  const [userResult, billingResult, usageResult] = await Promise.all([
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
    ),
    db.send(
      new GetCommand({
        TableName: Resource.MetarankUsageSnapshots.name,
        Key: { userId, period }
      })
    )
  ]);
  const user = userResult.Item;
  if (!user) {
    return json({ error: "Account not found" }, { status: 404 });
  }
  const billing = billingResult.Item ?? null;
  const usage = usageResult.Item ?? null;
  const plan = normalizePlan(userId, billing?.plan ?? user.plan ?? "free_user");
  const requestsLimit = resolveRequestsLimit(plan, billing?.requestsLimit);
  const usageType = requestsLimit === null ? "unlimited" : "metered";
  const requestsUsed = Number(usage?.requestCount ?? 0);
  return json({
    period,
    requestsUsed,
    requestsLimit,
    plan,
    usageType
  });
}
export {
  GET
};
