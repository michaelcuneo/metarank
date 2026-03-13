import { d as derived, s as spread_props, i as head } from "../../../chunks/index2.js";
import "clsx";
import { C as ClerkLoaded, e as errorThrower } from "../../../chunks/errorThrower.js";
import "@clerk/shared/authorization";
import "@clerk/shared/deriveState";
import "@clerk/shared/loadClerkJsScript";
import { p as page } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function SignIn$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    {
      let children = function($$renderer3, clerk) {
        $$renderer3.push(`<div></div>`);
      };
      ClerkLoaded($$renderer2, { children });
    }
  });
}
const noPathProvidedError = (componentName) => `The <${componentName}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${componentName} path={'/my-path'} />`;
const incompatibleRoutingWithPathProvidedError = (componentName) => `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${componentName}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`;
const toValue = (value) => {
  if (typeof value === "function") {
    return value();
  }
  return value;
};
const useRoutingProps = (componentName, props, routingOptions) => {
  const result = derived(() => {
    const propsValue = toValue(props) || {};
    const routingOptionsValue = toValue(routingOptions);
    const path = propsValue.path || routingOptionsValue?.path;
    const routing = propsValue.routing || routingOptionsValue?.routing || "path";
    if (routing === "path") {
      if (!path) {
        return errorThrower.throw(noPathProvidedError(componentName));
      }
      return { ...routingOptionsValue, ...propsValue, routing: "path" };
    }
    if (propsValue.path) {
      return errorThrower.throw(incompatibleRoutingWithPathProvidedError(componentName));
    }
    return { ...routingOptionsValue, ...propsValue, path: void 0 };
  });
  return {
    get current() {
      return result();
    }
  };
};
const usePathnameWithoutSplatRouteParams = () => {
  const params = derived(() => page.params), url = derived(() => page.url);
  const pathname = derived(() => url().pathname);
  const paramKeys = derived(() => Object.keys(params()));
  const splatRouteParam = derived(() => paramKeys().length > 0 ? params()[paramKeys()[0]] || "" : "");
  const pathWithoutSplat = derived(() => splatRouteParam() ? pathname().replace(`/${splatRouteParam()}`, "") : pathname());
  const path = derived(() => pathWithoutSplat().replace(/\/$/, "").replace(/^\//, "").trim());
  const finalPath = derived(() => `/${path()}`);
  return {
    get current() {
      return finalPath();
    }
  };
};
function SignIn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    const pathnameWithoutSplatRouteParams = usePathnameWithoutSplatRouteParams();
    const routingProps = useRoutingProps("SignIn", () => props, () => ({ path: pathnameWithoutSplatRouteParams.current }));
    SignIn$1($$renderer2, spread_props([routingProps.current]));
  });
}
function _page($$renderer) {
  head("iq265b", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Sign in — MetaRank</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Sign in to your MetaRank account."/>`);
  });
  $$renderer.push(`<div class="auth-page svelte-iq265b"><div class="auth-card svelte-iq265b">`);
  SignIn($$renderer, {});
  $$renderer.push(`<!----></div></div>`);
}
export {
  _page as default
};
