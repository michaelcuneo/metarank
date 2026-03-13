import "clsx";
import { C as Card } from "../../../chunks/Card.js";
import { B as Button } from "../../../chunks/Button.js";
function _page($$renderer) {
  $$renderer.push(`<div class="page-shell about svelte-cwls5q"><header class="about-hero svelte-cwls5q"><h1 class="page-title svelte-cwls5q">About MetaRank</h1> <p class="page-lead svelte-cwls5q">MetaRank is a simple API for generating clean, search-optimized SEO metadata
			from real content.</p></header> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">Why MetaRank exists</h2> <p class="svelte-cwls5q">SEO metadata is still mostly created by hand, copied between tools,
			or generated using brittle prompts that change every time a model updates.</p> <p class="svelte-cwls5q">MetaRank exists to make SEO metadata predictable.
			You send content. You get structured metadata back.
			The output is consistent, deterministic, and safe to use in production.</p></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">What MetaRank does</h2> <p class="svelte-cwls5q">MetaRank analyzes article content and returns SEO-ready metadata including:</p> <ul class="svelte-cwls5q"><li class="svelte-cwls5q">Meta titles and descriptions</li> <li class="svelte-cwls5q">SEO-friendly slugs</li> <li class="svelte-cwls5q">Keyword sets</li> <li class="svelte-cwls5q">Search intent classification</li></ul> <p class="svelte-cwls5q">It works with Markdown, HTML, or plain text and requires no training,
			no configuration, and no prompt engineering.</p></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">Who it’s for</h2> <p class="svelte-cwls5q">MetaRank is built for developers, content teams, and platforms that
			need reliable SEO metadata at scale.</p> <ul class="svelte-cwls5q"><li class="svelte-cwls5q">Content platforms and headless CMS setups</li> <li class="svelte-cwls5q">Static site generators</li> <li class="svelte-cwls5q">Multi-site publishing workflows</li> <li class="svelte-cwls5q">Teams who want SEO metadata to just work</li></ul></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">What it’s not</h2> <p class="svelte-cwls5q">MetaRank is not a keyword research tool, a site auditor, or an SEO dashboard.</p> <p class="svelte-cwls5q">It focuses on one job: generating high-quality SEO metadata from content,
			consistently and programmatically.</p></section> `);
  Card($$renderer, {
    class: "cta",
    children: ($$renderer2) => {
      $$renderer2.push(`<h2>Get started</h2> <p class="svelte-cwls5q">You can try MetaRank directly in the browser or integrate it using the API.</p> <div class="cta-actions svelte-cwls5q">`);
      Button($$renderer2, {
        as: "a",
        href: "/generate",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Try the generator`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        as: "a",
        href: "/docs",
        variant: "ghost",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View the docs`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
