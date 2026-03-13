import { json } from "@sveltejs/kit";
import crypto from "node:crypto";
import { Resource } from "sst";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: { removeUndefinedValues: true }
});
function makeRawApiKey() {
  return `mrk_live_${crypto.randomBytes(24).toString("hex")}`;
}
function hashApiKey(rawKey) {
  return crypto.createHash("sha256").update(rawKey).digest("hex");
}
async function GET({ locals }) {
  const auth = locals.auth?.();
  const userId = auth?.userId;
  if (!userId) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await db.send(
    new QueryCommand({
      TableName: Resource.MetarankApiKeys.name,
      IndexName: "byUser",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId
      }
    })
  );
  const items = (result.Items ?? []).map((item) => ({
    keyId: item.keyId,
    name: item.name,
    prefix: item.prefix,
    createdAt: item.createdAt,
    revoked: Boolean(item.revokedAt)
  }));
  return json({ items });
}
async function POST({ request, locals }) {
  const auth = locals.auth?.();
  const userId = auth?.userId;
  if (!userId) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  const name = body?.name?.trim();
  if (!name) {
    return json({ error: "Key name is required" }, { status: 400 });
  }
  const rawKey = makeRawApiKey();
  const keyHash = hashApiKey(rawKey);
  const keyId = crypto.randomUUID();
  const createdAt = Date.now();
  await db.send(
    new PutCommand({
      TableName: Resource.MetarankApiKeys.name,
      Item: {
        keyHash,
        keyId,
        userId,
        name,
        prefix: rawKey.slice(0, 16),
        createdAt,
        revokedAt: null
      },
      ConditionExpression: "attribute_not_exists(keyHash)"
    })
  );
  return json(
    {
      keyId,
      name,
      key: rawKey,
      prefix: rawKey.slice(0, 16),
      createdAt
    },
    { status: 201 }
  );
}
export {
  GET,
  POST
};
