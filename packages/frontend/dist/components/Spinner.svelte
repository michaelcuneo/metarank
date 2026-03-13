<script lang="ts">
	let {
		size = '32px',
		color = 'var(--primary-bg)'
	}: {
		size?: string;
		color?: string;
	} = $props();

	const thickness = '2px';
</script>

<div
	class="spinner"
	role="status"
	aria-live="polite"
	aria-label="Loading"
	style="
		width: {size};
		height: {size};
		border-top-color: {color};
		border-width: {thickness};
	"
></div>

<style>
	.spinner {
		border-style: solid;
		border-color: var(--color-border);
		border-top-color: var(--primary-bg);
		border-radius: 50%;

		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>