<script lang="ts">
	import SeoLandingPage from '$lib/marketing/SeoLandingPage.svelte';
	import { seoMetadataApiPage } from '$lib/marketing/seo-metadata-api.js';
</script>

<svelte:head>
	<title>SEO Tools for Developers — MetaRank</title>
	<meta
		name="description"
		content="Explore MetaRank SEO tools for developers including meta title generators, description generators, and AI-powered metadata APIs."
	/>

  <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MetaRank SEO Tools",
    "itemListElement": [
      {
      "@type": "ListItem",
      "position": 1,
      "url": "https://metarank.dev/meta-title-generator"
      },
      {
      "@type": "ListItem",
      "position": 2,
      "url": "https://metarank.dev/meta-description-generator"
      },
      {
      "@type": "ListItem",
      "position": 3,
      "url": "https://metarank.dev/search-intent-api"
      }
    ]
    }
  </script>
</svelte:head>

<SeoLandingPage content={seoMetadataApiPage} />