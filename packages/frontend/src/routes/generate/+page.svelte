<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let title = $state('');
	let body = $state('');
	let location = $state('');
	let targetQuery = $state('');

	let activeTab = $state<'response' | 'api'>('response');
	let loading = $state(false);

	let result: {
		metaTitle: string;
		metaDescription: string;
		slug: string;
		keywords: string;
		ogDescription: string;
		searchIntent?: string;
		primaryLocation?: string;
		languageCode?: string;
	} | null = $state(null);

	const copy = (text: string) => navigator.clipboard.writeText(text);

	const curlExample = $derived(`curl -X POST https://api.metarank.io/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type": "application/json" \\
  -d '${JSON.stringify({ title, body, location, targetQuery }, null, 2)}'`);

	const jsExample = $derived(`fetch("https://api.metarank.io/v1/seo/meta", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: ${JSON.stringify(title)},
    body: ${JSON.stringify(body)},
    location: ${JSON.stringify(location)},
    targetQuery: ${JSON.stringify(targetQuery)}
  })
})
  .then(res => res.json())
  .then(console.log);`);

	async function submit(event?: Event) {
		event?.preventDefault();
		loading = true;
		result = null;

		try {
			const res = await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, body, location, targetQuery })
			});

			if (!res.ok) {
				throw new Error('Failed to generate metadata');
			}

			result = await res.json();
		} finally {
			loading = false;
		}
	}
</script>

<div class="page-shell generate">
	<div class="layout">
		<Card class="panel">
			<h1 class="panel-title">Generate metadata</h1>
			<p class="panel-subtext">
				Generate SEO metadata from real content using MetaRank.
			</p>

			<form onsubmit={submit}>
				<Input bind:value={title}>Title</Input>

				<Textarea bind:value={body} rows={8}>
					Body (Markdown, HTML, or text)
				</Textarea>

				<div class="optional">
					<Input bind:value={location}>Location (optional)</Input>
					<Input bind:value={targetQuery}>
						Target search query (optional)
					</Input>
				</div>

				<div class="actions">
					{#if loading}
						<Spinner size="24px" />
					{:else}
						<Button
							type="submit"
							variant="primary"
							disabled={body.length < 100}
						>
							Generate metadata
						</Button>
					{/if}
				</div>
			</form>
		</Card>

		<div class="output">
			<Card class="output-card">
				{#if !result}
					<div class="empty-state">
						<h2>Metadata output</h2>
						<p>
							Your generated SEO metadata will appear here after you submit content.
						</p>

						<ul>
							<li>Meta title and description</li>
							<li>SEO keywords and slug</li>
							<li>Search intent classification</li>
						</ul>
					</div>
				{:else}
					<div class="output-header">
						<div class="output-title">Output</div>

						<div class="tabs">
							<Button
								size="sm"
								variant={activeTab === 'response' ? 'secondary' : 'ghost'}
								onclick={() => (activeTab = 'response')}
							>
								Response
							</Button>

							<Button
								size="sm"
								variant={activeTab === 'api' ? 'secondary' : 'ghost'}
								onclick={() => (activeTab = 'api')}
							>
								API
							</Button>
						</div>
					</div>

					{#if activeTab === 'response'}
						<div class="block">
							<div class="block-header">
								<span>JSON response</span>
								<Button
									size="sm"
									variant="ghost"
									onclick={() => copy(JSON.stringify(result, null, 2))}
								>
									Copy
								</Button>
							</div>

							<pre>{JSON.stringify(result, null, 2)}</pre>
						</div>
					{:else}
						<div class="block">
							<div class="block-header">
								<span>cURL</span>
								<Button size="sm" variant="ghost" onclick={() => copy(curlExample)}>
									Copy
								</Button>
							</div>

							<pre>{curlExample}</pre>
						</div>

						<div class="block">
							<div class="block-header">
								<span>JavaScript</span>
								<Button size="sm" variant="ghost" onclick={() => copy(jsExample)}>
									Copy
								</Button>
							</div>

							<pre>{jsExample}</pre>
						</div>
					{/if}
				{/if}
			</Card>
		</div>
	</div>
</div>

<style>
	.generate {
		max-width: 1400px;
		margin: 0 auto;
		padding: 3rem 2rem 4rem;
	}

	.layout {
		display: grid;
		grid-template-columns: 400px 1fr;
		gap: 2rem;
		align-items: start;
	}

	.panel-title {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--color-text);
	}

	.panel-subtext {
		margin: 0.55rem 0 1.25rem;
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--color-text-muted);
		max-width: 44ch;
	}

	.optional {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
		display: grid;
		gap: 0.75rem;
	}

	.actions {
		margin-top: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.empty-state {
		padding: 2rem;
		max-width: 60ch;
	}

	.empty-state h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.empty-state p {
		margin: 0.75rem 0 0;
		font-size: 0.92rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.empty-state ul {
		margin: 1rem 0 0;
		padding-left: 1rem;
		color: var(--color-text-muted);
		font-size: 0.92rem;
		line-height: 1.6;
	}

	.output-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.output-title {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.tabs {
		display: flex;
		gap: 0.5rem;
	}

	.block {
		margin: 1rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-elevated);
		overflow: hidden;
	}

	.block + .block {
		margin-top: 0;
	}

	.block-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0.9rem;
		border-bottom: 1px solid var(--color-border);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	pre {
		margin: 0;
		padding: 1rem;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.8rem;
		line-height: 1.7;
		white-space: pre-wrap;
		word-break: break-word;
		color: var(--color-text);
		background: transparent;
	}

	@media (max-width: 900px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>