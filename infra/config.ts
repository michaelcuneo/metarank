// const ClerkSecretKeyDev = new sst.Secret("CLERK_SECRET_KEY");
/// const ClerkSecretKeyProd = new sst.Secret("CLERK_SECRET_KEY_PROD");
//const ClerkSecretKey = $app.stage === "production" ? ClerkSecretKeyProd : ClerkSecretKeyDev;

const ClerkPublishableKey = new sst.Secret("PUBLIC_CLERK_PUBLISHABLE_KEY");
const OpenAIKey = new sst.Secret("OPENAI_KEY");

export { ClerkPublishableKey, OpenAIKey };
