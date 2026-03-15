<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

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
				<Button as="a" href="/signup" size="lg">
					Get started free
				</Button>
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
				<Button as="a" href="/signup" size="lg">
					Get started free
				</Button>
			{/if}
			<Button as="a" href="/docs" size="lg" variant="ghost">
				View API docs
			</Button>
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

	@media (max-width: 768px) {
		.landing {
			padding: 3.5rem 1.25rem;
		}

		.hero {
			margin-bottom: 3rem;
		}
	}
</style>