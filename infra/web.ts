import { metarankApi } from "./api";
import { OpenAIKey, ClerkPublishableKey } from "./config";
import { usersTable, billingTable } from "./tables";

export const web = new sst.aws.SvelteKit("MyWeb", {
  path: "./apps/frontend",
  domain: {
    name: "metarank.dev",
  },
  link: [metarankApi, usersTable, billingTable],
  environment: {
    PUBLIC_CLERK_PUBLISHABLE_KEY: ClerkPublishableKey!.value,
    OPENAI_KEY: OpenAIKey!.value,
  },
  permissions: [
    {
      actions: ["*"],
      resources: ["*"],
    },
  ],
  invalidation: {
    paths: ["/*"],
  },
});
