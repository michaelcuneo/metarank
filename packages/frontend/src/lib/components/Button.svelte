<script lang="ts">
	let {
		type = 'button',
		variant = 'primary' as Variant,
		size = 'md' as Sizes,
		disabled = false,
		children,
		...rest
	}: {
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		children?: import('svelte').Snippet;
		[x: string]: any;
	} = $props();

	type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
	type Sizes = 'sm' | 'md' | 'lg';
</script>

<button
	class={`btn ${variant} ${size}`}
	type={type}
	aria-disabled={disabled}
	disabled={disabled}
	{...rest}
>
	{@render children?.()}
</button>

<style>
.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	font-weight: 650;
	line-height: 1;

	border-radius: 999px; /* modern pill */
	border: 1px solid transparent;

	cursor: pointer;
	user-select: none;

	/* consistent hit area */
	min-height: 2.5rem;

	transition:
		transform 0.16s ease,
		box-shadow 0.16s ease,
		background-color 0.16s ease,
		border-color 0.16s ease,
		color 0.16s ease;

	box-shadow: none;
}

.btn:active {
	transform: translateY(0px);
}

@media (prefers-reduced-motion: reduce) {
	.btn {
		transition: none;
		transform: none;
	}
}

/* Focus */
.btn:focus-visible {
	outline: none;
	box-shadow: 0 0 0 3px var(--ring-color);
}

/* Disabled */
.btn:disabled {
	opacity: 0.55;
	cursor: not-allowed;
	pointer-events: none;
}

/* ========== Variants ========== */

/* Primary */
.primary {
	background: var(--primary-bg);
	color: var(--primary-text);
	border-color: rgba(255, 255, 255, 0.06);
	box-shadow: var(--shadow-sm);
}

.primary:hover {
	background: var(--primary-hover);
	transform: translateY(-1px);
	box-shadow: var(--shadow-md);
}

.primary:active {
	transform: translateY(0px);
	box-shadow: var(--shadow-sm);
}

/* Secondary */
.secondary {
	background: rgba(255, 255, 255, 0.06);
	color: var(--secondary-text);
	border-color: var(--color-border);
}

@media (prefers-color-scheme: light) {
	.secondary {
		background: rgba(15, 23, 42, 0.04);
	}
}

.secondary:hover {
	transform: translateY(-1px);
	border-color: rgba(76, 141, 255, 0.22);
	background: rgba(76, 141, 255, 0.10);
}

.secondary:active {
	transform: translateY(0px);
}

/* Ghost */
.ghost {
	background: transparent;
	color: var(--ghost-text);
	border-color: transparent;
}

.ghost:hover {
	background: var(--ghost-bg-hover);
	transform: translateY(-1px);
}

.ghost:active {
	transform: translateY(0px);
}

/* Danger */
.danger {
	background: var(--danger-bg);
	color: var(--danger-text);
	border-color: rgba(255, 255, 255, 0.06);
	box-shadow: var(--shadow-sm);
}

.danger:hover {
	background: var(--danger-hover);
	transform: translateY(-1px);
	box-shadow: var(--shadow-md);
}

.danger:active {
	transform: translateY(0px);
	box-shadow: var(--shadow-sm);
}

/* ========== Sizes ========== */

.sm {
	font-size: 0.84rem;
	padding: 0.45rem 0.85rem;
	min-height: 2.25rem;
}

.md {
	font-size: 0.9rem;
	padding: 0.55rem 1.05rem;
	min-height: 2.5rem;
}

.lg {
	font-size: 0.98rem;
	padding: 0.72rem 1.2rem;
	min-height: 2.85rem;
}
</style>
