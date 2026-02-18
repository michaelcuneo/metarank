<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		value = $bindable(''),
		placeholder = '',
		name = '',
		id = '',
		required = false,
		disabled = false,
		rows = 10,
		children,
		...rest
	}: {
    value?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
    children?: Snippet;
    [x: string]: any;
  } = $props();

	let textareaRef: HTMLTextAreaElement;
</script>

<div class="textarea-group">
	{#if children}
		<label class="textarea-label" for={id || name}>{@render children?.()}</label>
	{/if}
	<textarea
		class="textarea-field"
		bind:this={textareaRef}
		bind:value
		{placeholder}
		{name}
		{id}
		{required}
		{disabled}
		{rows}
		{...rest}
	></textarea>
</div>

<style>
	.textarea-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: var(--space-lg);
	}

	.textarea-label {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-muted);
		letter-spacing: 0.01em;
	}

	.textarea-field {
		width: 100%;
		min-height: 8rem;

		font-family: inherit;
		font-size: 0.875rem;
		line-height: 1.5;

		color: var(--color-text);
		background: var(--color-surface);

		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);

		padding: 0.75rem 0.875rem;

		resize: vertical;
		outline: none;

		transition:
			border-color 0.15s ease,
			background-color 0.15s ease,
			box-shadow 0.15s ease;

		scrollbar-width: thin;
		scrollbar-color: var(--color-border) transparent;
	}

	/* Focus */
	.textarea-field:focus {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
		background: var(--color-surface);
	}

	/* Disabled */
	.textarea-field:disabled {
		background: var(--color-elevated);
		color: var(--color-text-subtle);
		cursor: not-allowed;
	}

	/* Placeholder */
	.textarea-field::placeholder {
		color: var(--color-text-subtle);
		opacity: 0.7;
	}

	/* Scrollbar (WebKit) */
	.textarea-field::-webkit-scrollbar {
		width: 8px;
	}

	.textarea-field::-webkit-scrollbar-thumb {
		background-color: var(--color-border);
		border-radius: var(--radius-sm);
	}
</style>
