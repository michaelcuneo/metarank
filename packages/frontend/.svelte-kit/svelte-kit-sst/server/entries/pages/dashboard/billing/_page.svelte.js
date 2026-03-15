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
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
function _page($$renderer) {
  DashboardPageHeader($$renderer, {
    eyebrow: "Dashboard",
    title: "Billing",
    description: "Review your current plan, usage allowance, and subscription details."
  });
  $$renderer.push(`<!----> `);
  PricingTable($$renderer, {});
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
