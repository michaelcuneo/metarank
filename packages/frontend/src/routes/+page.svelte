<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="landing">
	<header class="hero">
		<h1>SEO metadata that just works</h1>
		<p class="hero-sub">
			MetaRank generates clean, search-optimized SEO metadata from real content —
			using a single API call.
		</p>

		<div class="hero-actions">
			<Button size="lg">Try the generator</Button>
			<Button size="lg" variant="ghost">View API docs</Button>
		</div>
	</header>

	<section class="value">
		<div class="value-grid">
			<Card>
				<h3>One endpoint</h3>
				<p>
					Send your content. Get structured SEO metadata back.
					No configuration or prompt engineering required.
				</p>
			</Card>

			<Card>
				<h3>Predictable output</h3>
				<p>
					Deterministic JSON designed to be cached, stored,
					and safely shipped to production.
				</p>
			</Card>

			<Card>
				<h3>Built for developers</h3>
				<p>
					Designed for content platforms, headless CMS setups,
					and automated publishing workflows.
				</p>
			</Card>
		</div>
	</section>

	<section class="example">
		<Card>
			<div class="example-header">
				<span>Example</span>
			</div>
<pre>{`
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "searchIntent": "informational"
`}</pre>
		</Card>
	</section>

	<section class="cta">
		<h2>Start generating SEO metadata in minutes</h2>
		<p>
			Try MetaRank in the browser or integrate it directly using the API.
		</p>
		<div class="cta-actions">
			<Button>Get started free</Button>
			<Button variant="ghost">Read the docs</Button>
		</div>
	</section>
</div>

<style>
.landing {
	max-width: 1100px;
	margin: 0 auto;
	padding: 5rem 2.5rem;
	position: relative;
	isolation: isolate;
}

.landing::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	pointer-events: none;

	background:
		radial-gradient(900px 520px at 50% 0%, rgba(76, 141, 255, 0.22), transparent 60%),
		radial-gradient(760px 520px at 18% 24%, rgba(225, 29, 72, 0.10), transparent 58%),
		radial-gradient(760px 520px at 82% 26%, rgba(245, 158, 11, 0.10), transparent 58%);

	filter: blur(16px) saturate(1.06);
	opacity: 0.9;

	-webkit-mask-image: radial-gradient(
		farthest-side at 50% 25%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
	mask-image: radial-gradient(
		farthest-side at 50% 25%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
}

.hero {
	text-align: center;
	margin-bottom: 4.5rem;
	padding: 2.25rem 1.25rem 0;
}

.hero h1 {
	font-size: clamp(2.15rem, 2.4vw + 1.4rem, 3.1rem);
	line-height: 1.05;
	font-weight: 650;
	letter-spacing: -0.03em;
	margin: 0;
}

.hero-sub {
	margin-top: 0.9rem;
	font-size: clamp(1rem, 0.4vw + 0.95rem, 1.15rem);
	line-height: 1.55;
	color: var(--color-text-muted);
	max-width: 62ch;
	margin-left: auto;
	margin-right: auto;
}

.hero-actions {
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	gap: 0.9rem;
	flex-wrap: wrap;
}

.value {
	margin-bottom: 4.5rem;
}

.value-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1.25rem;
}

.value :global(.card),
.example :global(.card) {
	box-shadow: var(--shadow-sm);
	border: 1px solid var(--color-border);
}

.value h3 {
	font-size: 1rem;
	font-weight: 650;
	letter-spacing: -0.01em;
	margin: 0 0 0.55rem 0;
}

.value p {
	font-size: 0.92rem;
	color: var(--color-text-muted);
	line-height: 1.65;
	margin: 0;
}

.example {
	margin-bottom: 4.5rem;
}

.example :global(.card) {
	position: relative;
	overflow: hidden;
}

.example :global(.card)::before {
	content: '';
	position: absolute;
	inset: 0;
	background: radial-gradient(700px 220px at 30% 0%, rgba(76, 141, 255, 0.12), transparent 60%);
	pointer-events: none;
}

.example-header {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
	margin-bottom: 0.75rem;
}

.example-header::before {
	content: '';
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: var(--primary-bg);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.16);
}

pre {
	margin: 0;
	padding: 1rem 1.1rem;
	border-radius: var(--radius-lg);
	border: 1px solid rgba(255, 255, 255, 0.06);
	background: linear-gradient(
		180deg,
		rgba(15, 23, 42, 0.04),
		rgba(15, 23, 42, 0.02)
	);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	font-size: 0.8rem;
	line-height: 1.7;
	white-space: pre-wrap;
	word-break: break-word;
	color: var(--color-text);
}

@media (prefers-color-scheme: dark) {
	pre {
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.06),
			rgba(255, 255, 255, 0.03)
		);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
	}
}

.cta {
	text-align: center;
	padding: 3rem 1.5rem;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--color-border);
	background:
		radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
		linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.00));
	box-shadow: var(--shadow-md);
}

.cta h2 {
	font-size: clamp(1.35rem, 0.9vw + 1.1rem, 1.8rem);
	line-height: 1.15;
	font-weight: 650;
	letter-spacing: -0.02em;
	margin: 0;
}

.cta p {
	margin: 0.75rem auto 0;
	max-width: 62ch;
	color: var(--color-text-muted);
	line-height: 1.6;
}

.cta-actions {
	margin-top: 1.6rem;
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
		margin-bottom: 3.25rem;
		padding-top: 1.75rem;
	}
}
</style>
