<script lang="ts">
	const tools = [
		{
			title: 'Meta Description Generator',
			href: '/meta-description-generator',
			description:
				'Generate SEO meta descriptions automatically from page content using the MetaRank API.'
		},
		{
			title: 'Meta Title Generator',
			href: '/meta-title-generator',
			description:
				'Create optimized meta titles from real content using AI-powered SEO metadata generation.'
		},
		{
			title: 'Search Intent API',
			href: '/search-intent-api',
			description:
				'Classify queries and pages into informational, commercial, transactional, or navigational intent.'
		},
		{
			title: 'SEO Metadata API',
			href: '/seo-metadata-api',
			description:
				'Generate titles, descriptions, keywords, and slugs using one simple API request.'
		},
		{
			title: 'AI SEO API',
			href: '/ai-seo-api',
			description:
				'Automate SEO metadata generation across CMS systems, publishing workflows, and developer tools.'
		}
	];
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

<section class="tools">
	<div class="inner">
		<header class="header">
			<h1>SEO Tools for Developers</h1>
			<p>
				MetaRank provides developer-friendly tools for generating metadata,
				classifying search intent, and automating SEO workflows.
			</p>
		</header>

		<div class="grid">
			{#each tools as tool}
				<a class="card" href={tool.href}>
					<h2>{tool.title}</h2>
					<p>{tool.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
.tools {
	padding: 4rem 2rem;
}

.inner {
	max-width: 1100px;
	margin: auto;
}

.header {
	margin-bottom: 2.5rem;
	max-width: 60ch;
}

.header h1 {
	margin: 0;
	font-size: 2rem;
}

.header p {
	margin-top: 0.6rem;
	color: var(--color-text-muted);
	line-height: 1.6;
}

.grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
}

.card {
	display: block;
	padding: 1.4rem;
	border-radius: var(--radius-md);
	border: 1px solid var(--color-border);
	text-decoration: none;
	color: inherit;
	background: var(--color-surface);
	transition: all 0.15s ease;
}

.card:hover {
	transform: translateY(-2px);
	border-color: var(--primary-bg);
}

.card h2 {
	margin: 0;
	font-size: 1rem;
}

.card p {
	margin-top: 0.5rem;
	font-size: 0.9rem;
	color: var(--color-text-muted);
	line-height: 1.6;
}
</style>