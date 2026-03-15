import "clsx";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/errorThrower.js";
import { P as PricingTable } from "../../../chunks/PricingTable.js";
import "@clerk/shared/authorization";
import { S as SignInButton } from "../../../chunks/SignInButton.js";
import "@clerk/shared/deriveState";
import "@clerk/shared/loadClerkJsScript";
import "../../../chunks/client.js";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="page-shell pricing svelte-1hrotn9"><section class="pricing-hero svelte-1hrotn9"><h1 class="page-title svelte-1hrotn9">Simple, usage-based pricing</h1> <p class="page-lead svelte-1hrotn9">Pay only for the SEO metadata you generate.
			No token math. No surprises.</p></section> `);
    PricingTable($$renderer2, {});
    $$renderer2.push(`<!----> <section class="pricing-usage svelte-1hrotn9"><h2 class="svelte-1hrotn9">What counts as a request?</h2> <p class="svelte-1hrotn9">One request equals one article processed. Failed requests and retries are not billed.</p></section> <section class="pricing-cta svelte-1hrotn9"><h2 class="svelte-1hrotn9">Start generating SEO metadata today</h2> <p class="svelte-1hrotn9">Try MetaRank for free, then upgrade when you’re ready to ship.</p> <div class="cta-actions svelte-1hrotn9">`);
    if (data.auth.isSignedIn) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        as: "a",
        href: "/dashboard/generate",
        size: "lg",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Try the generator`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      SignInButton($$renderer2, {
        class: "clerk-user-button",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Get started free`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--> `);
    Button($$renderer2, {
      as: "a",
      href: "/docs",
      size: "lg",
      variant: "ghost",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->View API docs`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></section></div>`);
  });
}
export {
  _page as default
};
