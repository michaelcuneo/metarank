import { m as element, k as attributes } from "./index2.js";
function Button($$renderer, $$props) {
  let {
    as = "button",
    type = "button",
    href,
    variant = "primary",
    size = "md",
    disabled = false,
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
      $$renderer.push(`${attributes(
        {
          class: `btn ${variant} ${size} ${className}`,
          type: as === "button" ? type : void 0,
          href: as === "a" ? href : void 0,
          disabled: as === "button" ? disabled : void 0,
          "aria-disabled": disabled,
          ...rest
        },
        "svelte-18sv61c"
      )}`);
    },
    () => {
      children?.($$renderer);
      $$renderer.push(`<!---->`);
    }
  );
}
export {
  Button as B
};
