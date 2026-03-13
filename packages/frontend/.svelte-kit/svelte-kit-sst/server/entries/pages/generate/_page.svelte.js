import "clsx";
import { c as attr, k as attributes, l as bind_props, e as escape_html } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      type = "text",
      value = "",
      placeholder = "",
      name = "",
      id = "",
      required = false,
      disabled = false,
      autocomplete = null,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div class="input-group svelte-8ff5h4">`);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<label class="input-label svelte-8ff5h4"${attr("for", id || name)}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></label>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <input${attributes(
      {
        class: "text-input",
        type,
        value,
        placeholder,
        name,
        id,
        required,
        disabled,
        autocomplete,
        ...rest
      },
      "svelte-8ff5h4",
      void 0,
      void 0,
      4
    )}/></div>`);
    bind_props($$props, { value });
  });
}
function Textarea($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = "",
      placeholder = "",
      name = "",
      id = "",
      required = false,
      disabled = false,
      rows = 10,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div class="textarea-group svelte-1ilrf3m">`);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<label class="textarea-label svelte-1ilrf3m"${attr("for", id || name)}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></label>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <textarea${attributes(
      {
        class: "textarea-field",
        placeholder,
        name,
        id,
        required,
        disabled,
        rows,
        ...rest
      },
      "svelte-1ilrf3m"
    )}>`);
    const $$body = escape_html(value);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div>`);
    bind_props($$props, { value });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let title = "";
    let body = "";
    let location = "";
    let targetQuery = "";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="page-shell generate svelte-1a93izo"><div class="layout svelte-1a93izo">`);
      Card($$renderer3, {
        class: "panel",
        children: ($$renderer4) => {
          $$renderer4.push(`<h1 class="panel-title svelte-1a93izo">Generate metadata</h1> <p class="panel-subtext svelte-1a93izo">Generate SEO metadata from real content using MetaRank.</p> <form>`);
          Input($$renderer4, {
            get value() {
              return title;
            },
            set value($$value) {
              title = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Title`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Textarea($$renderer4, {
            rows: 8,
            get value() {
              return body;
            },
            set value($$value) {
              body = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Body (Markdown, HTML, or text)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <div class="optional svelte-1a93izo">`);
          Input($$renderer4, {
            get value() {
              return location;
            },
            set value($$value) {
              location = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Location (optional)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Input($$renderer4, {
            get value() {
              return targetQuery;
            },
            set value($$value) {
              targetQuery = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Target search query (optional)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="actions svelte-1a93izo">`);
          {
            $$renderer4.push("<!--[!-->");
            Button($$renderer4, {
              type: "submit",
              variant: "primary",
              disabled: body.length < 100,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Generate metadata`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer4.push(`<!--]--></div></form>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="output">`);
      Card($$renderer3, {
        class: "output-card",
        children: ($$renderer4) => {
          {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="empty-state svelte-1a93izo"><h2 class="svelte-1a93izo">Metadata output</h2> <p class="svelte-1a93izo">Your generated SEO metadata will appear here after you submit content.</p> <ul class="svelte-1a93izo"><li>Meta title and description</li> <li>SEO keywords and slug</li> <li>Search intent classification</li></ul></div>`);
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
