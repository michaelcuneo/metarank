import { i as head, e as escape_html, h as attr_style, b as ensure_array_like, c as attr, a as attr_class, d as derived } from "../../../chunks/index2.js";
import { C as Card } from "../../../chunks/Card.js";
import { B as Button } from "../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../chunks/DashboardPageHeader.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function formatPlan(plan) {
      switch (plan) {
        case "unlimited":
          return "Unlimited";
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
    function formatBillingStatus(billing) {
      if (billing.plan === "free_user") {
        return "No active subscription";
      }
      if (billing.plan === "unlimited") {
        return "Unlimited access";
      }
      if (billing.status) {
        return billing.status;
      }
      return "Active subscription";
    }
    function getNextResetLabel(period) {
      const [year, month] = period.split("-").map(Number);
      if (!year || !month) {
        return "Next month";
      }
      const next = new Date(Date.UTC(year, month, 1));
      return next.toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" });
    }
    function formatDate(timestamp) {
      return new Date(timestamp).toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" });
    }
    const planName = derived(() => formatPlan(data.account.plan));
    const billingStatus = derived(() => formatBillingStatus(data.billing));
    const requestsUsed = derived(() => data.usage.requestsUsed);
    const requestsLimit = derived(() => data.usage.requestsLimit);
    const hasUnlimitedUsage = derived(() => data.usage.usageType === "unlimited");
    const limitLabel = derived(() => hasUnlimitedUsage() ? "Unlimited" : String(requestsLimit()));
    const usagePercent = derived(() => hasUnlimitedUsage() ? 100 : Math.min(100, Math.round(requestsUsed() / Math.max(requestsLimit() ?? 1, 1) * 100)));
    const usageMetaText = derived(() => hasUnlimitedUsage() ? "Unlimited monthly usage" : `${usagePercent()}% of monthly allowance used`);
    const activeKeys = derived(() => data.keys.filter((key) => !key.revoked));
    const recentKeys = derived(() => data.keys.slice(0, 5));
    const nextReset = derived(() => getNextResetLabel(data.usage.period));
    const usageHistory = derived(() => [
      { label: data.usage.period, requests: data.usage.requestsUsed }
    ]);
    const maxUsage = derived(() => Math.max(...usageHistory().map((item) => item.requests), 1));
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
          href: "/dashboard/generate",
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
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Current plan</p> <p class="stat-value svelte-x1i5gj">${escape_html(planName())}</p> <p class="stat-meta svelte-x1i5gj">${escape_html(billingStatus())}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Monthly usage</p> <p class="stat-value svelte-x1i5gj">${escape_html(requestsUsed())} / ${escape_html(limitLabel())}</p> <p class="stat-meta svelte-x1i5gj">${escape_html(usageMetaText())}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Active API keys</p> <p class="stat-value svelte-x1i5gj">${escape_html(activeKeys().length)}</p> <p class="stat-meta svelte-x1i5gj">`);
        if (activeKeys().length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`No active keys yet`);
        } else if (activeKeys().length === 1) {
          $$renderer3.push("<!--[1-->");
          $$renderer3.push(`1 key available`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`${escape_html(activeKeys().length)} keys available`);
        }
        $$renderer3.push(`<!--]--></p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="stat-label svelte-x1i5gj">Usage reset</p> <p class="stat-value svelte-x1i5gj">${escape_html(nextReset())}</p> <p class="stat-meta svelte-x1i5gj">Monthly limits refresh automatically</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="main-grid svelte-x1i5gj">`);
    Card($$renderer2, {
      class: "usage-panel",
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
        $$renderer3.push(`<!----></div> <div class="usage-progress svelte-x1i5gj"><div class="usage-progress-bar svelte-x1i5gj"><div class="usage-progress-fill svelte-x1i5gj"${attr_style(`width: ${usagePercent()}%`)}></div></div> <div class="usage-progress-meta svelte-x1i5gj"><span>${escape_html(requestsUsed())} used</span> <span>${escape_html(limitLabel())} limit</span></div></div> <div class="usage-chart svelte-x1i5gj" aria-label="Usage history"><!--[-->`);
        const each_array = ensure_array_like(usageHistory());
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<div class="usage-bar-group svelte-x1i5gj"><div class="usage-bar svelte-x1i5gj"${attr_style(`height: ${Math.max(12, item.requests / maxUsage() * 140)}px`)}${attr("aria-label", `${item.label}: ${item.requests} requests`)}></div> <span class="usage-bar-label svelte-x1i5gj">${escape_html(item.label)}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="panel-header svelte-x1i5gj"><div><h2 class="panel-title svelte-x1i5gj">Quick actions</h2> <p class="panel-subtitle svelte-x1i5gj">Common account and developer tasks.</p></div></div> <div class="action-list svelte-x1i5gj"><a class="action-item svelte-x1i5gj" href="/generate"><div><p class="action-title svelte-x1i5gj">Generate metadata</p> <p class="action-text svelte-x1i5gj">Test content in the browser-based generator.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/docs"><div><p class="action-title svelte-x1i5gj">Read API docs</p> <p class="action-text svelte-x1i5gj">See request and response examples for the SEO endpoint.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/dashboard/api-keys"><div><p class="action-title svelte-x1i5gj">Manage API keys</p> <p class="action-text svelte-x1i5gj">Create, revoke, and review your active keys.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a> <a class="action-item svelte-x1i5gj" href="/dashboard/billing"><div><p class="action-title svelte-x1i5gj">Review billing</p> <p class="action-text svelte-x1i5gj">Check your current plan and upgrade when needed.</p></div> <span class="action-arrow svelte-x1i5gj">→</span></a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="lower-grid svelte-x1i5gj">`);
    Card($$renderer2, {
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
        $$renderer3.push(`<!----></div> `);
        if (recentKeys().length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="empty-copy svelte-x1i5gj">No API keys created yet.</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="keys-table-wrap svelte-x1i5gj"><table class="keys-table svelte-x1i5gj"><thead><tr><th class="svelte-x1i5gj">Name</th><th class="svelte-x1i5gj">Prefix</th><th class="svelte-x1i5gj">Created</th><th class="svelte-x1i5gj">Status</th></tr></thead><tbody><!--[-->`);
          const each_array_1 = ensure_array_like(recentKeys());
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let key = each_array_1[$$index_1];
            $$renderer3.push(`<tr><td class="svelte-x1i5gj">${escape_html(key.name)}</td><td class="svelte-x1i5gj"><code class="svelte-x1i5gj">${escape_html(key.prefix)}</code></td><td class="svelte-x1i5gj">${escape_html(formatDate(key.createdAt))}</td><td class="svelte-x1i5gj"><span${attr_class("status-badge svelte-x1i5gj", void 0, { "revoked": key.revoked })}>${escape_html(key.revoked ? "Revoked" : "Active")}</span></td></tr>`);
          }
          $$renderer3.push(`<!--]--></tbody></table></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
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
        $$renderer3.push(`<!----></div> <div class="billing-summary svelte-x1i5gj"><div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Plan</span> <span class="billing-value svelte-x1i5gj">${escape_html(planName())}</span></div> <div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Status</span> <span class="billing-value svelte-x1i5gj">${escape_html(billingStatus())}</span></div> <div class="billing-row svelte-x1i5gj"><span class="billing-label svelte-x1i5gj">Included requests</span> <span class="billing-value svelte-x1i5gj">${escape_html(limitLabel())} / month</span></div></div> <div class="billing-actions svelte-x1i5gj">`);
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
