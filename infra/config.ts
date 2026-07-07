const ClerkPublishableKey = new sst.Secret("PUBLIC_CLERK_PUBLISHABLE_KEY");
const ClerkSecretKey = new sst.Secret("CLERK_SECRET_KEY");
const OpenAIKey = new sst.Secret("OPENAI_KEY");
const UnlimitedUserId = new sst.Secret("METARANK_UNLIMITED_USER_ID");

export { ClerkPublishableKey, ClerkSecretKey, OpenAIKey, UnlimitedUserId };
