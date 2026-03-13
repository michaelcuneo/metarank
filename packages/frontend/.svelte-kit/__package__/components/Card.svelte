<script lang="ts">
	import type { Snippet } from 'svelte';

	type ElementTag = 'div' | 'section' | 'article';

	let {
		as = 'div',
		class: className = '',
		children,
		...rest
	}: {
		as?: ElementTag;
		class?: string;
		children?: Snippet;
		[x: string]: any;
	} = $props();
</script>

<svelte:element
	this={as}
	role="group"
	class={`card ${className}`}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.card {
		position: relative;
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		box-shadow: var(--shadow-sm);
		transition:
			background-color 0.15s ease,
			border-color 0.15s ease,
			box-shadow 0.15s ease;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 1px;
		right: 1px;
		height: 1px;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
		background: rgba(255, 255, 255, 0.55);
		pointer-events: none;
	}

	.card:hover {
		border-color: color-mix(in srgb, var(--color-border) 70%, var(--primary-bg));
	}

	.card:focus-within {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
	}

	@media (prefers-color-scheme: dark) {
		.card::before {
			background: rgba(255, 255, 255, 0.06);
		}
	}
</style>