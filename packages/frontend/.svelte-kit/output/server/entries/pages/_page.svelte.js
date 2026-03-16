import "clsx";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
import "../../chunks/errorThrower.js";
import "@clerk/shared/authorization";
import { S as SignInButton } from "../../chunks/SignInButton.js";
import "@clerk/shared/deriveState";
import "@clerk/shared/loadClerkJsScript";
import "../../chunks/client.js";
import "@clerk/shared/underscore";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="page-shell landing svelte-1uha8ag"><header class="hero svelte-1uha8ag"><h1 class="svelte-1uha8ag">SEO metadata that just works</h1> <p class="hero-sub svelte-1uha8ag">MetaRank generates clean, search-optimized SEO metadata from real content using a single API call.</p> <p class="hero-trust svelte-1uha8ag">Built for developers, content platforms, and publishing systems.</p> <div class="hero-actions svelte-1uha8ag">`);
    if (data.auth.isSignedIn) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        as: "a",
        href: "/dashboard/generate",
        size: "lg",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Try the generator`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      SignInButton($$renderer2, {
        class: "clerk-user-button",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Get started free`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--> `);
    Button($$renderer2, {
      as: "a",
      href: "/docs",
      size: "lg",
      variant: "ghost",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->View API docs`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></header> <section class="value svelte-1uha8ag"><div class="value-grid svelte-1uha8ag">`);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="svelte-1uha8ag">One endpoint</h3> <p class="svelte-1uha8ag">Send your content and get structured SEO metadata back. No configuration,
					no prompt engineering, and no extra tooling required.</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="svelte-1uha8ag">Predictable output</h3> <p class="svelte-1uha8ag">Deterministic JSON designed to be cached, stored, and safely shipped to
					production systems.</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="svelte-1uha8ag">Built for developers</h3> <p class="svelte-1uha8ag">Designed for content platforms, headless CMS setups, and automated
					publishing workflows.</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></section> <section class="example svelte-1uha8ag">`);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="example-header svelte-1uha8ag">Example response</div> <pre class="svelte-1uha8ag">{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "searchIntent": "informational"
}</pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="cta svelte-1uha8ag"><h2 class="svelte-1uha8ag">Start generating SEO metadata in minutes</h2> <p class="svelte-1uha8ag">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1uha8ag">`);
    if (data.auth.isSignedIn) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        as: "a",
        href: "/dashboard/generate",
        size: "lg",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Try the generator`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      SignInButton($$renderer2, {
        class: "clerk-user-button",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Get started free`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--> `);
    Button($$renderer2, {
      as: "a",
      href: "/docs",
      size: "lg",
      variant: "ghost",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->View API docs`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></section> <section class="seo-pages svelte-1uha8ag"><div class="seo-inner svelte-1uha8ag"><div class="seo-header svelte-1uha8ag"><h2 class="svelte-1uha8ag">SEO Tools for Developers</h2> <p class="svelte-1uha8ag">MetaRank helps developers and content platforms automate SEO metadata
					generation with a simple API.</p> <a class="tools-link" href="/seo-tools">View all SEO tools</a> <p class="seo-intro svelte-1uha8ag">MetaRank provides developer-friendly SEO tools including a meta title generator,
					meta description generator, and AI search intent classification API. 
					These tools help automate SEO metadata generation for modern content workflows.</p></div> <div class="seo-grid svelte-1uha8ag"><a href="/meta-description-generator" class="seo-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Meta Description Generator</h3> <p class="svelte-1uha8ag">Generate search-friendly meta descriptions from page content using
						the MetaRank API.</p></a> <a href="/meta-title-generator" class="seo-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Meta Title Generator</h3> <p class="svelte-1uha8ag">Create optimized meta titles automatically for articles,
						landing pages, and CMS content.</p></a> <a href="/search-intent-api" class="seo-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Search Intent API</h3> <p class="svelte-1uha8ag">Classify content as informational, commercial, transactional,
						or navigational using AI.</p></a> <a href="/seo-metadata-api" class="seo-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">SEO Metadata API</h3> <p class="svelte-1uha8ag">Generate titles, descriptions, keywords, slugs, and intent in one
						structured API response.</p></a> <a href="/ai-seo-api" class="seo-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">AI SEO API</h3> <p class="svelte-1uha8ag">Automate SEO metadata generation for CMS platforms,
						publishing tools, and developer workflows.</p></a></div></div></section></div>`);
  });
}
export {
  _page as default
};
