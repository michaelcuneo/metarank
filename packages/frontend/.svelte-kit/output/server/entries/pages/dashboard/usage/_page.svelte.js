import { e as escape_html, h as attr_style, b as ensure_array_like, d as derived } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { B as Button } from "../../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function formatPlan(plan) {
      switch (plan) {
        case "free_user":
          return "Free";
        case "pro":
          return "Pro";
        case "team":
          return "Team";
        default:
          return plan;
      }
    }
    function formatMonth(period) {
      const [year, month] = period.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, 1));
      return date.toLocaleDateString(void 0, { month: "short" });
    }
    const usagePercent = derived(() => Math.min(100, Math.round(data.usage.requestsUsed / Math.max(data.usage.requestsLimit, 1) * 100)));
    const maxUsage = derived(() => Math.max(...data.history.map((m) => m), 1));
    {
      let actions = function($$renderer3) {
        Button($$renderer3, {
          as: "a",
          href: "/pricing",
          variant: "secondary",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View pricing`);
          },
          $$slots: { default: true }
        });
      };
      DashboardPageHeader($$renderer2, {
        eyebrow: "Dashboard",
        title: "Usage",
        description: "Track requests, monitor limits, and understand monthly activity across your account.",
        actions
      });
    }
    $$renderer2.push(`<!----> <section class="stats svelte-1p52p23">`);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="label svelte-1p52p23">Current plan</p> <p class="value svelte-1p52p23">${escape_html(formatPlan(data.usage.plan))}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="label svelte-1p52p23">Requests used</p> <p class="value svelte-1p52p23">${escape_html(data.usage.requestsUsed)}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="label svelte-1p52p23">Monthly limit</p> <p class="value svelte-1p52p23">${escape_html(data.usage.requestsLimit)}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="label svelte-1p52p23">Usage</p> <p class="value svelte-1p52p23">${escape_html(usagePercent())}%</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> `);
    Card($$renderer2, {
      class: "usage-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-1p52p23"><h2 class="svelte-1p52p23">Monthly usage</h2> <p class="panel-sub svelte-1p52p23">Request totals for recent billing periods.</p></div> <div class="progress svelte-1p52p23"><div class="bar svelte-1p52p23"><div class="fill svelte-1p52p23"${attr_style(`width:${usagePercent()}%`)}></div></div> <div class="meta svelte-1p52p23"><span>${escape_html(data.usage.requestsUsed)} used</span> <span>${escape_html(data.usage.requestsLimit)} limit</span></div></div> <div class="chart svelte-1p52p23"><!--[-->`);
        const each_array = ensure_array_like(data.history);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<div class="bar-group svelte-1p52p23"><div class="bar-item svelte-1p52p23"${attr_style(`height:${Math.max(12, item.requestCount / maxUsage() * 160)}px`)}></div> <span class="bar-label svelte-1p52p23">${escape_html(formatMonth(item.period))}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
