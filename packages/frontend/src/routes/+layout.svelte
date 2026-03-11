<script lang="ts">
	import type { Snippet } from 'svelte';
  import '@fontsource/cantarell';
  import '@fontsource/fjalla-one';
  import './app.css';

  import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

  import { ClerkProvider } from 'svelte-clerk';
  import { config } from '@fortawesome/fontawesome-svg-core'

  import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
  config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

  let { children }: { children: Snippet } = $props();
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
  <Header />
    {@render children?.()}
  <Footer />
</ClerkProvider>