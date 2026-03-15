import { m as element, k as attributes } from "./index2.js";
function Card($$renderer, $$props) {
  let {
    as = "div",
    class: className = "",
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  element(
    $$renderer,
    as,
    () => {
      $$renderer.push(`${attributes({ role: "group", class: `card ${className}`, ...rest }, "svelte-1udyrqm")}`);
    },
    () => {
      children?.($$renderer);
      $$renderer.push(`<!---->`);
    }
  );
}
export {
  Card as C
};
