import { h as attr_style, a as attr_class, m as clsx } from "./index2.js";
import { u as useClerkContext } from "./errorThrower.js";
function SignInButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      mode,
      children,
      style,
      class: buttonClass,
      asChild,
      $$slots,
      $$events,
      ...props
    } = $$props;
    const ctx = useClerkContext();
    function signIn() {
      if (!ctx.clerk) return;
      if (mode === "modal") {
        void ctx.clerk.openSignIn(props);
        return;
      }
      void ctx.clerk.redirectToSignIn({
        ...props,
        signInFallbackRedirectUrl: props.fallbackRedirectUrl,
        signInForceRedirectUrl: props.forceRedirectUrl
      });
    }
    if (asChild) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2, { signIn });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button type="button"${attr_style(style)}${attr_class(clsx(buttonClass))}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2, { signIn });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`Sign in`);
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  SignInButton as S
};
