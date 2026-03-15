import "clsx";
import { C as ClerkLoaded } from "./errorThrower.js";
function PricingTable($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    {
      let children = function($$renderer3, clerk) {
        $$renderer3.push(`<div></div>`);
      };
      ClerkLoaded($$renderer2, { children });
    }
  });
}
export {
  PricingTable as P
};
