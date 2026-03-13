<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';
</script>

<DashboardPageHeader
	eyebrow="Dashboard"
	title="Billing"
	description="Review your current plan, usage allowance, and subscription details."
>
	{#snippet actions()}
		<Button>Manage billing</Button>
		<Button as="a" href="/pricing" variant="ghost">View plans</Button>
	{/snippet}
</DashboardPageHeader>

<Card>
	<h2 class="title">Billing details</h2>
	<p class="text">
		This page will show your active plan, subscription state, included usage, and billing actions once connected.
	</p>
</Card>

<style>
	.title {
		margin: 0 0 0.65rem;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.text {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}
</style>