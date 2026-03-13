import "clsx";
import { C as Card } from "../../../../chunks/Card.js";
import { B as Button } from "../../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
function _page($$renderer) {
  {
    let actions = function($$renderer2) {
      Button($$renderer2, {
        as: "a",
        href: "/pricing",
        variant: "secondary",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View pricing`);
        },
        $$slots: { default: true }
      });
    };
    DashboardPageHeader($$renderer, {
      eyebrow: "Dashboard",
      title: "Usage",
      description: "Track requests, monitor limits, and understand monthly activity across your account.",
      actions
    });
  }
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h2 class="title svelte-1p52p23">Usage details</h2> <p class="text svelte-1p52p23">This page will show request totals, monthly history, and plan limits once usage data is wired in.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
