<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { PricingTable, SignInButton } from 'svelte-clerk';

	let { data } = $props();
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

:global(.cl-pricingTableCard) {
	background-color: var(--color-bg);
	border-color: var(--color-border);
}
:global(.cl-pricingTableCardHeader) {
	background-color: var(--color-surface);
	border-color: var(--color-border);
}
:global(.cl-pricingTableCardTitle) {
	color: var(--color-text);
}
:global(.cl-pricingTableCardBody) {
	background-color: var(--coior-bg);
	color: var(--color-text);
}
:global(.cl-badge) {
	background-color: var(--bg-accent);
	color: var(--text-accent);
	border-color: var(--border);
}
:global(.cl-pricingTableCardFee) {
	color: var(--text);
}
:global(.cl-pricingTableCardDescription) {
	color: var(--color-text-muted);
}
:global(.cl-pricingTableCardFeePeriodNotice) {
	color: var(--color-text-muted);
}
:global(.cl-pricingTableCard:hover) {
	border-color: var(--color-border);
	box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
}
:global(.cl-pricingTableCardFeaturesListItem) {
	border-top-color: var(--color-border);
	color: var(--text);
}
:global(.cl-pricingTableCardFeatures) {
	border-top-color: var(--color-border);
	background-color: var(--color-bg);
}
:global(.cl-pricingTableCardFeaturesListItemTitle) {
	color: var(--color-text);
}
:global(.cl-pricingTableCardFooter) {
	border-top-color: var(--color-border);
	background-color: var(--color-surface);
}
:global(.cl-pricingTableCardFooterNotice) {
	color: var(--color-text);
}
:global(svg) {
	color: var(--color-text) !important;
}
:global(.cl-pricingTableCardFooterButton) {
	background-color: var(--primary-bg);
	color: var(--primary-text);
}
:global(.cl-drawerContent) {
	z-index: 9999 !important;
}
</style>
