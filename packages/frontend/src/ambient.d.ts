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

export interface UsageContext {
	userId: string;
	source: 'ui' | 'api';
}

export async function generateSeoMeta(
	post: PostInput,
	usage?: UsageContext
): Promise<SeoMetaResponseV1>;
