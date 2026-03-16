import "clsx";
import { S as SeoLandingPage } from "../../../chunks/SeoLandingPage.js";
const searchIntentApiPage = {
  slug: "search-intent-api",
  title: "Search Intent API",
  metaTitle: "Search Intent API — Classify Query Intent with AI | MetaRank",
  metaDescription: "Classify search intent with MetaRank. AI-powered API for informational, commercial, transactional, and navigational SEO workflows.",
  eyebrow: "SEO Intelligence",
  heroTitle: "Search Intent Classification API",
  heroDescription: "Understand whether a page or query is informational, commercial, transactional, or navigational. MetaRank helps teams classify intent directly from content and targeting context.",
  primaryCta: {
    label: "Open generator",
    href: "/dashboard/generate"
  },
  secondaryCta: {
    label: "Read docs",
    href: "/docs"
  },
  benefits: [
    "Classify intent directly from page content and targeting",
    "Improve SEO workflows with structured intent data",
    "Support content planning and page-type decisions",
    "Return intent in API responses alongside other metadata"
  ],
  useCases: [
    {
      title: "SEO teams",
      description: "Quickly classify pages and queries to improve content planning and SERP targeting."
    },
    {
      title: "CMS platforms",
      description: "Add intent-aware publishing logic to editorial and optimization workflows."
    },
    {
      title: "Content analytics",
      description: "Tag pages by intent to identify gaps across informational, commercial, and conversion-focused content."
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
    title: "Best Project Management Tools for Agencies",
    body: "Agencies often compare project management software based on collaboration features, pricing, reporting, and client access.",
    targetQuery: "best project management tools for agencies"
  })
})
  .then((res) => res.json())
  .then(console.log);`
  },
  faqs: [
    {
      question: "What intent types does MetaRank return?",
      answer: "MetaRank returns one of four common SEO intent categories: informational, commercial, transactional, or navigational."
    },
    {
      question: "Can search intent help content strategy?",
      answer: "Yes. Intent classification helps teams understand what users expect and whether a page should educate, compare, convert, or guide navigation."
    },
    {
      question: "Is intent returned with the rest of the metadata?",
      answer: "Yes. Search intent is included in the same response as title, description, slug, and keywords."
    }
  ]
};
function _page($$renderer) {
  SeoLandingPage($$renderer, { content: searchIntentApiPage });
}
export {
  _page as default
};
