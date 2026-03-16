import { i as head, e as escape_html, b as ensure_array_like, c as attr } from "./index2.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
function SeoLandingPage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { content } = $$props;
    head("o65vq1", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(content.metaTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", content.metaDescription)}/> <link rel="canonical"${attr("href", `https://metarank.dev/${content.slug}`)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", `https://metarank.dev/${content.slug}`)}/> <meta property="og:title"${attr("content", content.metaTitle)}/> <meta property="og:description"${attr("content", content.metaDescription)}/> <meta property="og:image" content="%sveltekit.assets%/og/metarank.png"/> <meta property="og:site_name" content="MetaRank"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", content.metaTitle)}/> <meta name="twitter:description"${attr("content", content.metaDescription)}/> <meta name="twitter:image" content="%sveltekit.assets%/og/metarank.png"/>`);
    });
    $$renderer2.push(`<div class="landing-page svelte-o65vq1"><section class="hero svelte-o65vq1"><div class="hero-copy"><p class="eyebrow svelte-o65vq1">${escape_html(content.eyebrow)}</p> <h1 class="svelte-o65vq1">${escape_html(content.heroTitle)}</h1> <p class="hero-description svelte-o65vq1">${escape_html(content.heroDescription)}</p> <div class="hero-actions svelte-o65vq1">`);
    Button($$renderer2, {
      as: "a",
      href: content.primaryCta.href,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(content.primaryCta.label)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      as: "a",
      href: content.secondaryCta.href,
      variant: "ghost",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(content.secondaryCta.label)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> `);
    Card($$renderer2, {
      class: "hero-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="card-title svelte-o65vq1">Why teams use MetaRank</h2> <ul class="benefit-list svelte-o65vq1"><!--[-->`);
        const each_array = ensure_array_like(content.benefits);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let benefit = each_array[$$index];
          $$renderer3.push(`<li>${escape_html(benefit)}</li>`);
        }
        $$renderer3.push(`<!--]--></ul>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="section svelte-o65vq1"><div class="section-header svelte-o65vq1"><h2 class="svelte-o65vq1">Built for real production workflows</h2> <p class="svelte-o65vq1">MetaRank helps developers, CMS platforms, publishing tools, and SEO teams
				automate metadata generation without fragile prompts or manual copywriting.</p></div> <div class="use-cases svelte-o65vq1"><!--[-->`);
    const each_array_1 = ensure_array_like(content.useCases);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let useCase = each_array_1[$$index_1];
      Card($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<h3 class="svelte-o65vq1">${escape_html(useCase.title)}</h3> <p class="svelte-o65vq1">${escape_html(useCase.description)}</p>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section svelte-o65vq1"><div class="section-header svelte-o65vq1"><h2 class="svelte-o65vq1">${escape_html(content.codeExample.title)}</h2> <p class="svelte-o65vq1">Use the MetaRank API directly from your app, CMS, editorial workflow, or automation pipeline.</p></div> `);
    Card($$renderer2, {
      class: "code-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<pre><code>${escape_html(content.codeExample.code)}</code></pre>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section> <section class="section svelte-o65vq1"><div class="section-header svelte-o65vq1"><h2 class="svelte-o65vq1">Frequently asked questions</h2> <p class="svelte-o65vq1">Common questions for teams evaluating MetaRank for automated SEO metadata generation.</p></div> <div class="faq-list svelte-o65vq1"><!--[-->`);
    const each_array_2 = ensure_array_like(content.faqs);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let faq = each_array_2[$$index_2];
      Card($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<h3 class="svelte-o65vq1">${escape_html(faq.question)}</h3> <p class="svelte-o65vq1">${escape_html(faq.answer)}</p>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="cta-section svelte-o65vq1">`);
    Card($$renderer2, {
      class: "cta-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="svelte-o65vq1">Start generating SEO metadata with MetaRank</h2> <p>Test the API in the dashboard, create a key, and ship cleaner metadata across your product.</p> <div class="hero-actions svelte-o65vq1">`);
        Button($$renderer3, {
          as: "a",
          href: "/dashboard/generate",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Open generator`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          as: "a",
          href: "/pricing",
          variant: "secondary",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->View pricing`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></section></div>`);
  });
}
export {
  SeoLandingPage as S
};
