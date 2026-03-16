<script lang="ts">
	import SeoLandingPage from '$lib/marketing/SeoLandingPage.svelte';
	import { searchIntentApiPage } from '$lib/marketing/search-intent-api.js';
</script>

<SeoLandingPage content={searchIntentApiPage} />