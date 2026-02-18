import { usersTable, usageSnapshotsTable, billingTable } from "./tables";
import { OpenAIKey, ClerkPublishableKey } from "./config";

// Aim API
const metarankApi = new sst.aws.ApiGatewayV2("MetarankAPI", {
  link: [
    usersTable,
    usageSnapshotsTable,
    billingTable,
    OpenAIKey,
    ClerkPublishableKey,
  ],
  cors: {
    allowMethods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowOrigins: ["*"],
    allowHeaders: ["*"],
  },
  transform: {
    route: {
      handler: (args, opts) => {
        args.memory ??= "128 MB";
      },
    },
  },
});

metarankApi.route("GET /", "./handlers/root.handler");
metarankApi.route("GET /users/{userId}", "./handlers/user.getUser");
metarankApi.route("POST /users", "./handlers/user.listUsers");
metarankApi.route("POST /usage-snapshots", "./handlers/usage.snapshots");
metarankApi.route("GET /billing/{userId}", "./handlers/billing.getBillingInfo");

export { metarankApi };
