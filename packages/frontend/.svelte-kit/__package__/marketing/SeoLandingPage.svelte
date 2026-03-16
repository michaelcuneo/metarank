<script lang="ts">
	import Button from '../components/Button.svelte';
	import Card from '../components/Card.svelte';
	
	let { content } = $props<{
		content: SeoLandingPageContent;
	}>();
</script>

<svelte:head>
	<title>{content.metaTitle}</title>
	<meta name="description" content={content.metaDescription} />
	<link rel="canonical" href={`https://metarank.dev/${content.slug}`} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://metarank.dev/${content.slug}`} />
	<meta property="og:title" content={content.metaTitle} />
	<meta property="og:description" content={content.metaDescription} />
	<meta property="og:image" content="%sveltekit.assets%/og/metarank.png" />
	<meta property="og:site_name" content="MetaRank" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={content.metaTitle} />
	<meta name="twitter:description" content={content.metaDescription} />
	<meta name="twitter:image" content="%sveltekit.assets%/og/metarank.png" />
</svelte:head>

<div class="landing-page">
	<section class="hero">
		<div class="hero-copy">
			<p class="eyebrow">{content.eyebrow}</p>
			<h1>{content.heroTitle}</h1>
			<p class="hero-description">{content.heroDescription}</p>

			<div class="hero-actions">
				<Button as="a" href={content.primaryCta.href}>
					{content.primaryCta.label}
				</Button>

				<Button as="a" href={content.secondaryCta.href} variant="ghost">
					{content.secondaryCta.label}
				</Button>
			</div>
		</div>

		<Card class="hero-card">
			<h2 class="card-title">Why teams use MetaRank</h2>

			<ul class="benefit-list">
				{#each content.benefits as benefit}
					<li>{benefit}</li>
				{/each}
			</ul>
		</Card>
	</section>

	<section class="section">
		<div class="section-header">
			<h2>Built for real production workflows</h2>
			<p>
				MetaRank helps developers, CMS platforms, publishing tools, and SEO teams
				automate metadata generation without fragile prompts or manual copywriting.
			</p>
		</div>

		<div class="use-cases">
			{#each content.useCases as useCase}
				<Card>
					<h3>{useCase.title}</h3>
					<p>{useCase.description}</p>
				</Card>
			{/each}
		</div>
	</section>

	<section class="section">
		<div class="section-header">
			<h2>{content.codeExample.title}</h2>
			<p>
				Use the MetaRank API directly from your app, CMS, editorial workflow, or automation pipeline.
			</p>
		</div>

		<Card class="code-card">
			<pre><code>{content.codeExample.code}</code></pre>
		</Card>
	</section>

	<section class="section">
		<div class="section-header">
			<h2>Frequently asked questions</h2>
			<p>
				Common questions for teams evaluating MetaRank for automated SEO metadata generation.
			</p>
		</div>

		<div class="faq-list">
			{#each content.faqs as faq}
				<Card>
					<h3>{faq.question}</h3>
					<p>{faq.answer}</p>
				</Card>
			{/each}
		</div>
	</section>

	<section class="cta-section">
		<Card class="cta-card">
			<h2>Start generating SEO metadata with MetaRank</h2>
			<p>
				Test the API in the dashboard, create a key, and ship cleaner metadata across your product.
			</p>

			<div class="hero-actions">
				<Button as="a" href="/dashboard/generate">Open generator</Button>
				<Button as="a" href="/pricing" variant="secondary">View pricing</Button>
			</div>
		</Card>
	</section>
</div>

<style>
	.landing-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem 2rem 5rem;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
		gap: 1.25rem;
		align-items: stretch;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--primary-bg);
	}

	h1 {
		margin: 0;
		font-size: clamp(2.4rem, 5vw, 4.4rem);
		line-height: 1.02;
		letter-spacing: -0.03em;
		color: var(--color-text);
		max-width: 12ch;
	}

	.hero-description {
		margin: 1rem 0 0;
		max-width: 62ch;
		font-size: 1.02rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	:global(hero-card) {
		min-height: 100%;
	}

	.card-title,
	h2,
	h3 {
		margin: 0;
		color: var(--color-text);
	}

	.benefit-list {
		margin: 1rem 0 0;
		padding-left: 1.1rem;
		display: grid;
		gap: 0.7rem;
		color: var(--color-text-muted);
		line-height: 1.6;
	}

	.section {
		margin-top: 1.25rem;
	}

	.section-header {
		margin-bottom: 1rem;
		max-width: 70ch;
	}

	.section-header h2 {
		font-size: 1.5rem;
		letter-spacing: -0.02em;
	}

	.section-header p {
		margin: 0.75rem 0 0;
		font-size: 0.98rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.use-cases,
	.faq-list {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.use-cases :global(.card),
	.faq-list :global(.card) {
		min-height: 100%;
	}

	.use-cases h3,
	.faq-list h3 {
		font-size: 1rem;
		font-weight: 600;
	}

	.use-cases p,
	.faq-list p {
		margin: 0.7rem 0 0;
		font-size: 0.94rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	:global(.code-card pre) {
		margin: 0;
		padding: 1rem;
		overflow-x: auto;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.84rem;
		line-height: 1.7;
		color: var(--color-text);
		background: transparent;
	}

	.cta-section {
		margin-top: 1.25rem;
	}

	:global(.cta-card h2) {
		font-size: 1.6rem;
		letter-spacing: -0.02em;
	}

	:global(.cta-card p) {
		margin: 0.75rem 0 0;
		max-width: 60ch;
		font-size: 0.98rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	@media (max-width: 980px) {
		.hero,
		.use-cases,
		.faq-list {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.landing-page {
			padding: 2rem 1.25rem 4rem;
		}
	}
</style>