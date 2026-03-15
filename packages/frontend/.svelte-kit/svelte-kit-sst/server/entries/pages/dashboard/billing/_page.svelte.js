import "clsx";
import "../../../../chunks/errorThrower.js";
import { P as PricingTable } from "../../../../chunks/PricingTable.js";
import "@clerk/shared/authorization";
import "@clerk/shared/deriveState";
import "@clerk/shared/loadClerkJsScript";
import "../../../../chunks/client.js";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { B as Button } from "../../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
function _page($$renderer) {
  {
    let actions = function($$renderer2) {
      Button($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Manage billing`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        as: "a",
        href: "/pricing",
        variant: "ghost",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View plans`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    };
    DashboardPageHeader($$renderer, {
      eyebrow: "Dashboard",
      title: "Billing",
      description: "Review your current plan, usage allowance, and subscription details.",
      actions
    });
  }
  $$renderer.push(`<!----> `);
  PricingTable($$renderer, {});
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
