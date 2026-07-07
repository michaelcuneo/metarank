<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';

	let { data } = $props<{
		data: {
			usage: {
				period: string;
				requestsUsed: number;
				requestsLimit: number | null;
				plan: 'free_user' | 'pro' | 'team' | 'unlimited';
				usageType: 'metered' | 'unlimited';
			};
			history: {
				period: string;
				requestCount: number;
			}[];
		};
	}>();

	function formatPlan(plan: string) {
		switch (plan) {
			case 'unlimited':
				return 'Unlimited';
			case 'free_user':
				return 'Free';
			case 'pro':
				return 'Pro';
			case 'team':
				return 'Team';
			default:
				return plan;
		}
	}

	function formatMonth(period: string) {
		const [year, month] = period.split('-').map(Number);

		const date = new Date(Date.UTC(year, month - 1, 1));

		return date.toLocaleDateString(undefined, {
			month: 'short'
		});
	}

	const usagePercent = $derived(
		data.usage.usageType === 'unlimited'
			? 100
			: Math.min(
					100,
					Math.round(
						(data.usage.requestsUsed / Math.max(data.usage.requestsLimit ?? 1, 1)) * 100
					)
				)
	);

	const limitLabel = $derived(
		data.usage.usageType === 'unlimited' ? 'Unlimited' : String(data.usage.requestsLimit)
	);

	const maxUsage = $derived(
		Math.max(...data.history.map((m: { period: string; requestCount: number }) => m.requestCount), 1)
	);
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

<section class="stats">
	<Card>
		<p class="label">Current plan</p>
		<p class="value">{formatPlan(data.usage.plan)}</p>
	</Card>

	<Card>
		<p class="label">Requests used</p>
		<p class="value">{data.usage.requestsUsed}</p>
	</Card>

	<Card>
		<p class="label">Monthly limit</p>
		<p class="value">{limitLabel}</p>
	</Card>

	<Card>
		<p class="label">Usage</p>
		<p class="value">{usagePercent}%</p>
	</Card>
</section>

<Card class="usage-panel">
	<div class="panel-header">
		<h2>Monthly usage</h2>
		<p class="panel-sub">
			Request totals for recent billing periods.
		</p>
	</div>

	<div class="progress">
		<div class="bar">
			<div class="fill" style={`width:${usagePercent}%`}></div>
		</div>

		<div class="meta">
			<span>{data.usage.requestsUsed} used</span>
			<span>{limitLabel} limit</span>
		</div>
	</div>

	<div class="chart">
		{#each data.history as item}
			<div class="bar-group">
				<div
					class="bar-item"
					style={`height:${Math.max(
						12,
						(item.requestCount / maxUsage) * 160
					)}px`}
				></div>

				<span class="bar-label">
					{formatMonth(item.period)}
				</span>
			</div>
		{/each}
	</div>
</Card>

<style>
	.stats {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-text-subtle);
		margin: 0;
	}

	.value {
		font-size: 1.4rem;
		font-weight: 700;
		margin: 0;
		color: var(--color-text);
	}

	.panel-header h2 {
		margin: 0;
		font-size: 1rem;
	}

	.panel-sub {
		margin: 0.4rem 0 1rem;
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.progress {
		margin-bottom: 1.5rem;
	}

	.bar {
		height: 10px;
		border-radius: 999px;
		background: var(--color-elevated);
		border: 1px solid var(--color-border);
		overflow: hidden;
	}

	.fill {
		height: 100%;
		background: var(--primary-bg);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		margin-top: 0.4rem;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.chart {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
		gap: 0.75rem;
		align-items: end;
		height: 180px;
	}

	.bar-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.bar-item {
		width: 100%;
		max-width: 24px;
		border-radius: 4px;
		background: var(--primary-bg);
	}

	.bar-label {
		font-size: 0.75rem;
		color: var(--color-text-subtle);
	}

	@media (max-width: 900px) {
		.stats {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>