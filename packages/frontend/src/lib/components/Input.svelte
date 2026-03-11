<script lang="ts">
  import type { Snippet } from 'svelte';
	import type { FullAutoFill } from 'svelte/elements';
	let {
		type = 'text',
		value = $bindable(''),
		placeholder = '',
		name = '',
		id = '',
		required = false,
		disabled = false,
		autocomplete = null,
		children,
		...rest
	}: {
    type?: string;
    value?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: FullAutoFill | null | undefined;
    children?: Snippet;
    [x: string]: any;
  } = $props();
</script>

<div class="input-group">
	{#if children}
		<label class="input-label" for={id || name}>{@render children?.()}</label>
	{/if}
	<input
		class="text-input"
		{type}
		bind:value
		{placeholder}
		{name}
		{id}
		{required}
		{disabled}
		{autocomplete}
		{...rest}
	/>
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: var(--space-lg);
	}

	.input-label {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-muted);
		letter-spacing: 0.01em;
	}

	.text-input {
		width: 100%;
		height: 2.25rem;
		box-sizing: border-box;

		font-family: inherit;
		font-size: 0.875rem;
		line-height: 1;

		color: var(--color-text);
		background: var(--color-surface);

		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);

		padding: 0 0.75rem;

		outline: none;

		transition:
			border-color 0.15s ease,
			background-color 0.15s ease,
			box-shadow 0.15s ease;
	}

	/* Focus */
	.text-input:focus-visible {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
		background: var(--color-surface);
	}

	/* Disabled */
	.text-input:disabled {
		background: var(--color-elevated);
		color: var(--color-text-subtle);
		cursor: not-allowed;
	}

	/* Placeholder */
	.text-input::placeholder {
		color: var(--color-text-subtle);
		opacity: 0.7;
	}
</style>
