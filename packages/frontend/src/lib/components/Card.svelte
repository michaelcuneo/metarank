<script lang="ts">
	let {
		as = 'div',
		shadow = true,
		padding = 'md', // 'sm' | 'md' | 'lg'
		radius = 'xl',  // 'md' | 'lg' | 'xl' | '2xl'
		border = true,
		background = true,
		variant = 'default', // 'default' | 'elevated'
		children,
		...rest
	} = $props();

	const Component = as;

	const paddingClass =
		padding === 'sm' ? 'p-sm' :
		padding === 'lg' ? 'p-lg' : 'p-md';

	const radiusClass =
		radius === 'md' ? 'r-md' :
		radius === 'lg' ? 'r-lg' :
		radius === '2xl' ? 'r-2xl' : 'r-xl';
</script>

<svelte:element
	this={Component}
	role="group"
	class={`card ${paddingClass} ${radiusClass} ${shadow ? 'has-shadow' : ''} ${border ? 'has-border' : ''} ${background ? 'has-bg' : ''} ${variant === 'elevated' ? 'is-elevated' : ''}`}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.card {
		color: var(--color-text);
		margin: var(--space-md) 0;
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease,
			border-color 0.18s ease,
			background-color 0.18s ease;
		will-change: transform;
	}

	/* Background */
	.card.has-bg {
		background: var(--color-surface);
	}

	.card.is-elevated.has-bg {
		background: var(--color-elevated);
	}

	/* Border */
	.card.has-border {
		border: 1px solid var(--color-border);
	}

	/* Padding */
	.card.p-sm { padding: var(--space-md); }
	.card.p-md { padding: calc(var(--space-lg) * 1.05); }
	.card.p-lg { padding: calc(var(--space-lg) * 1.35); }

	/* Radius */
	.card.r-md  { border-radius: var(--radius-md); }
	.card.r-lg  { border-radius: var(--radius-lg); }
	.card.r-xl  { border-radius: var(--radius-xl); }
	.card.r-2xl { border-radius: var(--radius-2xl); }

	/* Shadow */
	.card.has-shadow {
		box-shadow: var(--shadow-sm);
	}

	/* Hover: slight lift + nicer border tint */
	.card:hover {
		transform: translateY(-1px);
	}

	.card.has-shadow:hover {
		box-shadow: var(--shadow-md);
	}

	.card.has-border:hover {
		border-color: rgba(76, 141, 255, 0.28);
	}

	/* Make focus feel intentional when card contains focusable elements */
	.card:focus-within {
		border-color: rgba(76, 141, 255, 0.38);
		box-shadow: 0 0 0 3px var(--ring-color), var(--shadow-sm);
	}

	@media (prefers-reduced-motion: reduce) {
		.card {
			transition: none;
			transform: none;
		}
		.card:hover {
			transform: none;
		}
	}
</style>
