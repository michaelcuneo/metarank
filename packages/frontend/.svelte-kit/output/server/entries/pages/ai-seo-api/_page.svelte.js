import "clsx";
import { S as SeoLandingPage } from "../../../chunks/SeoLandingPage.js";
const aiSeoApiPage = {
  slug: "ai-seo-api",
  title: "AI SEO API",
  metaTitle: "AI SEO API — Automated Metadata Generation for Developers | MetaRank",
  metaDescription: "Use MetaRank as your AI SEO API for generating titles, descriptions, keywords, slugs, and intent classification from content.",
  eyebrow: "AI for SEO",
  heroTitle: "AI SEO API for Scalable Metadata Automation",
  heroDescription: "MetaRank gives developers and content platforms an AI SEO API for turning raw content into structured metadata. Generate titles, descriptions, keywords, and intent without building your own prompt stack.",
  primaryCta: {
    label: "Open generator",
    href: "/dashboard/generate"
  },
  secondaryCta: {
    label: "Read docs",
    href: "/docs"
  },
  benefits: [
    "AI-driven metadata generation from real content",
    "Consistent output across publishing workflows",
    "Simple API surface for teams shipping quickly",
    "Useful for both testing and production automation"
  ],
  useCases: [
    {
      title: "SaaS content products",
      description: "Use AI SEO generation to improve publishing quality without building internal metadata systems."
    },
    {
      title: "Automation pipelines",
      description: "Trigger metadata generation during publish events, imports, sync jobs, and workflows."
    },
    {
      title: "Developer platforms",
      description: "Expose SEO generation as a product feature in APIs, CMSs, or integrations."
    }
  ],
  codeExample: {
    title: "Example request",
    language: "javascript",
    code: `fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Content Readability Best Practices",
    body: "Improving readability helps users stay engaged and makes content easier to scan, understand, and act on across devices.",
    targetQuery: "ai seo api"
  })
})
  .then((res) => res.json())
  .then(console.log);`
  },
  faqs: [
    {
      question: "What makes MetaRank an AI SEO API?",
      answer: "MetaRank uses AI to turn real content into structured SEO metadata, including titles, descriptions, keywords, and intent classification."
    },
    {
      question: "Do I need my own prompt engineering?",
      answer: "No. MetaRank is designed to give you a stable API response without requiring you to manage your own prompt workflows."
    },
    {
      question: "Can I use this in production?",
      answer: "Yes. MetaRank is built as a developer-facing API with usage limits, API keys, and structured JSON responses for production integration."
    }
  ]
};
function _page($$renderer) {
  SeoLandingPage($$renderer, { content: aiSeoApiPage });
}
export {
  _page as default
};
