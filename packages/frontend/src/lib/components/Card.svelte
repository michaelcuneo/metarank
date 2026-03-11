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

	const Component = as;
</script>

<svelte:element
	this={Component}
	role="group"
	class={`card ${className}`}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.card {
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

	.card:hover {
		border-color: color-mix(in srgb, var(--color-border) 70%, var(--primary-bg));
	}

	.card:focus-within {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
	}
</style>