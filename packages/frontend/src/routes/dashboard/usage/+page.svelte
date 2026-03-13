<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';
</script>

<DashboardPageHeader
	eyebrow="Dashboard"
	title="Usage"
	description="Track requests, monitor limits, and understand monthly activity across your account."
>
	{#snippet actions()}
		<Button as="a" href="/pricing" variant="secondary">View pricing</Button>
	{/snippet}
</DashboardPageHeader>

<Card>
	<h2 class="title">Usage details</h2>
	<p class="text">
		This page will show request totals, monthly history, and plan limits once usage data is wired in.
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