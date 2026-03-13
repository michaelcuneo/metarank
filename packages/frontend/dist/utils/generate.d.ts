export interface PostInput {
    title: string;
    body: string;
    tags?: string[];
    location?: string;
    targetQuery?: string;
    languageCode?: string;
}
export declare function generateSeoMeta(post: PostInput): Promise<SeoMetaResponseV1>;
