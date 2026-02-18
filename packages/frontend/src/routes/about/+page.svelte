<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="about">
	<header class="about-hero">
		<h1>About MetaRank</h1>
		<p class="lead">
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
		<h2>Who it’s for</h2>
		<p>
			MetaRank is built for developers, content teams, and platforms that
			need reliable SEO metadata at scale.
		</p>
		<ul>
			<li>Content platforms and headless CMS setups</li>
			<li>Static site generators</li>
			<li>Multi-site publishing workflows</li>
			<li>Teams who want SEO metadata to “just work”</li>
		</ul>
	</section>

	<section>
		<h2>What it’s not</h2>
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
			<a href="/generate">Try the generator</a>
			<a href="/docs">View the docs</a>
		</div>
	</Card>
</div>

<style>
.about {
	max-width: 1100px;
	margin: 0 auto;
	padding: 4.5rem 2.5rem 5rem;
	position: relative;
	isolation: isolate;
}

/* Subtle ambient header glow (matches landing vibe, no edges) */
.about::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	pointer-events: none;

	background:
		radial-gradient(900px 520px at 50% 0%, rgba(76, 141, 255, 0.18), transparent 62%),
		radial-gradient(760px 520px at 18% 18%, rgba(225, 29, 72, 0.08), transparent 60%),
		radial-gradient(760px 520px at 82% 18%, rgba(245, 158, 11, 0.08), transparent 60%);
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
.about-hero {
	margin-bottom: 2.5rem;
	padding-bottom: 1.75rem;
	border-bottom: 1px solid var(--color-border);
}

.about-hero h1 {
	margin: 0;
	font-size: clamp(2.1rem, 2.1vw + 1.3rem, 2.8rem);
	line-height: 1.06;
	letter-spacing: -0.03em;
	font-weight: 650;
}

.lead {
	font-size: clamp(1.05rem, 0.35vw + 1rem, 1.2rem);
	line-height: 1.6;
	color: var(--color-text-muted);
	margin-top: 0.85rem;
	max-width: 68ch;
}

/* Section layout: card-like blocks without changing markup */
section {
	margin: 1.25rem 0;
	padding: 1.35rem 1.35rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-2xl);
	background:
		linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.00));
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

/* tiny accent dot */
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

/* Lists: nicer bullets + spacing */
ul {
	list-style: none;
	padding-left: 0;
	margin: 0.75rem 0 0.85rem 0;
	color: var(--color-text-muted);
	display: grid;
	gap: 0.45rem;
	max-width: 72ch;
}

li {
	position: relative;
	padding-left: 1.35rem;
	margin: 0;
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

/* CTA card */
.cta {
	margin-top: 2.5rem;
	text-align: center;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--color-border);
	box-shadow: var(--shadow-md);
	background:
		radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
		linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.00));
}

@media (prefers-color-scheme: light) {
	.cta {
		background:
			radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
			linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.00));
	}
}

.cta h2 {
	margin: 0;
	font-size: 1.25rem;
	letter-spacing: -0.02em;
	font-weight: 700;
	text-transform: none;
	color: var(--color-text);
	justify-content: center;
}

.cta h2::before {
	display: none;
}

.cta p {
	margin: 0.6rem auto 0;
	color: var(--color-text-muted);
	max-width: 62ch;
}

/* CTA links styled like buttons (no markup change) */
.cta-actions {
	display: flex;
	justify-content: center;
	gap: 0.9rem;
	margin-top: 1.4rem;
	flex-wrap: wrap;
}

.cta-actions a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.45rem;
	padding: 0.7rem 1rem;
	border-radius: 999px;
	font-size: 0.9rem;
	font-weight: 600;
	text-decoration: none;
	transition:
		transform 0.18s ease,
		background-color 0.18s ease,
		border-color 0.18s ease,
		color 0.18s ease;
}

/* Primary CTA */
.cta-actions a:first-child {
	background: var(--primary-bg);
	color: var(--primary-text);
	border: 1px solid rgba(255, 255, 255, 0.06);
	box-shadow: var(--shadow-sm);
}

.cta-actions a:first-child:hover {
	transform: translateY(-1px);
	background: var(--primary-hover);
}

/* Secondary/ghost CTA */
.cta-actions a:last-child {
	background: rgba(255, 255, 255, 0.06);
	color: var(--color-text);
	border: 1px solid var(--color-border);
}

@media (prefers-color-scheme: light) {
	.cta-actions a:last-child {
		background: rgba(15, 23, 42, 0.04);
	}
}

.cta-actions a:last-child:hover {
	transform: translateY(-1px);
	border-color: rgba(76, 141, 255, 0.28);
	background: rgba(76, 141, 255, 0.10);
}

/* Mobile */
@media (max-width: 768px) {
	.about {
		padding: 3.5rem 1.25rem 4rem;
	}
	section {
		padding: 1.15rem 1.1rem;
	}
}
</style>
