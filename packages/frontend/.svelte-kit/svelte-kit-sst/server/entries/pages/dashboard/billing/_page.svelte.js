import "clsx";
import { C as Card } from "../../../../chunks/Card.js";
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
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h2 class="title svelte-ay4x9r">Billing details</h2> <p class="text svelte-ay4x9r">This page will show your active plan, subscription state, included usage, and billing actions once connected.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
