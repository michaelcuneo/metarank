<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
</script>

<div class="page-shell about">
	<header class="about-hero">
		<h1 class="page-title">About MetaRank</h1>
		<p class="page-lead">
			MetaRank is a simple API for generating clean, search-optimized SEO metadata
			from real content.
		</p>
	</header>

	<section>
		<h2>Why MetaRank exists</h2>
		<p>
			SEO metadata is still mostly created by hand, copied between tools,
			or generated using brittle prompts that change every time a model updates.
		</p>
		<p>
			MetaRank exists to make SEO metadata predictable.
			You send content. You get structured metadata back.
			The output is consistent, deterministic, and safe to use in production.
		</p>
	</section>

	<section>
		<h2>What MetaRank does</h2>
		<p>
			MetaRank analyzes article content and returns SEO-ready metadata including:
		</p>
		<ul>
			<li>Meta titles and descriptions</li>
			<li>SEO-friendly slugs</li>
			<li>Keyword sets</li>
			<li>Search intent classification</li>
		</ul>
		<p>
			It works with Markdown, HTML, or plain text and requires no training,
			no configuration, and no prompt engineering.
		</p>
	</section>

	<section>
		<h2>Who it's for</h2>
		<p>
			MetaRank is built for developers, content teams, and platforms that
			need reliable SEO metadata at scale.
		</p>
		<ul>
			<li>Content platforms and headless CMS setups</li>
			<li>Static site generators</li>
			<li>Multi-site publishing workflows</li>
			<li>Teams who want SEO metadata to just work</li>
		</ul>
	</section>

	<section>
		<h2>What it's not</h2>
		<p>
			MetaRank is not a keyword research tool, a site auditor, or an SEO dashboard.
		</p>
		<p>
			It focuses on one job: generating high-quality SEO metadata from content,
			consistently and programmatically.
		</p>
	</section>

	<Card class="cta">
		<h2>Get started</h2>
		<p>
			You can try MetaRank directly in the browser or integrate it using the API.
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
	</Card>
</div>

<style>
	.about {
		max-width: 960px;
		margin: 0 auto;
		padding: 4.5rem 2rem 5rem;
	}

	.about-hero {
		margin-bottom: 3rem;
	}

	.about-hero h1 {
		margin: 0;
		font-size: clamp(2.1rem, 2.1vw + 1.3rem, 2.8rem);
		line-height: 1.06;
		letter-spacing: -0.03em;
		font-weight: 700;
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

	.cta-actions {
		display: flex;
		justify-content: center;
		gap: 0.9rem;
		margin-top: 1.25rem;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.about {
			padding: 3.5rem 1.25rem 4rem;
		}
	}
</style>