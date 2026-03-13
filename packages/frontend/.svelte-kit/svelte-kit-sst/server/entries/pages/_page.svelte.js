import "clsx";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
function _page($$renderer) {
  $$renderer.push(`<div class="page-shell landing svelte-1uha8ag"><header class="hero svelte-1uha8ag"><h1 class="svelte-1uha8ag">SEO metadata that just works</h1> <p class="hero-sub svelte-1uha8ag">MetaRank generates clean, search-optimized SEO metadata from real content using a single API call.</p> <p class="hero-trust svelte-1uha8ag">Built for developers, content platforms, and publishing systems.</p> <div class="hero-actions svelte-1uha8ag">`);
  Button($$renderer, {
    as: "a",
    href: "/generate",
    size: "lg",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Try the generator`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    as: "a",
    href: "/docs",
    size: "lg",
    variant: "ghost",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->View API docs`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></header> <section class="value svelte-1uha8ag"><div class="value-grid svelte-1uha8ag">`);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h3 class="svelte-1uha8ag">One endpoint</h3> <p class="svelte-1uha8ag">Send your content and get structured SEO metadata back. No configuration,
					no prompt engineering, and no extra tooling required.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h3 class="svelte-1uha8ag">Predictable output</h3> <p class="svelte-1uha8ag">Deterministic JSON designed to be cached, stored, and safely shipped to
					production systems.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h3 class="svelte-1uha8ag">Built for developers</h3> <p class="svelte-1uha8ag">Designed for content platforms, headless CMS setups, and automated
					publishing workflows.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section> <section class="example svelte-1uha8ag">`);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="example-header svelte-1uha8ag">Example response</div> <pre class="svelte-1uha8ag">{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "searchIntent": "informational"
}</pre>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></section> <section class="cta svelte-1uha8ag"><h2 class="svelte-1uha8ag">Start generating SEO metadata in minutes</h2> <p class="svelte-1uha8ag">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1uha8ag">`);
  Button($$renderer, {
    as: "a",
    href: "/generate",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Get started free`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    as: "a",
    href: "/docs",
    variant: "ghost",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Read the docs`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section></div>`);
}
export {
  _page as default
};
