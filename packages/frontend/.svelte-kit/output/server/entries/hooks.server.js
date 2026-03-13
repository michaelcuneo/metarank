import { sequence } from "@sveltejs/kit/hooks";
import "@clerk/backend";
import "@sveltejs/kit";
import { c as clerkClient, P as PUBLISHABLE_KEY, S as SECRET_KEY, H as Headers, C as Cookies } from "../chunks/clerkClient.js";
import { createClerkRequest, TokenType, AuthStatus } from "@clerk/backend/internal";
import { splitCookiesString, parse } from "set-cookie-parser";
import { handleNetlifyCacheInDevInstance } from "@clerk/shared/netlifyCacheHandler";
import { handleValueOrFn } from "@clerk/shared/utils";
import { isHttpOrHttps } from "@clerk/shared/proxy";
import { isDevelopmentFromSecretKey } from "@clerk/shared/keys";
import { g as getDynamicPublicEnvVariables } from "../chunks/getDynamicPublicEnvVariables.js";
import { isTruthy } from "@clerk/shared/underscore";
import { P as PUBLIC_CLERK_PUBLISHABLE_KEY } from "../chunks/public.js";
import crypto from "node:crypto";
import { Resource } from "sst";
function patchRequest(request) {
  const clonedRequest = new Request(request.url, {
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
    cache: request.cache,
    signal: request.signal
  });
  if (clonedRequest.method !== "GET" && clonedRequest.body !== null && !("duplex" in clonedRequest)) {
    clonedRequest.duplex = "half";
  }
  return clonedRequest;
}
function withClerkHandler(middlewareOptions) {
  return async ({ event, resolve }) => {
    const { debug = false, ...options } = middlewareOptions ?? {};
    const clerkWebRequest = createClerkRequest(patchRequest(event.request));
    if (debug) {
      console.log("[svelte-clerk] " + JSON.stringify(clerkWebRequest.toJSON()));
    }
    const requestState = await clerkClient.authenticateRequest(clerkWebRequest, {
      ...options,
      secretKey: options?.secretKey ?? SECRET_KEY,
      publishableKey: options?.publishableKey ?? PUBLISHABLE_KEY,
      ...handleMultiDomainAndProxy(clerkWebRequest, options),
      acceptsToken: TokenType.SessionToken
    });
    const locationHeader = requestState.headers.get(Headers.Location);
    if (locationHeader) {
      if (debug) {
        console.log("[svelte-clerk] Handshake redirect triggered");
      }
      handleNetlifyCacheInDevInstance({
        locationHeader,
        publishableKey: requestState.publishableKey,
        requestStateHeaders: requestState.headers
      });
      return new Response(null, { status: 307, headers: requestState.headers });
    }
    if (requestState.status === AuthStatus.Handshake) {
      throw new Error("[svelte-clerk] Handshake status without redirect");
    }
    const auth = (options2) => requestState.toAuth(options2);
    decorateLocals(event, auth);
    if (debug) {
      console.log("[svelte-clerk] " + JSON.stringify(auth()));
    }
    decorateHeaders(event, requestState.headers);
    return resolve(event);
  };
}
function decorateHeaders(event, headers) {
  const setCookie = headers.get("set-cookie");
  if (setCookie) {
    const splitCookies = splitCookiesString(setCookie);
    const parsedCookies = parse(splitCookies);
    parsedCookies.forEach((parsedCookie) => {
      const { name, value, ...options } = parsedCookie;
      if (name === Cookies.Session || name.startsWith(Cookies.Session)) {
        const cookieOptions = {
          path: options.path || "/",
          expires: options.expires,
          maxAge: options.maxAge,
          domain: options.domain,
          secure: options.secure,
          httpOnly: options.httpOnly,
          // Use Clerk's original setting
          sameSite: options.sameSite
        };
        if (!options.httpOnly) {
          cookieOptions.httpOnly = false;
        }
        event.cookies.set(name, value, cookieOptions);
      } else {
        event.cookies.set(name, value, options);
      }
    });
    headers.delete("set-cookie");
  }
  event.setHeaders(Object.fromEntries(headers));
}
function decorateLocals(event, auth) {
  event.locals.auth = auth;
}
function handleMultiDomainAndProxy(clerkRequest, opts) {
  const relativeOrAbsoluteProxyUrl = handleValueOrFn(opts?.proxyUrl, clerkRequest.clerkUrl, getDynamicPublicEnvVariables().proxyUrl);
  let proxyUrl;
  if (!!relativeOrAbsoluteProxyUrl && !isHttpOrHttps(relativeOrAbsoluteProxyUrl)) {
    proxyUrl = new URL(relativeOrAbsoluteProxyUrl, clerkRequest.clerkUrl).toString();
  } else {
    proxyUrl = relativeOrAbsoluteProxyUrl;
  }
  const isSatellite = handleValueOrFn(opts.isSatellite, new URL(clerkRequest.url), isTruthy(getDynamicPublicEnvVariables().isSatellite) || false);
  const domain = handleValueOrFn(opts.domain, new URL(clerkRequest.url), getDynamicPublicEnvVariables().domain);
  const signInUrl = opts?.signInUrl || getDynamicPublicEnvVariables().signInUrl;
  if (isSatellite && !proxyUrl && !domain) {
    throw new Error(missingDomainAndProxy);
  }
  if (isSatellite && !isHttpOrHttps(signInUrl) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  isDevelopmentFromSecretKey(opts.secretKey || SECRET_KEY)) {
    throw new Error(missingSignInUrlInDev);
  }
  return {
    proxyUrl,
    isSatellite,
    domain
  };
}
const missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With handler
   e.g. export const handle = withClerkHandler({domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   PUBLIC_CLERK_IS_SATELLITE='true'
   `;
const missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With handler
   e.g. export const handle = withClerkHandler({signInUrl:'SOME_URL', isSatellite:true});
2) With environment variables e.g.
   PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   PUBLIC_CLERK_IS_SATELLITE='true'`;
const clerkHandle = withClerkHandler({
  publishableKey: PUBLIC_CLERK_PUBLISHABLE_KEY
});
function hash(data) {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("base64url");
}
function getPlanForUser(auth) {
  if (auth?.has({ plan: "scale" })) return "scale";
  if (auth?.has({ plan: "pro" })) return "pro";
  return "free_user";
}
const WEEK = 7 * 24 * 60 * 60 * 1e3;
const syncUserHandle = async ({ event, resolve }) => {
  const auth = event.locals.auth?.();
  const userId = auth?.userId;
  if (!userId) {
    event.cookies.delete("user_hash", { path: "/" });
    event.cookies.delete("user_hash_set_at", { path: "/" });
    return resolve(event);
  }
  const now = Date.now();
  const cookieHash = event.cookies.get("user_hash");
  const cookieAt = Number(event.cookies.get("user_hash_set_at") || 0);
  if (cookieHash && cookieAt && now - cookieAt < WEEK) {
    return resolve(event);
  }
  const clerkUser = await clerkClient.users.getUser(userId);
  const clerkPlan = getPlanForUser(auth);
  const payload = {
    userId,
    email: clerkUser.emailAddresses?.[0]?.emailAddress ?? null,
    firstName: clerkUser.firstName ?? null,
    lastName: clerkUser.lastName ?? null,
    imageUrl: clerkUser.imageUrl ?? null,
    plan: clerkPlan,
    lastActiveAt: now
  };
  const res = await fetch(`${Resource.MetarankAPI.url}/v1/account/internal/sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    return resolve(event);
  }
  const account = await res.json();
  const newHash = hash({
    id: userId,
    plan: account.plan,
    updatedAt: account.updatedAt
  });
  event.cookies.set("user_hash", newHash, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: WEEK / 1e3
  });
  event.cookies.set("user_hash_set_at", now.toString(), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: WEEK / 1e3
  });
  return resolve(event);
};
const handle = sequence(clerkHandle, syncUserHandle);
export {
  handle
};
