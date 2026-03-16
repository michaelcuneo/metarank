<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { SignInButton } from 'svelte-clerk';

	let { data } = $props();
 </script>

<div class="page-shell landing">
	<header class="hero">
		<h1>SEO metadata that just works</h1>
		<p class="hero-sub">
			MetaRank generates clean, search-optimized SEO metadata from real content using a single API call.
		</p>
		<p class="hero-trust">
			Built for developers, content platforms, and publishing systems.
		</p>

		<div class="hero-actions">
			{#if data.auth.isSignedIn}
				<Button as="a" href="/dashboard/generate" size="lg">
					Try the generator
				</Button>
			{:else}
				<SignInButton class="clerk-user-button">
					Get started free
				</SignInButton>
			{/if}
			<Button as="a" href="/docs" size="lg" variant="ghost">
				View API docs
			</Button>
		</div>
	</header>

	<section class="value">
		<div class="value-grid">
			<Card>
				<h3>One endpoint</h3>
				<p>
					Send your content and get structured SEO metadata back. No configuration,
					no prompt engineering, and no extra tooling required.
				</p>
			</Card>

			<Card>
				<h3>Predictable output</h3>
				<p>
					Deterministic JSON designed to be cached, stored, and safely shipped to
					production systems.
				</p>
			</Card>

			<Card>
				<h3>Built for developers</h3>
				<p>
					Designed for content platforms, headless CMS setups, and automated
					publishing workflows.
				</p>
			</Card>
		</div>
	</section>

	<section class="example">
		<Card>
			<div class="example-header">Example response</div>
<pre>{`{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "searchIntent": "informational"
}`}</pre>
		</Card>
	</section>

	<section class="cta">
		<h2>Start generating SEO metadata in minutes</h2>
		<p>
			Try MetaRank in the browser or integrate it directly using the API.
		</p>
		<div class="cta-actions">
			{#if data.auth.isSignedIn}
				<Button as="a" href="/dashboard/generate" size="lg">
					Try the generator
				</Button>
			{:else}
				<SignInButton class="clerk-user-button">
					Get started free
				</SignInButton>
			{/if}
			<Button as="a" href="/docs" size="lg" variant="ghost">
				View API docs
			</Button>
		</div>
	</section>

	<section class="seo-pages">
		<div class="seo-inner">
			<div class="seo-header">
				<h2>SEO Tools for Developers</h2>
				<p>
					MetaRank helps developers and content platforms automate SEO metadata
					generation with a simple API.
				</p>

				<a class="tools-link" href="/seo-tools">View all SEO tools</a>

				<p class="seo-intro">
					MetaRank provides developer-friendly SEO tools including a meta title generator,
					meta description generator, and AI search intent classification API. 
					These tools help automate SEO metadata generation for modern content workflows.
				</p>
			</div>

			<div class="seo-grid">
				<a href="/meta-description-generator" class="seo-card">
					<h3>Meta Description Generator</h3>
					<p>
						Generate search-friendly meta descriptions from page content using
						the MetaRank API.
					</p>
				</a>

				<a href="/meta-title-generator" class="seo-card">
					<h3>Meta Title Generator</h3>
					<p>
						Create optimized meta titles automatically for articles,
						landing pages, and CMS content.
					</p>
				</a>

				<a href="/search-intent-api" class="seo-card">
					<h3>Search Intent API</h3>
					<p>
						Classify content as informational, commercial, transactional,
						or navigational using AI.
					</p>
				</a>

				<a href="/seo-metadata-api" class="seo-card">
					<h3>SEO Metadata API</h3>
					<p>
						Generate titles, descriptions, keywords, slugs, and intent in one
						structured API response.
					</p>
				</a>

				<a href="/ai-seo-api" class="seo-card">
					<h3>AI SEO API</h3>
					<p>
						Automate SEO metadata generation for CMS platforms,
						publishing tools, and developer workflows.
					</p>
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.landing {
		max-width: 1100px;
		margin: 0 auto;
		padding: 4.5rem 2rem;
	}

	.hero {
		text-align: center;
		margin-bottom: 4rem;
	}

	.hero h1 {
		font-size: clamp(2.2rem, 2.5vw + 1.3rem, 3rem);
		line-height: 1.05;
		font-weight: 700;
		letter-spacing: -0.03em;
		margin: 0;
	}

	.hero-sub {
		margin: 0.9rem auto 0;
		max-width: 60ch;
		font-size: 1rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.hero-actions {
		margin-top: 1.75rem;
		display: flex;
		justify-content: center;
		gap: 0.9rem;
		flex-wrap: wrap;
	}

	.hero-trust {
		margin-top: 1rem;
		font-size: 0.85rem;
		color: var(--color-text-subtle);
	}

	.value {
		margin-bottom: 4rem;
	}

	.value-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.value h3 {
		font-size: 1rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.value p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.example {
		margin-bottom: 4rem;
		max-width: 860px;
		margin-left: auto;
		margin-right: auto;
	}

	.example-header {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
		margin-bottom: 0.75rem;
	}

	pre {
		margin: 0;
		padding: 1rem;
		border-radius: var(--radius-md);
		background: var(--color-elevated);
		border: 1px solid var(--color-border);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.78rem;
		line-height: 1.7;
		white-space: pre-wrap;
		word-break: break-word;
		color: var(--color-text);
	}

	.cta {
		text-align: center;
		padding-top: 3rem;
		padding-bottom: 3rem;
		border-top: 1px solid var(--color-border);
	}

	.cta h2 {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.cta p {
		margin: 0.75rem auto 0;
		max-width: 60ch;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.cta-actions {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		gap: 0.9rem;
		flex-wrap: wrap;
	}

	.seo-pages {
		padding: 4rem 2rem;
		border-top: 1px solid var(--color-border);
	}

	.seo-inner {
		max-width: 1100px;
		margin: 0 auto;
	}

	.seo-header {
		margin-bottom: 2rem;
		max-width: 60ch;
	}

	.seo-header h2 {
		font-size: 1.6rem;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.seo-header p {
		margin: 0.7rem 0 0;
		color: var(--color-text-muted);
		line-height: 1.6;
	}

	.seo-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.seo-card {
		display: block;
		padding: 1.25rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		text-decoration: none;
		color: inherit;
		transition: all 0.15s ease;
	}

	.seo-card:hover {
		transform: translateY(-2px);
		border-color: var(--primary-bg);
	}

	.seo-card h3 {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.seo-card p {
		margin: 0.5rem 0 0;
		font-size: 0.88rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	@media (max-width: 900px) {
		.seo-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.landing {
			padding: 3.5rem 1.25rem;
		}

		.hero {
			margin-bottom: 3rem;
		}
	}
</style>