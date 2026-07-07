<script lang="ts">
	import { page } from '$app/stores';
	import ApiStatus from '$lib/components/ApiStatus.svelte';

	type Usage = {
		period: string;
		requestsUsed: number;
		requestsLimit: number | null;
		plan: 'free_user' | 'pro' | 'team' | 'unlimited';
		usageType: 'metered' | 'unlimited';
	};

	let { data, children } = $props<{
		data: {
			userId: string;
			usage: Usage;
		};
		children: import('svelte').Snippet;
	}>();

	const nav = [
		{ href: '/dashboard/generate', label: 'Generate' },
		{ href: '/dashboard', label: 'Overview' },
		{ href: '/dashboard/usage', label: 'Usage' },
		{ href: '/dashboard/api-keys', label: 'API Keys' },
		{ href: '/dashboard/billing', label: 'Billing' }
	];

	function isActive(pathname: string, href: string): boolean {
		if (href === '/dashboard') {
			return pathname === '/dashboard';
		}

		return pathname.startsWith(href);
	}

	function getSectionLabel(pathname: string): string | null {
		if (pathname === '/dashboard') {
			return null;
		}

		const section = pathname.split('/')[2] ?? '';
		return section.replace(/-/g, ' ');
	}

	function formatPlan(plan: Usage['plan']) {
		switch (plan) {
			case 'unlimited':
				return 'Unlimited';
			case 'pro':
				return 'Pro';
			case 'team':
				return 'Team';
			default:
				return 'Free';
		}
	}

	const hasUnlimitedUsage = $derived(data.usage.usageType === 'unlimited');

	const usagePercent = $derived(
		hasUnlimitedUsage
			? 100
			: Math.min(
					100,
					Math.round((data.usage.requestsUsed / Math.max(data.usage.requestsLimit ?? 1, 1)) * 100)
				)
	);

	const usageMeta = $derived(
		hasUnlimitedUsage
			? `${data.usage.requestsUsed} requests this month (unlimited)`
			: `${data.usage.requestsUsed} / ${data.usage.requestsLimit} requests`
	);
</script>

<div class="dashboard-layout">
	<aside class="sidebar">
		<div class="sidebar-inner">
			<div class="sidebar-header">
				<a href="/dashboard" class="brand">MetaRank</a>
				<p class="brand-sub">Dashboard</p>
			</div>

			<nav class="nav">
				{#each nav as item}
					<a
						href={item.href}
						class="nav-link"
						class:active={isActive($page.url.pathname, item.href)}
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="sidebar-usage">
				<div class="usage-head">
					<p class="usage-label">Usage</p>
					<span class="usage-plan">{formatPlan(data.usage.plan)}</span>
				</div>

				<div class="usage-bar">
					<div class="usage-fill" style={`width: ${usagePercent}%`}></div>
				</div>

				<p class="usage-meta">
					{usageMeta}
				</p>
			</div>

			<div class="sidebar-status">
				<p class="usage-label">Service status</p>
				<p class="usage-meta"><ApiStatus /></p>
			</div>
		</div>
	</aside>

	<main class="content">
		<div class="breadcrumb">
			<span>Dashboard</span>

			{#if getSectionLabel($page.url.pathname)}
				<span class="sep">/</span>
				<span class="section">{getSectionLabel($page.url.pathname)}</span>
			{/if}
		</div>

		{@render children()}
	</main>
</div>

<style>
	.dashboard-layout {
		display: grid;
		grid-template-columns: 240px 1fr;
		min-height: calc(100vh - 64px);
	}

	.sidebar {
		border-right: 1px solid var(--color-border);
		background: var(--color-surface);
	}

	.sidebar-inner {
		padding: 1.5rem 1rem;
		position: sticky;
		top: 72px;
	}

	.sidebar-header {
		margin-bottom: 1.75rem;
	}

	.brand {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--color-text);
		text-decoration: none;
	}

	.brand-sub {
		margin: 0.25rem 0 0;
		font-size: 0.75rem;
		color: var(--color-text-subtle);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.nav {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.nav-link {
		display: block;
		padding: 0.55rem 0.65rem;
		border-radius: var(--radius-sm);
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--color-text-muted);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
	}

	.nav-link:hover {
		background: var(--color-elevated);
		color: var(--color-text);
	}

	.nav-link.active {
		background: var(--color-elevated);
		color: var(--color-text);
		font-weight: 600;
	}

	.sidebar-usage {
		margin-top: 2rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-border);
	}

	.sidebar-status {
		margin-top: 2rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-border);
	}

	.usage-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 0.45rem;
	}

	.usage-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-subtle);
		margin: 0;
	}

	.usage-plan {
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	.usage-bar {
		height: 6px;
		border-radius: 999px;
		background: var(--color-elevated);
		overflow: hidden;
		border: 1px solid var(--color-border);
	}

	.usage-fill {
		height: 100%;
		background: var(--primary-bg);
	}

	.usage-meta {
		font-size: 0.75rem;
		margin-top: 0.4rem;
		color: var(--color-text-muted);
	}

	.content {
		padding: 0 2rem 4rem;
		min-width: 0;
	}

	.breadcrumb {
		font-size: 0.75rem;
		color: var(--color-text-subtle);
		letter-spacing: 0.04em;
		margin: 1.5rem 0 0.85rem;
		text-transform: capitalize;
	}

	.sep {
		margin: 0 0.35rem;
		opacity: 0.5;
	}

	.section {
		color: var(--color-text-muted);
	}

	@media (max-width: 900px) {
		.dashboard-layout {
			grid-template-columns: 1fr;
		}

		.sidebar {
			border-right: none;
			border-bottom: 1px solid var(--color-border);
		}

		.sidebar-inner {
			position: static;
			padding: 1rem 1.25rem;
		}

		.nav {
			flex-direction: row;
			gap: 0.5rem;
			flex-wrap: wrap;
		}

		.sidebar-usage {
			margin-top: 1.25rem;
		}

		.content {
			padding: 0 1.25rem 3rem;
		}
	}
</style>