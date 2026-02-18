// const ClerkSecretKeyDev = new sst.Secret("CLERK_SECRET_KEY");
/// const ClerkSecretKeyProd = new sst.Secret("CLERK_SECRET_KEY_PROD");
//const ClerkSecretKey = $app.stage === "production" ? ClerkSecretKeyProd : ClerkSecretKeyDev;

const ClerkPublishableKeyDev = new sst.Secret("PUBLIC_CLERK_PUBLISHABLE_KEY");
const ClerkPublishableKeyProd = new sst.Secret(
  "PUBLIC_CLERK_PUBLISHABLE_KEY_PROD",
);
const ClerkPublishableKey =
  $app.stage === "production"
    ? ClerkPublishableKeyProd
    : ClerkPublishableKeyDev;

const OpenAIKey = new sst.Secret("OPENAI_API_KEY");

export { ClerkPublishableKey, OpenAIKey };
