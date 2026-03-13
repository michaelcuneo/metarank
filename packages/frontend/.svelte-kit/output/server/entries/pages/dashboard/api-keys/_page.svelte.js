import { i as head, c as attr, e as escape_html, b as ensure_array_like, a as attr_class } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { B as Button } from "../../../../chunks/Button.js";
import { D as DashboardPageHeader } from "../../../../chunks/DashboardPageHeader.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let name = "";
    let creating = false;
    let revokingKeyId = null;
    let createError = "";
    let createdKey = null;
    let keys = data.keys;
    async function createKey() {
      createError = "";
      const trimmed = name.trim();
      if (!trimmed) {
        createError = "Key name is required.";
        return;
      }
      creating = true;
      try {
        const res = await fetch("/api/keys", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmed })
        });
        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error ?? "Failed to create API key");
        }
        const created = await res.json();
        createdKey = created;
        name = "";
        keys = [
          {
            keyId: created.keyId,
            name: created.name,
            prefix: created.prefix,
            createdAt: created.createdAt,
            revoked: false
          },
          ...keys
        ];
      } catch (err) {
        createError = err instanceof Error ? err.message : "Failed to create API key";
      } finally {
        creating = false;
      }
    }
    async function revokeKey(keyId) {
      revokingKeyId = keyId;
      try {
        const res = await fetch(`/api/keys/${keyId}`, { method: "DELETE" });
        if (!res.ok && res.status !== 204) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error ?? "Failed to revoke API key");
        }
        keys = keys.map((key) => key.keyId === keyId ? { ...key, revoked: true } : key);
      } catch (err) {
        createError = err instanceof Error ? err.message : "Failed to revoke API key";
      } finally {
        revokingKeyId = null;
      }
    }
    async function copyCreatedKey() {
      if (!createdKey?.key) return;
      await navigator.clipboard.writeText(createdKey.key);
    }
    head("4e8etr", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>API Keys — MetaRank</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Create, rotate, and revoke API keys used to access the MetaRank API."/>`);
    });
    {
      let actions = function($$renderer3) {
        Button($$renderer3, {
          as: "a",
          href: "/docs",
          variant: "ghost",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View docs`);
          },
          $$slots: { default: true }
        });
      };
      DashboardPageHeader($$renderer2, {
        eyebrow: "Dashboard",
        title: "API Keys",
        description: "Create, rotate, and revoke keys used to access the MetaRank API.",
        actions
      });
    }
    $$renderer2.push(`<!----> <div class="keys-page svelte-4e8etr">`);
    Card($$renderer2, {
      class: "panel create-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="section-title svelte-4e8etr">Create API key</h2> <p class="section-copy svelte-4e8etr">Name your key by environment or use case so you can identify it later.</p> <div class="create-row svelte-4e8etr"><div class="field svelte-4e8etr"><label class="label svelte-4e8etr" for="key-name">Key name</label> <input id="key-name" class="input svelte-4e8etr" type="text" placeholder="Production"${attr("value", name)}/></div> <div class="actions svelte-4e8etr">`);
        Button($$renderer3, {
          onclick: createKey,
          disabled: creating,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(creating ? "Creating..." : "Create API key")}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div> `);
        if (createError) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="error svelte-4e8etr">${escape_html(createError)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (createdKey) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="created-key svelte-4e8etr"><div class="created-key-header svelte-4e8etr"><div><p class="created-label svelte-4e8etr">New API key</p> <p class="created-note svelte-4e8etr">Copy this now. You will not be able to see it again.</p></div> `);
          Button($$renderer3, {
            size: "sm",
            variant: "ghost",
            onclick: copyCreatedKey,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Copy key`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div> <pre class="key-output svelte-4e8etr">${escape_html(createdKey.key)}</pre></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "panel list-panel",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="list-header svelte-4e8etr"><div><h2 class="section-title svelte-4e8etr">Existing keys</h2> <p class="section-copy svelte-4e8etr">Revoke keys you no longer use. Revoked keys can no longer access the API.</p></div></div> `);
        if (keys.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="empty-state svelte-4e8etr"><p class="empty-title svelte-4e8etr">No API keys yet</p> <p class="empty-copy svelte-4e8etr">Create your first key to start sending requests to the MetaRank API.</p></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="table-wrap svelte-4e8etr"><table class="keys-table svelte-4e8etr"><thead><tr><th class="svelte-4e8etr">Name</th><th class="svelte-4e8etr">Prefix</th><th class="svelte-4e8etr">Created</th><th class="svelte-4e8etr">Status</th><th class="svelte-4e8etr"></th></tr></thead><tbody><!--[-->`);
          const each_array = ensure_array_like(keys);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let key = each_array[$$index];
            $$renderer3.push(`<tr><td class="svelte-4e8etr">${escape_html(key.name)}</td><td class="svelte-4e8etr"><code class="svelte-4e8etr">${escape_html(key.prefix)}</code></td><td class="svelte-4e8etr">${escape_html(new Date(key.createdAt).toLocaleDateString())}</td><td class="svelte-4e8etr"><span${attr_class("status-badge svelte-4e8etr", void 0, { "revoked": key.revoked })}>${escape_html(key.revoked ? "Revoked" : "Active")}</span></td><td class="action-cell svelte-4e8etr">`);
            if (key.revoked) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="muted svelte-4e8etr">—</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
              Button($$renderer3, {
                size: "sm",
                variant: "ghost",
                onclick: () => revokeKey(key.keyId),
                disabled: revokingKeyId === key.keyId,
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->${escape_html(revokingKeyId === key.keyId ? "Revoking..." : "Revoke")}`);
                },
                $$slots: { default: true }
              });
            }
            $$renderer3.push(`<!--]--></td></tr>`);
          }
          $$renderer3.push(`<!--]--></tbody></table></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
