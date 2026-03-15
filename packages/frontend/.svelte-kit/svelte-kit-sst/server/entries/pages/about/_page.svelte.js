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
    $$renderer2.push(`<div class="page-shell about svelte-cwls5q"><header class="about-hero svelte-cwls5q"><h1 class="page-title svelte-cwls5q">About MetaRank</h1> <p class="page-lead svelte-cwls5q">MetaRank is a simple API for generating clean, search-optimized SEO metadata
			from real content.</p></header> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">Why MetaRank exists</h2> <p class="svelte-cwls5q">SEO metadata is still mostly created by hand, copied between tools,
			or generated using brittle prompts that change every time a model updates.</p> <p class="svelte-cwls5q">MetaRank exists to make SEO metadata predictable.
			You send content. You get structured metadata back.
			The output is consistent, deterministic, and safe to use in production.</p></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">What MetaRank does</h2> <p class="svelte-cwls5q">MetaRank analyzes article content and returns SEO-ready metadata including:</p> <ul class="svelte-cwls5q"><li class="svelte-cwls5q">Meta titles and descriptions</li> <li class="svelte-cwls5q">SEO-friendly slugs</li> <li class="svelte-cwls5q">Keyword sets</li> <li class="svelte-cwls5q">Search intent classification</li></ul> <p class="svelte-cwls5q">It works with Markdown, HTML, or plain text and requires no training,
			no configuration, and no prompt engineering.</p></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">Who it's for</h2> <p class="svelte-cwls5q">MetaRank is built for developers, content teams, and platforms that
			need reliable SEO metadata at scale.</p> <ul class="svelte-cwls5q"><li class="svelte-cwls5q">Content platforms and headless CMS setups</li> <li class="svelte-cwls5q">Static site generators</li> <li class="svelte-cwls5q">Multi-site publishing workflows</li> <li class="svelte-cwls5q">Teams who want SEO metadata to just work</li></ul></section> <section class="svelte-cwls5q"><h2 class="svelte-cwls5q">What it's not</h2> <p class="svelte-cwls5q">MetaRank is not a keyword research tool, a site auditor, or an SEO dashboard.</p> <p class="svelte-cwls5q">It focuses on one job: generating high-quality SEO metadata from content,
			consistently and programmatically.</p></section> `);
    Card($$renderer2, {
      class: "cta",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2>Get started</h2> <p class="svelte-cwls5q">You can try MetaRank directly in the browser or integrate it using the API.</p> <div class="cta-actions svelte-cwls5q">`);
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
