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

<div class="docs">
	<header class="docs-hero">
		<h1>MetaRank API Documentation</h1>
		<p class="lead">
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

		<Card class="code">
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

		<Card class="code">
<pre>{`
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
`}</pre>
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

		<Card class="code">
<pre>{`
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
`}</pre>
		</Card>

		<p class="note">
			Responses are deterministic JSON and safe to store or cache.
		</p>
	</section>

	<section>
		<h2>Examples</h2>

		<div class="example">
			<div class="example-header">
				<span>cURL</span>
				<button onclick={() => copy(curlExample)}>Copy</button>
			</div>
			<pre>{curlExample}</pre>
		</div>

		<div class="example">
			<div class="example-header">
				<span>JavaScript</span>
				<button onclick={() => copy(jsExample)}>Copy</button>
			</div>
			<pre>{jsExample}</pre>
		</div>
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

	<section class="cta">
		<h2>Get started</h2>
		<div class="cta-actions">
			<Button>Get an API key</Button>
			<Button variant="ghost">Try the generator</Button>
		</div>
	</section>
</div>

<style>
.docs {
	max-width: 1100px;
	margin: 0 auto;
	padding: 4.5rem 2.5rem 5rem;
	position: relative;
	isolation: isolate;
}

/* Ambient header glow (edge-free, matches landing/about) */
.docs::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	pointer-events: none;

	background:
		radial-gradient(980px 560px at 50% 0%, rgba(76, 141, 255, 0.18), transparent 62%),
		radial-gradient(820px 560px at 18% 16%, rgba(225, 29, 72, 0.08), transparent 60%),
		radial-gradient(820px 560px at 82% 16%, rgba(245, 158, 11, 0.08), transparent 60%);
	filter: blur(18px) saturate(1.06);
	opacity: 0.78;

	-webkit-mask-image: radial-gradient(
		farthest-side at 50% 18%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
	mask-image: radial-gradient(
		farthest-side at 50% 18%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
}

/* Hero */
.docs-hero {
	margin-bottom: 2.25rem;
	padding-bottom: 1.6rem;
	border-bottom: 1px solid var(--color-border);
}

.docs-hero h1 {
	margin: 0;
	font-size: clamp(2.05rem, 2vw + 1.25rem, 2.75rem);
	line-height: 1.06;
	letter-spacing: -0.03em;
	font-weight: 650;
}

.lead {
	margin: 0.85rem 0 0;
	color: var(--color-text-muted);
	font-size: clamp(1.05rem, 0.35vw + 1rem, 1.18rem);
	line-height: 1.6;
	max-width: 70ch;
}

/* Sections as “doc cards” */
section {
	margin: 1.15rem 0;
	padding: 1.35rem 1.35rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-2xl);
	background:
		linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.00));
	box-shadow: var(--shadow-sm);
}

@media (prefers-color-scheme: light) {
	section {
		background:
			linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.00));
	}
}

section h2 {
	margin: 0 0 0.75rem 0;
	font-size: 0.95rem;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
	display: flex;
	align-items: center;
	gap: 0.6rem;
}

/* Accent dot */
section h2::before {
	content: '';
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: var(--primary-bg);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.14);
}

/* Copy */
p {
	margin: 0 0 0.85rem 0;
	line-height: 1.7;
	max-width: 72ch;
	color: var(--color-text);
}

section p:last-child {
	margin-bottom: 0;
}

/* Lists */
ul {
	margin: 0.75rem 0 0.85rem 0;
	padding-left: 0;
	list-style: none;
	display: grid;
	gap: 0.45rem;
	color: var(--color-text-muted);
	max-width: 72ch;
}

li {
	position: relative;
	padding-left: 1.35rem;
	line-height: 1.6;
}

li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0.65em;
	transform: translateY(-50%);
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: rgba(76, 141, 255, 0.85);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.14);
}

/* Field notes: more “spec table” vibe */
.field-notes {
	margin-top: 0.85rem;
	padding: 0.9rem 1rem;
	border-radius: var(--radius-xl);
	border: 1px solid var(--color-border);
	background: rgba(255, 255, 255, 0.04);
	color: var(--color-text-muted);
	font-size: 0.9rem;
}

@media (prefers-color-scheme: light) {
	.field-notes {
		background: rgba(15, 23, 42, 0.03);
	}
}

.field-notes li {
	padding-left: 0;
}

.field-notes li::before {
	display: none;
}

.field-notes strong {
	color: var(--color-text);
	font-weight: 650;
}

.method {
	font-size: 0.72rem;
	font-weight: 750;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 0.28rem 0.55rem;
	border-radius: 999px;
	background: rgba(76, 141, 255, 0.18);
	color: var(--color-text);
	border: 1px solid rgba(76, 141, 255, 0.28);
}

/* Examples (dark terminal look but still theme-aligned) */
.example {
	border-radius: var(--radius-2xl);
	border: 1px solid rgba(255, 255, 255, 0.10);
	background:
		radial-gradient(900px 260px at 30% 0%, rgba(76, 141, 255, 0.16), transparent 60%),
		linear-gradient(180deg, rgba(2, 6, 23, 0.96), rgba(2, 6, 23, 0.90));
	padding: 1rem 1rem 1.05rem;
	margin-top: 0.9rem;
	color: rgba(255, 255, 255, 0.92);
	box-shadow: var(--shadow-md);
	overflow: hidden;
}

.example-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.65);
	margin-bottom: 0.75rem;
}

.example-header span {
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
}

.example-header span::before {
	content: '';
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: rgba(76, 141, 255, 0.95);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.18);
}

.example-header button {
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.10);
	color: rgba(255, 255, 255, 0.86);
	cursor: pointer;
	font-size: 0.78rem;
	font-weight: 650;
	padding: 0.35rem 0.6rem;
	border-radius: 999px;
	transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease;
}

.example-header button:hover {
	transform: translateY(-1px);
	border-color: rgba(76, 141, 255, 0.35);
	background: rgba(76, 141, 255, 0.12);
}

.example pre {
	margin: 0;
	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	font-size: 0.82rem;
	line-height: 1.7;
	white-space: pre-wrap;
	word-break: break-word;
	color: rgba(255, 255, 255, 0.92);
}

/* Notes */
.note {
	margin-top: 0.9rem;
	padding-top: 0.9rem;
	border-top: 1px solid var(--color-border);
	font-size: 0.92rem;
	color: var(--color-text-muted);
}

/* CTA section */
section.cta {
	text-align: center;
	padding: 2rem 1.5rem;
	background:
		radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
		linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.00));
	box-shadow: var(--shadow-md);
}

section.cta h2 {
	justify-content: center;
	text-transform: none;
	letter-spacing: -0.02em;
	font-size: 1.2rem;
	color: var(--color-text);
}

section.cta h2::before {
	display: none;
}

.cta-actions {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1.1rem;
	flex-wrap: wrap;
}

/* Mobile */
@media (max-width: 768px) {
	.docs {
		padding: 3.5rem 1.25rem 4rem;
	}
	section {
		padding: 1.15rem 1.1rem;
	}
}
</style>
