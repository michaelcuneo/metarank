import { e as escape_html } from "./index2.js";
import "clsx";
function DashboardPageHeader($$renderer, $$props) {
  let { eyebrow = "", title = "", description = "", actions } = $$props;
  $$renderer.push(`<div class="page-header svelte-1w6pkp3"><div class="page-header-copy svelte-1w6pkp3">`);
  if (eyebrow) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="eyebrow svelte-1w6pkp3">${escape_html(eyebrow)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <h1 class="title svelte-1w6pkp3">${escape_html(title)}</h1> `);
  if (description) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="description svelte-1w6pkp3">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> `);
  if (actions) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="actions svelte-1w6pkp3">`);
    actions($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  DashboardPageHeader as D
};
