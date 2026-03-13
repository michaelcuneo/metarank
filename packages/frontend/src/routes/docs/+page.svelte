<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';

	const copy = (text: string) => navigator.clipboard.writeText(text);

	const curlExample = `curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`;

	const jsExample = `fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`;
</script>

<div class="page-shell docs">
	<header class="docs-hero">
		<h1 class="page-title">MetaRank API Documentation</h1>
		<p class="page-lead">
			Generate clean, search-optimized SEO metadata from real content using a single API call.
		</p>
	</header>

	<section>
		<h2>What MetaRank does</h2>
		<p>
			MetaRank analyzes your article content and returns SEO-ready metadata including titles,
			descriptions, keywords, slugs, and search intent.
		</p>
		<p>
			There is no training phase, no prompt management, and no tuning required.
			You provide content. MetaRank returns metadata.
		</p>
	</section>

	<section>
		<h2>Authentication</h2>
		<p>All requests require an API key passed via the Authorization header.</p>

		<Card>
			<pre>Authorization: Bearer YOUR_API_KEY</pre>
		</Card>
	</section>

	<section>
		<h2>API Endpoint</h2>

		<Card class="endpoint">
			<div class="method">POST</div>
			<code>https://api.metarank.dev/v1/seo/meta</code>
		</Card>
	</section>

	<section>
		<h2>Request body</h2>

		<Card>
<pre>{`{
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
}`}</pre>
		</Card>

		<ul class="field-notes">
			<li><strong>title</strong> (required) — Article title</li>
			<li><strong>body</strong> (required) — Minimum 100 characters</li>
			<li><strong>location</strong> (optional) — Geographic SEO context</li>
			<li><strong>targetQuery</strong> (optional) — Overrides inferred intent</li>
		</ul>
	</section>

	<section>
		<h2>Response</h2>

		<Card>
<pre>{`{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
}`}</pre>
		</Card>

		<p class="note">
			Responses are deterministic JSON and safe to store or cache.
		</p>
	</section>

	<section>
		<h2>Examples</h2>

		<Card class="example-block">
			<div class="example-header">
				<span>cURL</span>
				<Button size="sm" variant="ghost" onclick={() => copy(curlExample)}>
					Copy
				</Button>
			</div>
			<pre>{curlExample}</pre>
		</Card>

		<Card class="example-block">
			<div class="example-header">
				<span>JavaScript</span>
				<Button size="sm" variant="ghost" onclick={() => copy(jsExample)}>
					Copy
				</Button>
			</div>
			<pre>{jsExample}</pre>
		</Card>
	</section>

	<section>
		<h2>Usage and limits</h2>
		<ul>
			<li>One request equals one article processed</li>
			<li>Failed requests are not billed</li>
			<li>Retries do not count toward usage</li>
			<li>Usage resets monthly</li>
		</ul>
	</section>

	<section>
		<h2>Data handling</h2>
		<p>
			Content is processed ephemerally. MetaRank does not store content or use it for training.
		</p>
	</section>

	<Card class="cta">
		<h2>Get started</h2>
		<p>
			Try MetaRank in the browser or integrate it directly using the API.
		</p>
		<div class="cta-actions">
			<Button as="a" href="/generate">Get an API key</Button>
			<Button as="a" href="/generate" variant="ghost">Try the generator</Button>
		</div>
	</Card>
</div>

<style>
	.docs {
		max-width: 960px;
		margin: 0 auto;
		padding: 4.5rem 2rem 5rem;
	}

	.docs-hero {
		margin-bottom: 3rem;
	}

	.docs-hero h1 {
		margin: 0;
		font-size: clamp(2.05rem, 2vw + 1.25rem, 2.75rem);
		line-height: 1.06;
		letter-spacing: -0.03em;
		font-weight: 700;
	}

	.lead {
		margin: 0.85rem 0 0;
		color: var(--color-text-muted);
		font-size: 1rem;
		line-height: 1.65;
		max-width: 68ch;
	}

	section {
		margin-bottom: 2.25rem;
	}

	section h2 {
		margin: 0 0 0.75rem;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	p {
		margin: 0 0 0.85rem;
		line-height: 1.7;
		max-width: 72ch;
		color: var(--color-text);
	}

	section p:last-child {
		margin-bottom: 0;
	}

	.field-notes,
	ul {
		margin: 0.75rem 0 0.85rem;
		padding-left: 1.1rem;
		max-width: 72ch;
		color: var(--color-text-muted);
	}

	li {
		margin-bottom: 0.45rem;
		line-height: 1.6;
	}

	.endpoint {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.method {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.3rem 0.55rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--primary-bg) 12%, transparent);
		color: var(--primary-bg);
		border: 1px solid color-mix(in srgb, var(--primary-bg) 24%, transparent);
	}

	.example-block + .example-block {
		margin-top: 1rem;
	}

	.example-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.example-header span {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	pre {
		margin: 0;
		padding: 1rem;
		border-radius: var(--radius-md);
		background: var(--color-elevated);
		border: 1px solid var(--color-border);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.8rem;
		line-height: 1.7;
		white-space: pre-wrap;
		word-break: break-word;
		color: var(--color-text);
	}

	.note {
		margin-top: 0.9rem;
		font-size: 0.92rem;
		color: var(--color-text-muted);
	}

	.cta {
		margin-top: 3rem;
		text-align: center;
	}

	.cta h2 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.cta p {
		margin: 0.65rem auto 0;
		color: var(--color-text-muted);
		max-width: 60ch;
	}

	.cta-actions {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1.1rem;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.docs {
			padding: 3.5rem 1.25rem 4rem;
		}
	}
</style>