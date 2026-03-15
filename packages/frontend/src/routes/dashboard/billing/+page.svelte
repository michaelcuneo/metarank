<script lang="ts">
	import { PricingTable } from 'svelte-clerk';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';
</script>

<DashboardPageHeader
	eyebrow="Dashboard"
	title="Billing"
	description="Review your current plan, usage allowance, and subscription details."
>
</DashboardPageHeader>

<PricingTable	/>

<style>
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