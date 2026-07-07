import { c as attr, j as attributes, k as bind_props, e as escape_html, b as ensure_array_like, d as derived } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
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
    let { data, form } = $$props;
    let apiKey = derived(() => form?.values?.apiKey ?? "");
    let title = derived(() => form?.values?.title ?? "");
    let body = derived(() => form?.values?.body ?? "");
    let location = derived(() => form?.values?.location ?? "");
    let targetQuery = derived(() => form?.values?.targetQuery ?? "");
    let selectedKeyId = "";
    let activeTab = "response";
    let rawKeyStore = {};
    const result = derived(() => form?.result ?? null);
    const errorMessage = derived(() => form?.error ?? "");
    function copy(text) {
      return navigator.clipboard.writeText(text);
    }
    function formatDate(timestamp) {
      return new Date(timestamp).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
    }
    function applySelectedKey(keyId) {
      selectedKeyId = keyId;
      if (!keyId) {
        apiKey("");
        return;
      }
      apiKey(rawKeyStore[keyId]?.trim() ?? "");
    }
    const usableKeys = derived(() => data.keys.filter((key) => Boolean(rawKeyStore[key.keyId]?.trim())));
    const selectedKeyMeta = derived(() => data.keys.find((key) => key.keyId === selectedKeyId) ?? null);
    const selectedKeyAvailableLocally = derived(() => Boolean(selectedKeyId && rawKeyStore[selectedKeyId]?.trim()));
    const curlExample = derived(() => `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer ${apiKey() || "YOUR_API_KEY"}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(
      {
        title: title(),
        body: body(),
        location: location() || void 0,
        targetQuery: targetQuery() || void 0
      },
      null,
      2
    )}'`);
    const jsExample = derived(() => `fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ${apiKey() || "YOUR_API_KEY"}",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: ${JSON.stringify(title())},
    body: ${JSON.stringify(body())},
    location: ${JSON.stringify(location() || void 0)},
    targetQuery: ${JSON.stringify(targetQuery() || void 0)}
  })
})
  .then(res => res.json())
  .then(console.log);`);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let actions = function($$renderer4) {
          Button($$renderer4, {
            as: "a",
            href: "/docs",
            variant: "ghost",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->View docs`);
            },
            $$slots: { default: true }
          });
        };
        DashboardPageHeader($$renderer3, {
          eyebrow: "Dashboard",
          title: "Generate metadata",
          description: "Use the power of MetaRank's API to generate SEO metadata for your content, including meta titles, descriptions, keywords, and more.",
          actions
        });
      }
      $$renderer3.push(`<!----> <div class="generate svelte-c61127"><div class="layout svelte-c61127">`);
      Card($$renderer3, {
        class: "panel",
        children: ($$renderer4) => {
          $$renderer4.push(`<h1 class="panel-title svelte-c61127">Generate metadata</h1> <p class="panel-subtext svelte-c61127">Test the live API using one of your keys.</p> <form method="POST" action="?/generate"><div class="optional svelte-c61127"><div class="field svelte-c61127"><label class="field-label svelte-c61127" for="key-select">Saved key record</label> `);
          $$renderer4.select(
            {
              id: "key-select",
              class: "select",
              value: selectedKeyId,
              onchange: (event) => applySelectedKey(event.currentTarget.value)
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "" }, ($$renderer6) => {
                $$renderer6.push(`Paste a key or choose one available on this device`);
              });
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(data.keys);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let key = each_array[$$index];
                $$renderer5.option({ value: key.keyId }, ($$renderer6) => {
                  $$renderer6.push(`${escape_html(key.name)} — ${escape_html(key.prefix)} • ${escape_html(formatDate(key.createdAt))}
									${escape_html(rawKeyStore[key.keyId]?.trim() ? " • available on this device" : " • paste required")}`);
                });
              }
              $$renderer5.push(`<!--]-->`);
            },
            "svelte-c61127"
          );
          $$renderer4.push(`</div> `);
          Input($$renderer4, {
            get value() {
              return apiKey();
            },
            set value($$value) {
              apiKey($$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->API key`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (selectedKeyMeta() && !selectedKeyAvailableLocally()) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<p class="helper-text svelte-c61127">This key exists on your account, but the full secret is not available on this
							device. Paste the full API key to use it here, or create a new key on this device.</p>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (data.keys.length > 0 && usableKeys().length === 0) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<p class="helper-text svelte-c61127">No saved keys are available on this device yet. The dashboard can list key records,
							but it cannot recover full API secrets from the server after creation.</p>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--></div> <input type="hidden" name="apiKey"${attr("value", apiKey())}/> <input type="hidden" name="title"${attr("value", title())}/> <input type="hidden" name="body"${attr("value", body())}/> <input type="hidden" name="location"${attr("value", location())}/> <input type="hidden" name="targetQuery"${attr("value", targetQuery())}/> `);
          Input($$renderer4, {
            get value() {
              return title();
            },
            set value($$value) {
              title($$value);
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
              return body();
            },
            set value($$value) {
              body($$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Body (Markdown, HTML, or text)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <div class="optional svelte-c61127">`);
          Input($$renderer4, {
            get value() {
              return location();
            },
            set value($$value) {
              location($$value);
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
              return targetQuery();
            },
            set value($$value) {
              targetQuery($$value);
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Target search query (optional)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> `);
          if (errorMessage()) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<p class="error-text svelte-c61127">${escape_html(errorMessage())}</p>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> <div class="actions svelte-c61127">`);
          {
            $$renderer4.push("<!--[!-->");
            Button($$renderer4, {
              type: "submit",
              variant: "primary",
              disabled: !title().trim() || !body().trim() || !apiKey().trim(),
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
          if (!result()) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="empty-state svelte-c61127"><h2 class="svelte-c61127">Metadata output</h2> <p class="svelte-c61127">Your generated SEO metadata will appear here after you submit content.</p> <ul class="svelte-c61127"><li>Meta title and description</li> <li>SEO keywords and slug</li> <li>Search intent classification</li></ul></div>`);
          } else {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`<div class="output-header svelte-c61127"><div class="output-title svelte-c61127">Output</div> <div class="tabs svelte-c61127">`);
            Button($$renderer4, {
              size: "sm",
              variant: activeTab === "response" ? "secondary" : "ghost",
              onclick: () => activeTab = "response",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Response`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              size: "sm",
              variant: activeTab === "api" ? "secondary" : "ghost",
              onclick: () => activeTab = "api",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->API`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div></div> `);
            if (activeTab === "response") {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="block svelte-c61127"><div class="block-header svelte-c61127"><span>JSON response</span> `);
              Button($$renderer4, {
                size: "sm",
                variant: "ghost",
                onclick: () => copy(JSON.stringify(result(), null, 2)),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Copy`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div> <pre class="svelte-c61127">${escape_html(JSON.stringify(result(), null, 2))}</pre></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="block svelte-c61127"><div class="block-header svelte-c61127"><span>cURL</span> `);
              Button($$renderer4, {
                size: "sm",
                variant: "ghost",
                onclick: () => copy(curlExample()),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Copy`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div> <pre class="svelte-c61127">${escape_html(curlExample())}</pre></div> <div class="block svelte-c61127"><div class="block-header svelte-c61127"><span>JavaScript</span> `);
              Button($$renderer4, {
                size: "sm",
                variant: "ghost",
                onclick: () => copy(jsExample()),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Copy`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div> <pre class="svelte-c61127">${escape_html(jsExample())}</pre></div>`);
            }
            $$renderer4.push(`<!--]-->`);
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
