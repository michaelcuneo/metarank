import { i as head, b as ensure_array_like, c as attr, e as escape_html } from "../../../chunks/index2.js";
function _page($$renderer) {
  const tools = [
    {
      title: "Meta Description Generator",
      href: "/meta-description-generator",
      description: "Generate SEO meta descriptions automatically from page content using the MetaRank API."
    },
    {
      title: "Meta Title Generator",
      href: "/meta-title-generator",
      description: "Create optimized meta titles from real content using AI-powered SEO metadata generation."
    },
    {
      title: "Search Intent API",
      href: "/search-intent-api",
      description: "Classify queries and pages into informational, commercial, transactional, or navigational intent."
    },
    {
      title: "SEO Metadata API",
      href: "/seo-metadata-api",
      description: "Generate titles, descriptions, keywords, and slugs using one simple API request."
    },
    {
      title: "AI SEO API",
      href: "/ai-seo-api",
      description: "Automate SEO metadata generation across CMS systems, publishing workflows, and developer tools."
    }
  ];
  head("tydqxc", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>SEO Tools for Developers — MetaRank</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Explore MetaRank SEO tools for developers including meta title generators, description generators, and AI-powered metadata APIs."/> `);
    $$renderer2.push(`<script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MetaRank SEO Tools",
    "itemListElement": [
      {
      "@type": "ListItem",
      "position": 1,
      "url": "https://metarank.dev/meta-title-generator"
      },
      {
      "@type": "ListItem",
      "position": 2,
      "url": "https://metarank.dev/meta-description-generator"
      },
      {
      "@type": "ListItem",
      "position": 3,
      "url": "https://metarank.dev/search-intent-api"
      }
    ]
    }
  <\/script>`);
  });
  $$renderer.push(`<section class="tools svelte-tydqxc"><div class="inner svelte-tydqxc"><header class="header svelte-tydqxc"><h1 class="svelte-tydqxc">SEO Tools for Developers</h1> <p class="svelte-tydqxc">MetaRank provides developer-friendly tools for generating metadata,
				classifying search intent, and automating SEO workflows.</p></header> <div class="grid svelte-tydqxc"><!--[-->`);
  const each_array = ensure_array_like(tools);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tool = each_array[$$index];
    $$renderer.push(`<a class="card svelte-tydqxc"${attr("href", tool.href)}><h2 class="svelte-tydqxc">${escape_html(tool.title)}</h2> <p class="svelte-tydqxc">${escape_html(tool.description)}</p></a>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  _page as default
};
