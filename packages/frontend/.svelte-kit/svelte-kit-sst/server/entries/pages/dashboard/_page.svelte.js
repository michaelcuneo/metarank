import { i as head, e as escape_html, j as attr_style, b as ensure_array_like, c as attr, a as attr_class } from "../../../chunks/index2.js";
import { C as Card } from "../../../chunks/Card.js";
import { B as Button } from "../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../chunks/DashboardPageHeader.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const plan = {
      name: "Free",
      requestsUsed: 42,
      requestsLimit: 200,
      billingStatus: "No active subscription",
      nextReset: "April 1, 2026"
    };
    const usageHistory = [
      { label: "Oct", requests: 18 },
      { label: "Nov", requests: 31 },
      { label: "Dec", requests: 24 },
      { label: "Jan", requests: 56 },
      { label: "Feb", requests: 61 },
      { label: "Mar", requests: 42 }
    ];
    const apiKeys = [
      {
        id: "key_1",
        name: "Production",
        prefix: "mrk_live_4f2a9c",
        createdAt: "March 10, 2026",
        lastUsed: "2 hours ago",
        status: "Active"
      },
      {
        id: "key_2",
        name: "Staging",
        prefix: "mrk_live_7d91ab",
        createdAt: "March 5, 2026",
        lastUsed: "Never",
        status: "Active"
      }
    ];
    const usagePercent = Math.min(100, Math.round(plan.requestsUsed / plan.requestsLimit * 100));
    const maxUsage = Math.max(...usageHistory.map((item) => item.requests), 1);
    head("x1i5gj", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Dashboard — MetaRank</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Monitor usage, API keys, billing, and account activity in the MetaRank dashboard."/>`);
    });
    $$renderer2.push(`<div class="dashboard-page svelte-x1i5gj">`);
    {
      let actions = function($$renderer3) {
        Button($$renderer3, {
          as: "a",
          href: "/generate",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Open generator`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          as: "a",
          href: "/docs",
          variant: "ghost",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View docs`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      };
      DashboardPageHeader($$renderer2, {
        eyebrow: "Dashboard",
        title: "Overview",
        description: "Monitor usage, manage API keys, and keep track of your MetaRank account.",
        actions
      });
    }
    $$renderer2.push(`<!----> <section class="stats-grid svelte-x1i5gj">`);
    Card($$renderer2, {
      class: "stat-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Current plan</p> <p class="stat-value svelte-x1i5gj">${escape_html(plan.name)}</p> <p class="stat-meta svelte-x1i5gj">${escape_html(plan.billingStatus)}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "stat-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Monthly usage</p> <p class="stat-value svelte-x1i5gj">${escape_html(plan.requestsUsed)} / ${escape_html(plan.requestsLimit)}</p> <p class="stat-meta svelte-x1i5gj">${escape_html(usagePercent)}% of monthly allowance used</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "stat-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Active API keys</p> <p class="stat-value svelte-x1i5gj">${escape_html(apiKeys.filter((key) => key.status === "Active").length)}</p> <p class="stat-meta svelte-x1i5gj">Production and staging access</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "stat-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Usage reset</p> <p class="stat-value svelte-x1i5gj">${escape_html(plan.nextReset)}</p> <p class="stat-meta svelte-x1i5gj">Monthly limits refresh automatically</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="main-grid svelte-x1i5gj">`);
    Card($$renderer2, {
      class: "panel usage-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-x1i5gj"><div><h2 class="panel-title svelte-x1i5gj">Usage this month</h2> <p class="panel-subtitle svelte-x1i5gj">Track requests across your account and see how close you are to your limit.</p></div> `);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard/usage",
          variant: "ghost",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View usage`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="usage-progress svelte-x1i5gj"><div class="usage-progress-bar svelte-x1i5gj"><div class="usage-progress-fill svelte-x1i5gj"${attr_style(`width: ${usagePercent}%`)}></div></div> <div class="usage-progress-meta svelte-x1i5gj"><span>${escape_html(plan.requestsUsed)} used</span> <span>${escape_html(plan.requestsLimit)} limit</span></div></div> <div class="usage-chart svelte-x1i5gj" aria-label="Usage history"><!--[-->`);
        const each_array = ensure_array_like(usageHistory);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<div class="usage-bar-group svelte-x1i5gj"><div class="usage-bar svelte-x1i5gj"${attr_style(`height: ${Math.max(12, item.requests / maxUsage * 140)}px`)}${attr("aria-label", `${item.label}: ${item.requests} requests`)}></div> <span class="usage-bar-label svelte-x1i5gj">${escape_html(item.label)}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "panel actions-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-x1i5gj"><div><h2 class="panel-title svelte-x1i5gj">Quick actions</h2> <p class="panel-subtitle svelte-x1i5gj">Common account and developer tasks.</p></div></div> <div class="action-list svelte-x1i5gj"><a class="action-item svelte-x1i5gj" href="/generate"><div><p class="action-title svelte-x1i5gj">Generate metadata</p> <p class="action-text svelte-x1i5gj">Test content in the browser-based generator.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/docs"><div><p class="action-title svelte-x1i5gj">Read API docs</p> <p class="action-text svelte-x1i5gj">See request and response examples for the SEO endpoint.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/dashboard/api-keys"><div><p class="action-title svelte-x1i5gj">Manage API keys</p> <p class="action-text svelte-x1i5gj">Create, revoke, and review your active keys.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/dashboard/billing"><div><p class="action-title svelte-x1i5gj">Review billing</p> <p class="action-text svelte-x1i5gj">Check your current plan and upgrade when needed.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="lower-grid svelte-x1i5gj">`);
    Card($$renderer2, {
      class: "panel keys-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-x1i5gj"><div><h2 class="panel-title svelte-x1i5gj">Recent API keys</h2> <p class="panel-subtitle svelte-x1i5gj">Named keys make it easier to separate production and staging traffic.</p></div> `);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard/api-keys",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Manage keys`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="keys-table-wrap svelte-x1i5gj"><table class="keys-table svelte-x1i5gj"><thead><tr><th class="svelte-x1i5gj">Name</th><th class="svelte-x1i5gj">Prefix</th><th class="svelte-x1i5gj">Created</th><th class="svelte-x1i5gj">Last used</th><th class="svelte-x1i5gj">Status</th></tr></thead><tbody><!--[-->`);
        const each_array_1 = ensure_array_like(apiKeys);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let key = each_array_1[$$index_1];
          $$renderer3.push(`<tr><td class="svelte-x1i5gj">${escape_html(key.name)}</td><td class="svelte-x1i5gj"><code class="svelte-x1i5gj">${escape_html(key.prefix)}</code></td><td class="svelte-x1i5gj">${escape_html(key.createdAt)}</td><td class="svelte-x1i5gj">${escape_html(key.lastUsed)}</td><td class="svelte-x1i5gj"><span${attr_class("status-badge svelte-x1i5gj", void 0, { "revoked": key.status === "Revoked" })}>${escape_html(key.status)}</span></td></tr>`);
        }
        $$renderer3.push(`<!--]--></tbody></table></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "panel billing-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-x1i5gj"><div><h2 class="panel-title svelte-x1i5gj">Billing</h2> <p class="panel-subtitle svelte-x1i5gj">Your current account and subscription status.</p></div> `);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard/billing",
          variant: "ghost",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Open billing`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="billing-summary svelte-x1i5gj"><div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Plan</span> <span class="billing-value svelte-x1i5gj">${escape_html(plan.name)}</span></div> <div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Status</span> <span class="billing-value svelte-x1i5gj">${escape_html(plan.billingStatus)}</span></div> <div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Included requests</span> <span class="billing-value svelte-x1i5gj">${escape_html(plan.requestsLimit)} / month</span></div></div> <div class="billing-actions svelte-x1i5gj">`);
        Button($$renderer3, {
          as: "a",
          href: "/pricing",
          variant: "secondary",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View plans`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard/billing",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Manage billing`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section></div>`);
  });
}
export {
  _page as default
};
