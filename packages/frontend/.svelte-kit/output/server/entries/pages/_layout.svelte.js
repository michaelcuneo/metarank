import "clsx";
import { P as PUBLIC_CLERK_PUBLISHABLE_KEY } from "../../chunks/public.js";
import { d as derived, s as spread_props, a as attr_class, e as escape_html } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
import { B as Button } from "../../chunks/Button.js";
import { u as useClerkContext, s as setClerkContext, U as UserButton } from "../../chunks/errorThrower.js";
import "@clerk/shared/authorization";
import { S as SignInButton } from "../../chunks/SignInButton.js";
import { deriveState } from "@clerk/shared/deriveState";
import { setClerkJsLoadingErrorPackageName } from "@clerk/shared/loadClerkJsScript";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import { A as ApiStatus } from "../../chunks/ApiStatus.js";
import { g as goto } from "../../chunks/client.js";
import { g as getDynamicPublicEnvVariables } from "../../chunks/getDynamicPublicEnvVariables.js";
import { config } from "@fortawesome/fontawesome-svg-core";
function SignedIn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children } = $$props;
    const ctx = useClerkContext();
    if (ctx.auth.userId) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function SignedOut($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children } = $$props;
    const ctx = useClerkContext();
    if (ctx.auth.userId === null) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ClerkProvider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, initialState, $$slots, $$events, ...props } = $$props;
    let clerk = null;
    let isLoaded = false;
    let resources = {
      client: void 0,
      session: void 0,
      user: void 0,
      organization: void 0
    };
    const auth = derived(() => deriveState(isLoaded, resources, initialState));
    const client = derived(() => resources.client);
    const session = derived(() => auth().session);
    const user = derived(() => auth().user);
    const organization = derived(() => auth().organization);
    setClerkJsLoadingErrorPackageName("svelte-clerk");
    setClerkContext({
      get clerk() {
        return clerk;
      },
      get isLoaded() {
        return isLoaded;
      },
      get auth() {
        return auth();
      },
      get client() {
        return client();
      },
      get session() {
        return session();
      },
      get user() {
        return user();
      },
      get organization() {
        return organization();
      }
    });
    children($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
function mergeWithPublicEnvVariables(clerkInitOptions) {
  const { publishableKey, signInUrl, signUpUrl, signInForceRedirectUrl, signUpForceRedirectUrl, signInFallbackRedirectUrl, signUpFallbackRedirectUrl, clerkJSUrl, clerkJSVersion, proxyUrl, domain, telemetry } = clerkInitOptions;
  return {
    publishableKey: publishableKey || getDynamicPublicEnvVariables().publishableKey,
    signInUrl: signInUrl || getDynamicPublicEnvVariables().signInUrl,
    signUpUrl: signUpUrl || getDynamicPublicEnvVariables().signUpUrl,
    signInForceRedirectUrl: signInForceRedirectUrl || getDynamicPublicEnvVariables().signInForceRedirectUrl,
    signUpForceRedirectUrl: signUpForceRedirectUrl || getDynamicPublicEnvVariables().signUpForceRedirectUrl,
    signInFallbackRedirectUrl: signInFallbackRedirectUrl || getDynamicPublicEnvVariables().signInFallbackRedirectUrl,
    signUpFallbackRedirectUrl: signUpFallbackRedirectUrl || getDynamicPublicEnvVariables().signUpFallbackRedirectUrl,
    clerkJSUrl: clerkJSUrl || getDynamicPublicEnvVariables().clerkJSUrl,
    clerkJSVersion: clerkJSVersion || getDynamicPublicEnvVariables().clerkJSVersion,
    proxyUrl: proxyUrl || getDynamicPublicEnvVariables().proxyUrl,
    domain: domain || getDynamicPublicEnvVariables().domain,
    telemetry: telemetry || {
      debug: getDynamicPublicEnvVariables().telemetryDebug,
      disabled: getDynamicPublicEnvVariables().telemetryDisabled
    }
  };
}
function ClerkProvider_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...props } = $$props;
    const mergedProps = derived(() => ({
      ...props,
      ...mergeWithPublicEnvVariables(props),
      routerPush: (to) => goto(),
      routerReplace: (to) => goto(to, {})
    }));
    ClerkProvider($$renderer2, spread_props([
      { initialState: page?.data?.initialState },
      mergedProps(),
      {
        children: ($$renderer3) => {
          children($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header class="header svelte-1elxaub"><div class="header-inner svelte-1elxaub"><div class="brand"><a href="/" class="brand-name svelte-1elxaub">MetaRank</a></div> <nav class="nav svelte-1elxaub"><a href="/"${attr_class("nav-link svelte-1elxaub", void 0, { "active": page.url.pathname === "/" })}>Landing</a> <a href="/about"${attr_class("nav-link svelte-1elxaub", void 0, { "active": page.url.pathname.startsWith("/about") })}>About</a> <a href="/pricing"${attr_class("nav-link svelte-1elxaub", void 0, { "active": page.url.pathname.startsWith("/pricing") })}>Pricing</a> <a href="/docs"${attr_class("nav-link svelte-1elxaub", void 0, { "active": page.url.pathname.startsWith("/docs") })}>Docs</a></nav> <div class="actions svelte-1elxaub">`);
    SignedOut($$renderer2, {
      children: ($$renderer3) => {
        SignInButton($$renderer3, { class: "clerk-user-button" });
      }
    });
    $$renderer2.push(`<!----> `);
    SignedIn($$renderer2, {
      children: ($$renderer3) => {
        UserButton($$renderer3, {});
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard",
          variant: "ghost",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Dashboard`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----></div></div></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="footer svelte-jz8lnl"><div class="footer-inner svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><div class="logo svelte-jz8lnl">MetaRank</div> <p class="tagline svelte-jz8lnl">Predictable SEO metadata for developers and publishing systems.</p></div> <nav class="footer-nav svelte-jz8lnl" aria-label="Footer"><div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Product</div> <a href="/generate" class="svelte-jz8lnl">Generate</a> <a href="/pricing" class="svelte-jz8lnl">Pricing</a> <a href="/about" class="svelte-jz8lnl">About</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Developers</div> <a href="/docs" class="svelte-jz8lnl">Docs</a> <a href="https://discord.gg/fFjVcPwJFk" target="_blank" rel="noopener" class="svelte-jz8lnl">Discord</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">SEO</div> <a href="/meta-description-generator" class="svelte-jz8lnl">Meta Description Generator</a> <a href="/meta-title-generator" class="svelte-jz8lnl">Meta Title Generator</a> <a href="/search-intent-api" class="svelte-jz8lnl">Search Intent API</a> <a href="/seo-metadata-api" class="svelte-jz8lnl">SEO Metadata API</a> <a href="/ai-seo-api" class="svelte-jz8lnl">AI SEO API</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Company</div> <a href="mailto:me@michaelcuneo.com.au" class="svelte-jz8lnl">Contact</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Service Status</div> `);
    ApiStatus($$renderer2);
    $$renderer2.push(`<!----></div></nav></div> <div class="footer-bottom svelte-jz8lnl"><span>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} MetaRank</span> <span class="sep svelte-jz8lnl">·</span> <span>Stable, predictable SEO metadata</span></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    config.autoAddCss = false;
    let { children } = $$props;
    ClerkProvider_1($$renderer2, {
      publishableKey: PUBLIC_CLERK_PUBLISHABLE_KEY,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="app-shell svelte-12qhfyh">`);
        Header($$renderer3);
        $$renderer3.push(`<!----> <main class="svelte-12qhfyh">`);
        children?.($$renderer3);
        $$renderer3.push(`<!----></main> `);
        Footer($$renderer3);
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _layout as default
};
