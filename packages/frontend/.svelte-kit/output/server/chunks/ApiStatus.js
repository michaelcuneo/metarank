import { a as attr_class } from "./index2.js";
function ApiStatus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let status = { status: "offline" };
    $$renderer2.push(`<div class="status svelte-rmgriu" aria-live="polite"><span${attr_class("dot svelte-rmgriu", void 0, {
      "operational": status.status === "operational",
      "degraded": status.status === "degraded",
      "offline": status.status === "offline"
    })}></span> <span class="label svelte-rmgriu">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Checking API`);
    }
    $$renderer2.push(`<!--]--></span></div>`);
  });
}
export {
  ApiStatus as A
};
