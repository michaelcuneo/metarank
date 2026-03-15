import { g as getContext, b as ensure_array_like, c as attr, a as attr_class, f as store_get, e as escape_html, h as attr_style, u as unsubscribe_stores, d as derived } from "../../../chunks/index2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { A as ApiStatus } from "../../../chunks/ApiStatus.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, children } = $$props;
    const nav = [
      { href: "/dashboard/generate", label: "Generate" },
      { href: "/dashboard", label: "Overview" },
      { href: "/dashboard/usage", label: "Usage" },
      { href: "/dashboard/api-keys", label: "API Keys" },
      { href: "/dashboard/billing", label: "Billing" }
    ];
    function isActive(pathname, href) {
      if (href === "/dashboard") {
        return pathname === "/dashboard";
      }
      return pathname.startsWith(href);
    }
    function getSectionLabel(pathname) {
      if (pathname === "/dashboard") {
        return null;
      }
      const section = pathname.split("/")[2] ?? "";
      return section.replace(/-/g, " ");
    }
    function formatPlan(plan) {
      switch (plan) {
        case "pro":
          return "Pro";
        case "team":
          return "Team";
        default:
          return "Free";
      }
    }
    const usagePercent = derived(() => Math.min(100, Math.round(data.usage.requestsUsed / Math.max(data.usage.requestsLimit, 1) * 100)));
    $$renderer2.push(`<div class="dashboard-layout svelte-2agd5u"><aside class="sidebar svelte-2agd5u"><div class="sidebar-inner svelte-2agd5u"><div class="sidebar-header svelte-2agd5u"><a href="/dashboard" class="brand svelte-2agd5u">MetaRank</a> <p class="brand-sub svelte-2agd5u">Dashboard</p></div> <nav class="nav svelte-2agd5u"><!--[-->`);
    const each_array = ensure_array_like(nav);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class("nav-link svelte-2agd5u", void 0, {
        "active": isActive(store_get($$store_subs ??= {}, "$page", page).url.pathname, item.href)
      })}>${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="sidebar-usage svelte-2agd5u"><div class="usage-head svelte-2agd5u"><p class="usage-label svelte-2agd5u">Usage</p> <span class="usage-plan svelte-2agd5u">${escape_html(formatPlan(data.usage.plan))}</span></div> <div class="usage-bar svelte-2agd5u"><div class="usage-fill svelte-2agd5u"${attr_style(`width: ${usagePercent()}%`)}></div></div> <p class="usage-meta svelte-2agd5u">${escape_html(data.usage.requestsUsed)} / ${escape_html(data.usage.requestsLimit)} requests</p></div> <div class="sidebar-status svelte-2agd5u"><p class="usage-label svelte-2agd5u">Service status</p> <p class="usage-meta svelte-2agd5u">`);
    ApiStatus($$renderer2);
    $$renderer2.push(`<!----></p></div></div></aside> <main class="content svelte-2agd5u"><div class="breadcrumb svelte-2agd5u"><span>Dashboard</span> `);
    if (getSectionLabel(store_get($$store_subs ??= {}, "$page", page).url.pathname)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="sep svelte-2agd5u">/</span> <span class="section svelte-2agd5u">${escape_html(getSectionLabel(store_get($$store_subs ??= {}, "$page", page).url.pathname))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    children($$renderer2);
    $$renderer2.push(`<!----></main></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
