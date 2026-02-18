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
	padding: 4.75rem 2.5rem 5rem;
	position: relative;
	isolation: isolate;
}

/* Ambient header glow (edge-free) */
.pricing-page::before {
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
.pricing-hero {
	text-align: center;
	margin-bottom: 2.75rem;
	padding-bottom: 1.75rem;
	border-bottom: 1px solid var(--color-border);
}

.pricing-hero h1 {
	margin: 0;
	font-size: clamp(2.15rem, 2.2vw + 1.35rem, 3rem);
	line-height: 1.06;
	letter-spacing: -0.03em;
	font-weight: 650;
}

.pricing-hero p {
	margin: 0.9rem auto 0;
	max-width: 62ch;
	color: var(--color-text-muted);
	font-size: clamp(1.05rem, 0.35vw + 1rem, 1.18rem);
	line-height: 1.6;
}

/* Grid */
.pricing-tiers {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	gap: 1.25rem;
	align-items: stretch;
	margin-top: 2rem;
}

/* Professional pricing card */
.tier {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1.45rem 1.45rem 1.35rem;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--color-border);
	background: var(--color-surface);
	box-shadow: var(--shadow-sm);
	transition:
		transform 0.18s ease,
		box-shadow 0.18s ease,
		border-color 0.18s ease;
}

.tier:hover {
	transform: translateY(-2px);
	box-shadow: var(--shadow-md);
	border-color: rgba(76, 141, 255, 0.22);
}

.tier-top {
	display: grid;
	gap: 0.35rem;
}

.tier h3 {
	margin: 0;
	font-size: 0.95rem;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
}

.tier-desc {
	margin: 0;
	color: var(--color-text-muted);
	font-size: 0.95rem;
	line-height: 1.55;
	max-width: 44ch;
}

/* Price lockup */
.price {
	margin-top: 0.9rem;
	display: flex;
	align-items: baseline;
	gap: 0.4rem;
}

.amount {
	font-size: 2.75rem;
	line-height: 1;
	font-weight: 800;
	letter-spacing: -0.05em;
	color: var(--color-text);
}

.period {
	font-size: 1rem;
	font-weight: 650;
	color: var(--color-text-muted);
}

/* Usage pill + billing line */
.usage {
	margin: 0.65rem 0 0;
	display: inline-flex;
	width: fit-content;
	padding: 0.35rem 0.6rem;
	border-radius: 999px;
	border: 1px solid var(--color-border);
	background: rgba(255, 255, 255, 0.06);
	color: var(--color-text-muted);
	font-size: 0.88rem;
}

@media (prefers-color-scheme: light) {
	.usage { background: rgba(15, 23, 42, 0.04); }
}

.billing {
	margin: 0.55rem 0 0;
	color: var(--color-text-muted);
	font-size: 0.9rem;
	line-height: 1.5;
}

/* Features */
.features {
	margin: 1.15rem 0 0;
	padding: 0;
	list-style: none;
	display: grid;
	gap: 0.6rem;
}

.features li {
	position: relative;
	padding-left: 1.7rem;
	color: var(--color-text-muted);
	line-height: 1.55;
}

.features li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0.72em;
	transform: translateY(-50%);
	width: 18px;
	height: 18px;
	border-radius: 999px;
	background: rgba(76, 141, 255, 0.16);
	border: 1px solid rgba(76, 141, 255, 0.28);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.10);
}

.features li::after {
	content: '✓';
	position: absolute;
	left: 4px;
	top: 0.72em;
	transform: translateY(-55%);
	font-size: 0.82rem;
	font-weight: 900;
	color: rgba(76, 141, 255, 0.95);
}

/* CTA pinned at bottom */
.tier-cta {
	margin-top: auto;
	padding-top: 1.15rem;
}

.tier-cta :global(button) {
	width: 100%;
	justify-content: center;
}

/* Featured */
.tier.featured {
	border-color: rgba(76, 141, 255, 0.35);
	box-shadow: var(--shadow-md);
	background:
		radial-gradient(900px 280px at 50% 0%, rgba(76, 141, 255, 0.16), transparent 60%),
		var(--color-surface);
}

.tier.featured::before {
	content: 'Most popular';
	position: absolute;
	top: 14px;
	right: 14px;
	padding: 0.35rem 0.6rem;
	border-radius: 999px;
	font-size: 0.72rem;
	font-weight: 900;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--color-text);
	background: rgba(76, 141, 255, 0.16);
	border: 1px solid rgba(76, 141, 255, 0.28);
}

.tier.featured:hover {
	transform: translateY(-3px);
	border-color: rgba(76, 141, 255, 0.45);
}

/* Usage explainer block */
.pricing-usage {
	margin-top: 2.25rem;
	padding: 1.35rem 1.35rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-2xl);
	background: rgba(255, 255, 255, 0.04);
	box-shadow: var(--shadow-sm);
}

@media (prefers-color-scheme: light) {
	.pricing-usage { background: rgba(15, 23, 42, 0.02); }
}

.pricing-usage h2 {
	margin: 0 0 0.6rem 0;
	font-size: 0.95rem;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
}

.pricing-usage p {
	margin: 0;
	color: var(--color-text-muted);
	line-height: 1.65;
	max-width: 72ch;
}

/* Bottom CTA */
.pricing-cta {
	margin-top: 2.5rem;
	text-align: center;
	padding: 2rem 1.5rem;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--color-border);
	background:
		radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
		linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.00));
	box-shadow: var(--shadow-md);
}

@media (prefers-color-scheme: light) {
	.pricing-cta {
		background:
			radial-gradient(900px 260px at 50% 0%, rgba(76, 141, 255, 0.14), transparent 60%),
			linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.00));
	}
}

.pricing-cta h2 {
	margin: 0;
	font-size: 1.25rem;
	font-weight: 750;
	letter-spacing: -0.02em;
}

.pricing-cta p {
	margin: 0.65rem auto 0;
	max-width: 62ch;
	color: var(--color-text-muted);
	line-height: 1.6;
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
	.pricing-page {
		padding: 3.5rem 1.25rem 4rem;
	}
	.pricing-tiers {
		grid-template-columns: 1fr;
	}
}
</style>
