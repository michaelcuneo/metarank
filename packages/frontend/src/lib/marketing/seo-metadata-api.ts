export const seoMetadataApiPage: SeoLandingPageContent = {
	slug: 'seo-metadata-api',
	title: 'SEO Metadata API',
	metaTitle: 'SEO Metadata API — Generate Titles, Descriptions & Keywords | MetaRank',
	metaDescription:
		'MetaRank is an AI SEO metadata API for titles, descriptions, keywords, slugs, and search intent. Built for developers and modern content platforms.',
	eyebrow: 'Developer API',
	heroTitle: 'SEO Metadata API for Modern Content Workflows',
	heroDescription:
		'Generate SEO titles, descriptions, keywords, slugs, and search intent from real content with a single API request. MetaRank is built for developers, CMS products, and publishing platforms.',
	primaryCta: {
		label: 'Open generator',
		href: '/dashboard/generate'
	},
	secondaryCta: {
		label: 'Read docs',
		href: '/docs'
	},
	benefits: [
		'Generate multiple SEO fields in one request',
		'Use structured JSON output in existing systems',
		'Reduce manual metadata writing across teams',
		'Integrate quickly into CMSs, jobs, and pipelines'
	],
	useCases: [
		{
			title: 'Headless CMS products',
			description: 'Offer automated metadata generation as a built-in feature for publishing teams.'
		},
		{
			title: 'Content platforms',
			description: 'Generate metadata at scale across articles, category pages, and landing pages.'
		},
		{
			title: 'Internal tooling',
			description: 'Build metadata previews, QA tools, and automation workflows on top of one API.'
		}
	],
	codeExample: {
		title: 'Example request',
		language: 'bash',
		code: `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to Improve Blog Post Structure",
    "body": "Clear headings, readable paragraphs, and focused sections help both readers and search engines understand your content more effectively.",
    "location": "Newcastle",
    "targetQuery": "seo metadata api"
  }'`
	},
	faqs: [
		{
			question: 'What does the SEO metadata API return?',
			answer:
				'MetaRank returns a title, description, slug, keywords, and search intent in a single structured response.'
		},
		{
			question: 'Who is this API built for?',
			answer:
				'It is built for developers, editorial systems, CMS products, and teams that need metadata generation at scale.'
		},
		{
			question: 'Can I test the API before integrating?',
			answer:
				'Yes. You can create a key, use the dashboard generator, and inspect live request and response output before integrating it into your stack.'
		}
	]
};
