<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from './DashboardPageHeader.svelte';

	type Account = {
		userId: string;
		email: string | null;
		firstName: string | null;
		lastName: string | null;
		imageUrl: string | null;
		plan: 'free_user' | 'pro' | 'team';
		status: 'active' | 'suspended';
		requestsUsed: number;
		requestsLimit: number;
		createdAt: number;
		updatedAt: number;
	};

	type Usage = {
		period: string;
		requestsUsed: number;
		requestsLimit: number;
		plan: 'free_user' | 'pro' | 'team';
	};

	type ApiKey = {
		keyId: string;
		name: string;
		prefix: string;
		createdAt: number;
		revoked: boolean;
	};

	type Billing = {
		userId: string;
		plan: 'free_user' | 'pro' | 'team';
		status: string;
		requestsLimit: number | null;
		stripeCustomerId: string | null;
		stripeSubscriptionId: string | null;
	};

	let { data } = $props<{
		data: {
			account: Account;
			usage: Usage;
			keys: ApiKey[];
			billing: Billing;
		};
	}>();

	function formatPlan(plan: string): string {
		switch (plan) {
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

	function formatBillingStatus(billing: Billing): string {
		if (billing.plan === 'free_user') {
			return 'No active subscription';
		}

		if (billing.status) {
			return billing.status;
		}

		return 'Active subscription';
	}

	function getNextResetLabel(period: string): string {
		const [year, month] = period.split('-').map(Number);

		if (!year || !month) {
			return 'Next month';
		}

		const next = new Date(Date.UTC(year, month, 1));
		return next.toLocaleDateString(undefined, {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}

	function formatDate(timestamp: number): string {
		return new Date(timestamp).toLocaleDateString(undefined, {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}

	const planName = $derived(formatPlan(data.account.plan));
	const billingStatus = $derived(formatBillingStatus(data.billing));
	const requestsUsed = $derived(data.usage.requestsUsed);
	const requestsLimit = $derived(data.usage.requestsLimit);
	const usagePercent = $derived(
		Math.min(100, Math.round((requestsUsed / Math.max(requestsLimit, 1)) * 100))
	);
	const activeKeys = $derived(data.keys.filter((key: ApiKey) => !key.revoked));
	const recentKeys = $derived(data.keys.slice(0, 5));
	const nextReset = $derived(getNextResetLabel(data.usage.period));

	type UsagePoint = {
		label: string;
		requests: number;
	};

	const usageHistory: UsagePoint[] = $derived([
		{
			label: data.usage.period,
			requests: data.usage.requestsUsed
		}
	]);

	const maxUsage = $derived(Math.max(...usageHistory.map((item) => item.requests), 1));
</script>

<svelte:head>
	<title>Dashboard — MetaRank</title>
	<meta
		name="description"
		content="Monitor usage, API keys, billing, and account activity in the MetaRank dashboard."
	/>
</svelte:head>

<div class="dashboard-page">
	<DashboardPageHeader
		eyebrow="Dashboard"
		title="Overview"
		description="Monitor usage, manage API keys, and keep track of your MetaRank account."
	>
		{#snippet actions()}
			<Button as="a" href="/dashboard/generate">Open generator</Button>
			<Button as="a" href="/docs" variant="ghost">View docs</Button>
		{/snippet}
	</DashboardPageHeader>

	<section class="stats-grid">
		<Card>
			<p class="stat-label">Current plan</p>
			<p class="stat-value">{planName}</p>
			<p class="stat-meta">{billingStatus}</p>
		</Card>

		<Card>
			<p class="stat-label">Monthly usage</p>
			<p class="stat-value">{requestsUsed} / {requestsLimit}</p>
			<p class="stat-meta">{usagePercent}% of monthly allowance used</p>
		</Card>

		<Card>
			<p class="stat-label">Active API keys</p>
			<p class="stat-value">{activeKeys.length}</p>
			<p class="stat-meta">
				{#if activeKeys.length === 0}
					No active keys yet
				{:else if activeKeys.length === 1}
					1 key available
				{:else}
					{activeKeys.length} keys available
				{/if}
			</p>
		</Card>

		<Card>
			<p class="stat-label">Usage reset</p>
			<p class="stat-value">{nextReset}</p>
			<p class="stat-meta">Monthly limits refresh automatically</p>
		</Card>
	</section>

	<section class="main-grid">
		<Card class="usage-panel">
			<div class="panel-header">
				<div>
					<h2 class="panel-title">Usage this month</h2>
					<p class="panel-subtitle">
						Track requests across your account and see how close you are to your limit.
					</p>
				</div>
				<Button as="a" href="/dashboard/usage" variant="ghost" size="sm">
					View usage
				</Button>
			</div>

			<div class="usage-progress">
				<div class="usage-progress-bar">
					<div class="usage-progress-fill" style={`width: ${usagePercent}%`}></div>
				</div>
				<div class="usage-progress-meta">
					<span>{requestsUsed} used</span>
					<span>{requestsLimit} limit</span>
				</div>
			</div>

			<div class="usage-chart" aria-label="Usage history">
				{#each usageHistory as item}
					<div class="usage-bar-group">
						<div
							class="usage-bar"
							style={`height: ${Math.max(12, (item.requests / maxUsage) * 140)}px`}
							aria-label={`${item.label}: ${item.requests} requests`}
						></div>
						<span class="usage-bar-label">{item.label}</span>
					</div>
				{/each}
			</div>
		</Card>

		<Card>
			<div class="panel-header">
				<div>
					<h2 class="panel-title">Quick actions</h2>
					<p class="panel-subtitle">
						Common account and developer tasks.
					</p>
				</div>
			</div>

			<div class="action-list">
				<a class="action-item" href="/generate">
					<div>
						<p class="action-title">Generate metadata</p>
						<p class="action-text">Test content in the browser-based generator.</p>
					</div>
					<span class="action-arrow">→</span>
				</a>

				<a class="action-item" href="/docs">
					<div>
						<p class="action-title">Read API docs</p>
						<p class="action-text">See request and response examples for the SEO endpoint.</p>
					</div>
					<span class="action-arrow">→</span>
				</a>

				<a class="action-item" href="/dashboard/api-keys">
					<div>
						<p class="action-title">Manage API keys</p>
						<p class="action-text">Create, revoke, and review your active keys.</p>
					</div>
					<span class="action-arrow">→</span>
				</a>

				<a class="action-item" href="/dashboard/billing">
					<div>
						<p class="action-title">Review billing</p>
						<p class="action-text">Check your current plan and upgrade when needed.</p>
					</div>
					<span class="action-arrow">→</span>
				</a>
			</div>
		</Card>
	</section>

	<section class="lower-grid">
		<Card>
			<div class="panel-header">
				<div>
					<h2 class="panel-title">Recent API keys</h2>
					<p class="panel-subtitle">
						Named keys make it easier to separate production and staging traffic.
					</p>
				</div>
				<Button as="a" href="/dashboard/api-keys" size="sm">Manage keys</Button>
			</div>

			{#if recentKeys.length === 0}
				<p class="empty-copy">No API keys created yet.</p>
			{:else}
				<div class="keys-table-wrap">
					<table class="keys-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Prefix</th>
								<th>Created</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{#each recentKeys as key}
								<tr>
									<td>{key.name}</td>
									<td><code>{key.prefix}</code></td>
									<td>{formatDate(key.createdAt)}</td>
									<td>
										<span class:revoked={key.revoked} class="status-badge">
											{key.revoked ? 'Revoked' : 'Active'}
										</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</Card>

		<Card>
			<div class="panel-header">
				<div>
					<h2 class="panel-title">Billing</h2>
					<p class="panel-subtitle">
						Your current account and subscription status.
					</p>
				</div>
				<Button as="a" href="/dashboard/billing" variant="ghost" size="sm">
					Open billing
				</Button>
			</div>

			<div class="billing-summary">
				<div class="billing-row">
					<span class="billing-label">Plan</span>
					<span class="billing-value">{planName}</span>
				</div>
				<div class="billing-row">
					<span class="billing-label">Status</span>
					<span class="billing-value">{billingStatus}</span>
				</div>
				<div class="billing-row">
					<span class="billing-label">Included requests</span>
					<span class="billing-value">{requestsLimit} / month</span>
				</div>
			</div>

			<div class="billing-actions">
				<Button as="a" href="/pricing" variant="secondary">View plans</Button>
				<Button as="a" href="/dashboard/billing">Manage billing</Button>
			</div>
		</Card>
	</section>
</div>

<style>
	.dashboard-page {
		padding-top: 0.25rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.stat-label {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.stat-value {
		margin: 0;
		font-size: 1.4rem;
		line-height: 1.1;
		font-weight: 700;
		color: var(--color-text);
	}

	.stat-meta {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.main-grid,
	.lower-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;
		margin-top: 1rem;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.panel-title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.panel-subtitle {
		margin: 0.45rem 0 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.usage-progress {
		margin-bottom: 1.25rem;
	}

	.usage-progress-bar {
		height: 0.75rem;
		border-radius: 999px;
		background: var(--color-elevated);
		border: 1px solid var(--color-border);
		overflow: hidden;
	}

	.usage-progress-fill {
		height: 100%;
		background: var(--primary-bg);
		border-radius: 999px;
	}

	.usage-progress-meta {
		display: flex;
		justify-content: space-between;
		margin-top: 0.55rem;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.usage-chart {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		align-items: end;
		gap: 0.75rem;
		min-height: 180px;
		padding-top: 0.5rem;
	}

	.usage-bar-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.55rem;
	}

	.usage-bar {
		width: 100%;
		max-width: 2.5rem;
		border-radius: var(--radius-sm);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--primary-bg) 100%, white 0%),
			color-mix(in srgb, var(--primary-bg) 72%, var(--color-bg) 28%)
		);
		border: 1px solid color-mix(in srgb, var(--primary-bg) 20%, transparent);
		min-height: 12px;
	}

	.usage-bar-label {
		font-size: 0.75rem;
		color: var(--color-text-subtle);
	}

	.action-list {
		display: grid;
		gap: 0.75rem;
	}

	.action-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-elevated);
		text-decoration: none;
		color: inherit;
		transition:
			border-color 0.15s ease,
			background-color 0.15s ease,
			transform 0.15s ease;
	}

	.action-item:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--primary-bg) 24%, var(--color-border));
	}

	.action-title {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.action-text {
		margin: 0.3rem 0 0;
		font-size: 0.85rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.action-arrow {
		font-size: 1rem;
		color: var(--color-text-subtle);
	}

	.keys-table-wrap {
		overflow-x: auto;
	}

	.keys-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.keys-table th,
	.keys-table td {
		padding: 0.8rem 0.75rem;
		text-align: left;
		border-bottom: 1px solid var(--color-border);
		vertical-align: middle;
	}

	.keys-table th {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.keys-table td {
		color: var(--color-text);
	}

	.keys-table code {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.84rem;
		color: var(--color-text-muted);
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		font-size: 0.76rem;
		font-weight: 600;
		background: color-mix(in srgb, var(--primary-bg) 10%, transparent);
		color: var(--primary-bg);
		border: 1px solid color-mix(in srgb, var(--primary-bg) 18%, transparent);
	}

	.status-badge.revoked {
		background: color-mix(in srgb, var(--danger-bg) 10%, transparent);
		color: var(--danger-bg);
		border-color: color-mix(in srgb, var(--danger-bg) 18%, transparent);
	}

	.billing-summary {
		display: grid;
		gap: 0.9rem;
		margin-bottom: 1.25rem;
	}

	.billing-row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--color-border);
	}

	.billing-label {
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.billing-value {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-text);
		text-align: right;
	}

	.billing-actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.empty-copy {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	@media (max-width: 980px) {
		.stats-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.main-grid,
		.lower-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>