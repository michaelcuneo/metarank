import "clsx";
import { C as Card } from "../../../chunks/Card.js";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/errorThrower.js";
import "@clerk/shared/authorization";
import { S as SignInButton } from "../../../chunks/SignInButton.js";
import "@clerk/shared/deriveState";
import "@clerk/shared/loadClerkJsScript";
import "../../../chunks/client.js";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const copy = (text) => navigator.clipboard.writeText(text);
    const curlExample = `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`;
    const jsExample = `fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`;
    $$renderer2.push(`<div class="page-shell docs svelte-1xmjmrw"><header class="docs-hero svelte-1xmjmrw"><h1 class="page-title svelte-1xmjmrw">MetaRank API Documentation</h1> <p class="page-lead svelte-1xmjmrw">Generate clean, search-optimized SEO metadata from real content using a single API call.</p></header> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">What MetaRank does</h2> <p class="svelte-1xmjmrw">MetaRank analyzes your article content and returns SEO-ready metadata including titles,
			descriptions, keywords, slugs, and search intent.</p> <p class="svelte-1xmjmrw">There is no training phase, no prompt management, and no tuning required.
			You provide content. MetaRank returns metadata.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Authentication</h2> <p class="svelte-1xmjmrw">All requests require an API key passed via the Authorization header.</p> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<pre class="svelte-1xmjmrw">Authorization: Bearer YOUR_API_KEY</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">API Endpoint</h2> `);
    Card($$renderer2, {
      class: "endpoint",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="method svelte-1xmjmrw">POST</div> <code>https://api.metarank.dev/v1/seo/meta</code>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Request body</h2> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<pre class="svelte-1xmjmrw">{
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
}</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <ul class="field-notes svelte-1xmjmrw"><li class="svelte-1xmjmrw"><strong>title</strong> (required) — Article title</li> <li class="svelte-1xmjmrw"><strong>body</strong> (required) — Minimum 100 characters</li> <li class="svelte-1xmjmrw"><strong>location</strong> (optional) — Geographic SEO context</li> <li class="svelte-1xmjmrw"><strong>targetQuery</strong> (optional) — Overrides inferred intent</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Response</h2> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<pre class="svelte-1xmjmrw">{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
}</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <p class="note svelte-1xmjmrw">Responses are deterministic JSON and safe to store or cache.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Examples</h2> `);
    Card($$renderer2, {
      class: "example-block",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">cURL</span> `);
        Button($$renderer3, {
          size: "sm",
          variant: "ghost",
          onclick: () => copy(curlExample),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Copy`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <pre class="svelte-1xmjmrw">curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "example-block",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">JavaScript</span> `);
        Button($$renderer3, {
          size: "sm",
          variant: "ghost",
          onclick: () => copy(jsExample),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Copy`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <pre class="svelte-1xmjmrw">fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Usage and limits</h2> <ul class="svelte-1xmjmrw"><li class="svelte-1xmjmrw">One request equals one article processed</li> <li class="svelte-1xmjmrw">Failed requests are not billed</li> <li class="svelte-1xmjmrw">Retries do not count toward usage</li> <li class="svelte-1xmjmrw">Usage resets monthly</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Data handling</h2> <p class="svelte-1xmjmrw">Content is processed ephemerally. MetaRank does not store content or use it for training.</p></section> `);
    Card($$renderer2, {
      class: "cta",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2>Get started</h2> <p class="svelte-1xmjmrw">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1xmjmrw">`);
        if (data.auth.isSignedIn) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            as: "a",
            href: "/dashboard/generate",
            size: "lg",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Try the generator`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          SignInButton($$renderer3, {
            class: "clerk-user-button",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Get started free`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]--> `);
        Button($$renderer3, {
          as: "a",
          href: "/docs",
          size: "lg",
          variant: "ghost",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View API docs`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
