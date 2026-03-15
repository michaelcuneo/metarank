<script lang="ts">
	import type { Snippet } from 'svelte';
	import './app.css';

	import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { ClerkProvider } from 'svelte-clerk';
	import { config } from '@fortawesome/fontawesome-svg-core';

	import '@fortawesome/fontawesome-svg-core/styles.css';
	config.autoAddCss = false;

	let { children }: { children: Snippet } = $props();
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	<div class="app-shell">
		<Header />
		<main>
			{@render children?.()}
		</main>
		<Footer />
	</div>
</ClerkProvider>

<style>
	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}
</style>