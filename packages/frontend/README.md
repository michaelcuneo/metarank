# seo-genius

Generate smart SEO meta tags (title, description, keywords, slug, OpenGraph) from full post content using AWS Comprehend and OpenAI GPT-4.

## ✨ Features

- Extracts key phrases & entities with AWS Comprehend
- Uses GPT-4 to generate optimized SEO metadata
- Detects language automatically
- Works in Node.js or AWS Lambda
- Built for integration in SvelteKit module projects
- Includes CLI tool: `seo-genius run post.md`

## 🚀 Install

```bash
pnpm add @michaelcuneo/seo-genius
```

## 📦 Usage

### In Code:

```ts
import { generateSeoMeta } from '@michaelcuneo/seo-genius';

const result = await generateSeoMeta({
	title: 'How to Deploy SST Apps to AWS',
	body: 'Your full markdown or HTML content here',
	location: 'Seattle, WA',
	targetQuery: 'deploy SST to AWS'
});

console.log(result.metaTitle);
```

### In AWS Lambda:

```ts
import { lambdaHandler } from '@michaelcuneo/seo-genius';
export const handler = lambdaHandler;
```

## 🧪 CLI Usage

After installing globally or linking locally:

```bash
seo-genius run path/to/post.md
```

Or directly with NPX:

```bash
npx @michaelcuneo/seo-genius run path/to/post.md
```

You can also pass optional env variables:

```bash
SEO_LOCATION="San Francisco" SEO_QUERY="best cafes" seo-genius run article.md
```

## 🛠️ Env Setup

Set your API keys:

```bash
AWS_REGION=us-west-2
OPENAI_API_KEY=sk-...
```

## 📄 License

MIT
