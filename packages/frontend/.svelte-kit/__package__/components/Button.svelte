<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
	type Sizes = 'sm' | 'md' | 'lg';
	type ElementTag = 'button' | 'a';

	let {
		as = 'button',
		type = 'button',
		href,
		variant = 'primary' as Variant,
		size = 'md' as Sizes,
		disabled = false,
		class: className = '',
		children,
		...rest
	}: {
		as?: ElementTag;
		type?: 'button' | 'submit' | 'reset';
		href?: string;
		variant?: Variant;
		size?: Sizes;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
		[x: string]: any;
	} = $props();
</script>

<svelte:element
	this={as}
	class={`btn ${variant} ${size} ${className}`}
	type={as === 'button' ? type : undefined}
	href={as === 'a' ? href : undefined}
	disabled={as === 'button' ? disabled : undefined}
	aria-disabled={disabled}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		font-family: inherit;
		font-weight: 600;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;

		border-radius: var(--radius-sm);
		border: 1px solid transparent;

		cursor: pointer;
		user-select: none;

		transition:
			background-color 0.15s ease,
			border-color 0.15s ease,
			color 0.15s ease,
			box-shadow 0.15s ease;
	}

	.btn:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--ring-color);
	}

	.btn[aria-disabled='true'] {
		opacity: 0.55;
		cursor: not-allowed;
		pointer-events: none;
	}

	/* Primary */
	.primary {
		background: var(--primary-bg);
		color: var(--primary-text);
		border-color: var(--primary-bg);
	}

	.primary:hover {
		background: var(--primary-hover);
		border-color: var(--primary-hover);
	}

	/* Secondary */
	.secondary {
		background: var(--color-surface);
		color: var(--color-text);
		border-color: var(--color-border);
	}

	.secondary:hover {
		background: var(--color-elevated);
	}

	/* Ghost */
	.ghost {
		background: transparent;
		color: var(--ghost-text);
		border-color: transparent;
	}

	.ghost:hover {
		background: var(--ghost-bg-hover);
		color: var(--color-text);
	}

	/* Danger */
	.danger {
		background: var(--danger-bg);
		color: var(--danger-text);
		border-color: var(--danger-bg);
	}

	.danger:hover {
		background: var(--danger-hover);
		border-color: var(--danger-hover);
	}

	/* Sizes */
	.sm {
		min-height: 2rem;
		padding: 0.4rem 0.75rem;
		font-size: 0.75rem;
	}

	.md {
		min-height: 2.25rem;
		padding: 0.5rem 0.9rem;
		font-size: 0.875rem;
	}

	.lg {
		min-height: 2.75rem;
		padding: 0.7rem 1.15rem;
		font-size: 0.95rem;
	}
</style>