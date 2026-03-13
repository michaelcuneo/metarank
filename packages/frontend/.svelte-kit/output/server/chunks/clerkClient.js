import { createClerkClient } from "@clerk/backend";
import { constants } from "@clerk/backend/internal";
import { a as getEnvVariable$1, g as getDynamicPublicEnvVariables } from "./getDynamicPublicEnvVariables.js";
import { b as private_env } from "./shared-server.js";
import { apiUrlFromPublishableKey } from "@clerk/shared/apiUrlFromPublishableKey";
function getEnvVariable(name, defaultValue) {
  return name in private_env ? private_env[name] : defaultValue;
}
function getDynamicPrivateEnvVariables() {
  return {
    apiVersion: getEnvVariable("CLERK_API_VERSION", "v1"),
    secretKey: getEnvVariable("CLERK_SECRET_KEY"),
    jwtKey: getEnvVariable("CLERK_JWT_KEY")
  };
}
const API_VERSION = getEnvVariable$1("PUBLIC_CLERK_API_VERSION", "v1");
const PUBLISHABLE_KEY = getDynamicPublicEnvVariables().publishableKey;
const API_URL = getEnvVariable$1("PUBLIC_CLERK_API_URL", apiUrlFromPublishableKey(PUBLISHABLE_KEY));
const TELEMETRY_DISABLED = getDynamicPublicEnvVariables().telemetryDisabled;
const TELEMETRY_DEBUG = getDynamicPublicEnvVariables().telemetryDebug;
const SECRET_KEY = getDynamicPrivateEnvVariables().secretKey;
const JWT_KEY = getDynamicPrivateEnvVariables().jwtKey;
const { Cookies, Headers } = constants;
const clerkClient = createClerkClient({
  secretKey: SECRET_KEY,
  apiUrl: API_URL,
  apiVersion: API_VERSION,
  jwtKey: JWT_KEY,
  telemetry: {
    disabled: TELEMETRY_DISABLED,
    debug: TELEMETRY_DEBUG
  }
});
export {
  Cookies as C,
  Headers as H,
  PUBLISHABLE_KEY as P,
  SECRET_KEY as S,
  clerkClient as c
};
