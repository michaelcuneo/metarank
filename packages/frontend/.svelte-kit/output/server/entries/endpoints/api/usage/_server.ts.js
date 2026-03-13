import { json } from "@sveltejs/kit";
import { Resource } from "sst";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: { removeUndefinedValues: true }
});
function getPlanLimit(plan) {
  switch (plan) {
    case "scale":
      return 1e4;
    case "pro":
      return 1e3;
    default:
      return 200;
  }
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
  const plan = billing?.plan ?? user.plan ?? "free_user";
  const requestsLimit = Number(billing?.requestsLimit ?? getPlanLimit(plan));
  const requestsUsed = Number(usage?.requestCount ?? 0);
  return json({
    period,
    requestsUsed,
    requestsLimit,
    plan
  });
}
export {
  GET
};
