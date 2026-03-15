<script lang="ts">
	import { onMount } from 'svelte';

	type StatusResponse = {
		ok: boolean;
		status: 'operational' | 'degraded' | 'offline';
		timestamp?: string | null;
	};

	let loading = $state(true);
	let status = $state<StatusResponse>({
		ok: false,
		status: 'offline'
	});

	async function loadStatus() {
		try {
			const res = await fetch('/api/status');
			const data = (await res.json()) as StatusResponse;
			status = data;
		} catch {
			status = {
				ok: false,
				status: 'offline'
			};
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadStatus();

		const interval = setInterval(loadStatus, 30000);
		return () => clearInterval(interval);
	});
</script>

<div class="status" aria-live="polite">
	<span
		class="dot"
		class:operational={status.status === 'operational'}
		class:degraded={status.status === 'degraded'}
		class:offline={status.status === 'offline'}
	></span>

	<span class="label">
		{#if loading}
			Checking API
		{:else if status.status === 'operational'}
			API operational
		{:else if status.status === 'degraded'}
			API degraded
		{:else}
			API offline
		{/if}
	</span>
</div>

<style>
	.status {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--color-text-subtle);
	}

	.dot.operational {
		background: #16a34a;
	}

	.dot.degraded {
		background: #f59e0b;
	}

	.dot.offline {
		background: #dc2626;
	}

	.label {
		line-height: 1;
	}
</style>