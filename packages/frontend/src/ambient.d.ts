interface SeoMetaResponseV1 {
	metaTitle: string;
	metaDescription: string;
	slug: string;
	keywords: string;
	ogDescription: string;
	ogImage: string | null;
	searchIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
	primaryLocation: string | null;
	languageCode: string;
}

type UsageSource = 'ui' | 'api';

interface UsageEvent {
	userId: string;
	type: 'seo_meta';
	source: UsageSource;
	timestamp: string;
	inputLength: number;
	languageCode: string;
}

interface UsageContext {
	userId: string;
	source: 'ui' | 'api';
}

type SeoLandingPageContent = {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	eyebrow: string;
	heroTitle: string;
	heroDescription: string;
	primaryCta: {
		label: string;
		href: string;
	};
	secondaryCta: {
		label: string;
		href: string;
	};
	benefits: string[];
	useCases: {
		title: string;
		description: string;
	}[];
	codeExample: {
		title: string;
		language: 'bash' | 'javascript';
		code: string;
	};
	faqs: {
		question: string;
		answer: string;
	}[];
};

async function generateSeoMeta(post: PostInput, usage?: UsageContext): Promise<SeoMetaResponseV1>;
