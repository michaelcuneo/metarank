<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		eyebrow = '',
		title = '',
		description = '',
		actions
	}: {
		eyebrow?: string;
		title?: string;
		description?: string;
		actions?: Snippet;
	} = $props();
</script>

<div class="page-header">
	<div class="page-header-copy">
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}

		<h1 class="title">{title}</h1>

		{#if description}
			<p class="description">{description}</p>
		{/if}
	</div>

	{#if actions}
		<div class="actions">
			{@render actions()}
		</div>
	{/if}
</div>

<style>
	.page-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.page-header-copy {
		min-width: 0;
	}

	.eyebrow {
		margin: 0 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.title {
		margin: 0;
		font-size: 1.6rem;
		line-height: 1.1;
		letter-spacing: -0.03em;
		font-weight: 700;
		color: var(--color-text);
	}

	.description {
		margin: 0.65rem 0 0;
		max-width: 62ch;
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	@media (max-width: 768px) {
		.page-header {
			flex-direction: column;
		}

		.actions {
			justify-content: flex-start;
		}
	}
</style>