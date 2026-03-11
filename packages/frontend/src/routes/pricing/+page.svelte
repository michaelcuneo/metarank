<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="pricing-page">
	<section class="pricing-hero">
		<h1>Simple, usage-based pricing</h1>
		<p>
			Pay only for the SEO metadata you generate.
			No token math. No surprises.
		</p>
	</section>

	<section class="pricing-tiers" aria-label="Pricing tiers">
		<Card class="tier">
			<div class="tier-top">
				<h3>Free</h3>
				<p class="tier-desc">For trying MetaRank and basic usage.</p>
			</div>

			<div class="price">
				<span class="amount">$0</span>
				<span class="period">/mo</span>
			</div>

			<p class="usage">25 requests / month</p>
			<p class="billing">No credit card required.</p>

			<ul class="features">
				<li>Generate UI</li>
				<li>Preview metadata</li>
				<li>Rate limited</li>
			</ul>

			<div class="tier-cta">
				<Button variant="secondary">Start free</Button>
			</div>
		</Card>

		<Card class="tier featured">
			<div class="tier-top">
				<h3>Pro</h3>
				<p class="tier-desc">For building and shipping with the API.</p>
			</div>

			<div class="price">
				<span class="amount">$19</span>
				<span class="period">/mo</span>
			</div>

			<p class="usage">500 requests / month</p>
			<p class="billing">$0.05 per additional request.</p>

			<ul class="features">
				<li>API access</li>
				<li>Generate UI</li>
				<li>Higher rate limits</li>
			</ul>

			<div class="tier-cta">
				<Button>Start free trial</Button>
			</div>
		</Card>

		<Card class="tier">
			<div class="tier-top">
				<h3>Team</h3>
				<p class="tier-desc">For teams and higher-volume production usage.</p>
			</div>

			<div class="price">
				<span class="amount">$79</span>
				<span class="period">/mo</span>
			</div>

			<p class="usage">5,000 requests / month</p>
			<p class="billing">$0.03 per additional request.</p>

			<ul class="features">
				<li>Team API keys</li>
				<li>Higher rate limits</li>
				<li>Priority support</li>
			</ul>

			<div class="tier-cta">
				<Button variant="secondary">Start trial</Button>
			</div>
		</Card>
	</section>

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
.pricing-page {
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

/* Grid */
.pricing-tiers {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.25rem;
	align-items: stretch;
}

/* Cards */
.tier {
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-lg);
	background: var(--color-surface);
	box-shadow: var(--shadow-sm);
}

.tier-top {
	display: grid;
	gap: 0.35rem;
}

.tier h3 {
	margin: 0;
	font-size: 1rem;
	font-weight: 600;
	color: var(--color-text);
}

.tier-desc {
	margin: 0;
	color: var(--color-text-muted);
	font-size: 0.9rem;
	line-height: 1.6;
}

/* Price */
.price {
	margin-top: 1rem;
	display: flex;
	align-items: baseline;
	gap: 0.35rem;
}

.amount {
	font-size: 2.5rem;
	line-height: 1;
	font-weight: 700;
	letter-spacing: -0.04em;
	color: var(--color-text);
}

.period {
	font-size: 0.95rem;
	font-weight: 500;
	color: var(--color-text-muted);
}

.usage {
	margin: 0.75rem 0 0;
	font-size: 0.9rem;
	color: var(--color-text);
}

.billing {
	margin: 0.35rem 0 0;
	color: var(--color-text-muted);
	font-size: 0.85rem;
	line-height: 1.5;
}

/* Features */
.features {
	margin: 1.1rem 0 0;
	padding-left: 1rem;
	display: grid;
	gap: 0.55rem;
	color: var(--color-text-muted);
}

.features li {
	line-height: 1.55;
}

/* CTA pinned */
.tier-cta {
	margin-top: auto;
	padding-top: 1.25rem;
}

.tier-cta :global(.btn) {
	width: 100%;
	justify-content: center;
}

/* Featured plan */
.tier.featured {
	border-color: color-mix(in srgb, var(--primary-bg) 30%, var(--color-border));
	box-shadow: var(--shadow-md);
	position: relative;
}

.tier.featured::before {
	content: 'Most popular';
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 0.7rem;
	font-weight: 600;
	color: var(--primary-bg);
	background: color-mix(in srgb, var(--primary-bg) 10%, transparent);
	border: 1px solid color-mix(in srgb, var(--primary-bg) 20%, transparent);
	padding: 0.25rem 0.5rem;
	border-radius: 999px;
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

/* Mobile */
@media (max-width: 768px) {
	.pricing-page {
		padding: 3.5rem 1.25rem 4rem;
	}

	.pricing-tiers {
		grid-template-columns: 1fr;
	}
}</style>
