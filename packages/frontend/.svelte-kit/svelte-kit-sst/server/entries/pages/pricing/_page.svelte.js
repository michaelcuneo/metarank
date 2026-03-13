import "clsx";
/* empty css                                                 */
import { B as Button } from "../../../chunks/Button.js";
import { C as ClerkLoaded } from "../../../chunks/errorThrower.js";
import "@clerk/shared/authorization";
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
function PricingTable($$renderer, $$props) {
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
function _page($$renderer) {
  $$renderer.push(`<div class="page-shell pricing svelte-1hrotn9"><section class="pricing-hero svelte-1hrotn9"><h1 class="page-title svelte-1hrotn9">Simple, usage-based pricing</h1> <p class="page-lead svelte-1hrotn9">Pay only for the SEO metadata you generate.
			No token math. No surprises.</p></section> `);
  PricingTable($$renderer, {});
  $$renderer.push(`<!----> <section class="pricing-usage svelte-1hrotn9"><h2 class="svelte-1hrotn9">What counts as a request?</h2> <p class="svelte-1hrotn9">One request equals one article processed. Failed requests and retries are not billed.</p></section> <section class="pricing-cta svelte-1hrotn9"><h2 class="svelte-1hrotn9">Start generating SEO metadata today</h2> <p class="svelte-1hrotn9">Try MetaRank for free, then upgrade when you’re ready to ship.</p> <div class="cta-actions svelte-1hrotn9">`);
  Button($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Get started free`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "ghost",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->View API docs`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section></div>`);
}
export {
  _page as default
};
