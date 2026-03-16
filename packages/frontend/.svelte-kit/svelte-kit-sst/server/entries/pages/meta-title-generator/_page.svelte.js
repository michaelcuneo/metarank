import "clsx";
import { S as SeoLandingPage } from "../../../chunks/SeoLandingPage.js";
const metaTitleGeneratorPage = {
  slug: "meta-title-generator",
  title: "Meta Title Generator",
  metaTitle: "Meta Title Generator API — AI SEO Titles | MetaRank",
  metaDescription: "Generate SEO meta titles from content with MetaRank. AI-powered API for developers, CMS platforms, and publishing workflows.",
  eyebrow: "SEO Automation",
  heroTitle: "Meta Title Generator API",
  heroDescription: "Create search-friendly meta titles from real page content using MetaRank. Built for developers, publishing systems, and SEO workflows that need clean metadata at scale.",
  primaryCta: {
    label: "Open generator",
    href: "/dashboard/generate"
  },
  secondaryCta: {
    label: "Read docs",
    href: "/docs"
  },
  benefits: [
    "Generate concise SEO titles from real content",
    "Keep titles consistent across large page sets",
    "Reduce manual editorial work for metadata",
    "Return structured output ready for CMS pipelines"
  ],
  useCases: [
    {
      title: "Editorial systems",
      description: "Generate optimized titles when writers publish, revise, or bulk-import content."
    },
    {
      title: "Programmatic landing pages",
      description: "Create titles automatically for location pages, category pages, and templates."
    },
    {
      title: "SEO tooling",
      description: "Use MetaRank as a backend service for internal tools and metadata audits."
    }
  ],
  codeExample: {
    title: "Example request",
    language: "bash",
    code: `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How Structured Content Improves Search Visibility",
    "body": "Structured content helps readers scan pages quickly and makes it easier for search engines to understand page hierarchy and meaning.",
    "targetQuery": "meta title generator"
  }'`
  },
  faqs: [
    {
      question: "What makes a good meta title?",
      answer: "A good meta title is clear, relevant to the page, and aligned with the target query. MetaRank is designed to produce titles that are readable and useful in search results."
    },
    {
      question: "Can I generate titles at scale?",
      answer: "Yes. MetaRank is API-first, so it works well for large content sets, CMS workflows, and automated publishing systems."
    },
    {
      question: "Does MetaRank only return titles?",
      answer: "No. The API also returns descriptions, keywords, slugs, and search intent so you can build a full metadata pipeline."
    }
  ]
};
function _page($$renderer) {
  SeoLandingPage($$renderer, { content: metaTitleGeneratorPage });
}
export {
  _page as default
};
