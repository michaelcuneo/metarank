<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import { PricingTable } from 'svelte-clerk';
</script>

<div class="page-shell pricing">
	<section class="pricing-hero">
		<h1 class="page-title">Simple, usage-based pricing</h1>
		<p class="page-lead">
			Pay only for the SEO metadata you generate.
			No token math. No surprises.
		</p>
	</section>

	<PricingTable	/>

	<section class="pricing-usage">
		<h2>What counts as a request?</h2>
		<p>
			One request equals one article processed. Failed requests and retries are not billed.
		</p>
	</section>

	<section class="pricing-cta">
		<h2>Start generating SEO metadata today</h2>
		<p>Try MetaRank for free, then upgrade when you’re ready to ship.</p>
		<div class="cta-actions">
			<Button>Get started free</Button>
			<Button variant="ghost">View API docs</Button>
		</div>
	</section>
</div>

<style>
.pricing {
	max-width: 1100px;
	margin: 0 auto;
	padding: 4.5rem 2rem 5rem;
}

/* Hero */
.pricing-hero {
	text-align: center;
	margin-bottom: 3rem;
}

.pricing-hero h1 {
	margin: 0;
	font-size: clamp(2.1rem, 2.2vw + 1.3rem, 3rem);
	line-height: 1.06;
	letter-spacing: -0.03em;
	font-weight: 700;
}

.pricing-hero p {
	margin: 0.9rem auto 0;
	max-width: 60ch;
	color: var(--color-text-muted);
	font-size: 1rem;
	line-height: 1.65;
}

/* Usage explainer */
.pricing-usage {
	margin-top: 2.25rem;
	padding-top: 2rem;
	border-top: 1px solid var(--color-border);
}

.pricing-usage h2 {
	margin: 0 0 0.6rem;
	font-size: 1.05rem;
	font-weight: 600;
	color: var(--color-text);
}

.pricing-usage p {
	margin: 0;
	max-width: 70ch;
	line-height: 1.65;
	color: var(--color-text-muted);
}

/* Bottom CTA */
.pricing-cta {
	margin-top: 3rem;
	text-align: center;
	padding-top: 2rem;
	border-top: 1px solid var(--color-border);
}

.pricing-cta h2 {
	margin: 0;
	font-size: 1.3rem;
	font-weight: 600;
	letter-spacing: -0.02em;
}

.pricing-cta p {
	margin: 0.65rem auto 0;
	max-width: 60ch;
	color: var(--color-text-muted);
	line-height: 1.6;
}

.cta-actions {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1.25rem;
	flex-wrap: wrap;
}
</style>
