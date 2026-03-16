export const metaDescriptionGeneratorPage = {
    slug: 'meta-description-generator',
    title: 'Meta Description Generator',
    metaTitle: 'Meta Description Generator API — AI SEO Descriptions | MetaRank',
    metaDescription: 'Generate SEO meta descriptions from real content with MetaRank. AI-powered API for developers, CMS platforms, and publishing workflows.',
    eyebrow: 'SEO Automation',
    heroTitle: 'Meta Description Generator API',
    heroDescription: 'Generate clear, search-friendly meta descriptions from real page content using MetaRank. Built for developers, editorial systems, and content platforms that need metadata at scale.',
    primaryCta: {
        label: 'Open generator',
        href: '/dashboard/generate'
    },
    secondaryCta: {
        label: 'Read docs',
        href: '/docs'
    },
    benefits: [
        'Generate descriptions directly from page title and body content',
        'Keep metadata consistent across large content libraries',
        'Improve editorial workflows without manual copywriting',
        'Return structured JSON ready for CMS and API pipelines'
    ],
    useCases: [
        {
            title: 'CMS platforms',
            description: 'Automatically generate meta descriptions when editors publish or update pages.'
        },
        {
            title: 'Programmatic SEO',
            description: 'Produce metadata at scale for landing pages, collections, and generated content.'
        },
        {
            title: 'Content operations',
            description: 'Reduce manual review time by creating usable first-pass descriptions for teams.'
        }
    ],
    codeExample: {
        title: 'Example request',
        language: 'bash',
        code: `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "The Importance of Structured Content",
    "body": "Creating well-structured content is crucial for both user engagement and search visibility. Using clear headings and concise paragraphs helps readers digest information more efficiently.",
    "targetQuery": "meta description generator"
  }'`
    },
    faqs: [
        {
            question: 'What is a good meta description length?',
            answer: 'A good meta description is usually concise, readable, and aligned with the page topic. MetaRank is designed to generate descriptions that are useful for search previews without sounding robotic.'
        },
        {
            question: 'Can I use this in a CMS or editorial workflow?',
            answer: 'Yes. MetaRank is built as an API-first product, so you can generate descriptions during publishing, imports, background jobs, or content updates.'
        },
        {
            question: 'Does MetaRank only generate descriptions?',
            answer: 'No. The API also returns meta titles, keywords, slugs, and search intent, which makes it useful for full SEO metadata pipelines.'
        }
    ]
};
