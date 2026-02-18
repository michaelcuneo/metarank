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
  -H "Content-Type: application/json" \\
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

			if (!res.ok) throw new Error();
			result = await res.json();
		} finally {
			loading = false;
		}
	}
</script>

<div class="page">
	<div class="layout">
		<!-- LEFT: CONTROL PANEL -->
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
						<Spinner size="24px" color="white" />
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

		<!-- RIGHT: CONSOLE -->
		<div class="console">
			{#if !result}
				<div class="console-empty">
					<h3>Metadata output</h3>
					<p>Your generated metadata will appear here.</p>
					<ul>
						<li>Meta title & description</li>
						<li>SEO keywords</li>
						<li>Slug & search intent</li>
					</ul>
				</div>
			{:else}
				<div class="console-header">
					<span>Output</span>
					<div class="tabs">
						<button
							class:active={activeTab === 'response'}
							onclick={() => (activeTab = 'response')}
						>
							Response
						</button>
						<button
							class:active={activeTab === 'api'}
							onclick={() => (activeTab = 'api')}
						>
							API
						</button>
					</div>
				</div>

				{#if activeTab === 'response'}
					<div class="block">
						<div class="block-header">
							<span>JSON</span>
							<button onclick={() => copy(JSON.stringify(result, null, 2))}>
								Copy
							</button>
						</div>
						<pre>{JSON.stringify(result, null, 2)}</pre>
					</div>
				{:else}
					<div class="block">
						<div class="block-header">
							<span>curl</span>
							<button onclick={() => copy(curlExample)}>Copy</button>
						</div>
						<pre>{curlExample}</pre>
					</div>

					<div class="block">
						<div class="block-header">
							<span>JavaScript</span>
							<button onclick={() => copy(jsExample)}>Copy</button>
						</div>
						<pre>{jsExample}</pre>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
.page {
	max-width: 1400px;
	margin: 0 auto;
	padding: 3.25rem 3rem 4rem;
	position: relative;
	isolation: isolate;
}

/* Ambient top glow like the other pages (edge-free) */
.page::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	pointer-events: none;

	background:
		radial-gradient(980px 560px at 50% 0%, rgba(76, 141, 255, 0.16), transparent 62%),
		radial-gradient(820px 560px at 18% 16%, rgba(225, 29, 72, 0.07), transparent 60%),
		radial-gradient(820px 560px at 82% 16%, rgba(245, 158, 11, 0.07), transparent 60%);
	filter: blur(18px) saturate(1.06);
	opacity: 0.72;

	-webkit-mask-image: radial-gradient(
		farthest-side at 50% 18%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
	mask-image: radial-gradient(
		farthest-side at 50% 18%,
		#000 0%,
		#000 58%,
		rgba(0,0,0,0) 100%
	);
}

.layout {
	display: grid;
	grid-template-columns: 400px 1fr;
	gap: 2.25rem;
	align-items: start;
}

/* LEFT PANEL */
.panel {
	padding: 1.35rem;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--color-border);
	box-shadow: var(--shadow-sm);
	background: var(--color-surface);
	position: sticky;
	top: 1.25rem;
}

.panel-title {
	margin: 0;
	font-size: 1.05rem;
	font-weight: 750;
	letter-spacing: -0.01em;
}

.panel-subtext {
	margin: 0.55rem 0 1.15rem;
	font-size: 0.92rem;
	line-height: 1.55;
	color: var(--color-text-muted);
	max-width: 52ch;
}

/* Tighten form spacing (without touching components) */
.panel :global(label) {
	display: block;
	margin: 0.85rem 0 0.35rem;
	font-size: 0.78rem;
	font-weight: 750;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
}

.optional {
	margin-top: 1.1rem;
	padding-top: 1.1rem;
	border-top: 1px solid var(--color-border);
	display: grid;
	gap: 0.75rem;
}

.actions {
	margin-top: 1.35rem;
	padding-top: 1.1rem;
	border-top: 1px solid var(--color-border);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.75rem;
}

/* Make spinner not look lost */
.actions :global(svg),
.actions :global(.spinner) {
	opacity: 0.9;
}

/* CONSOLE (right side) */
.console {
	position: relative;
	overflow: hidden;
	border-radius: var(--radius-2xl);
	min-height: 520px;

	/* Looks like a real app panel, not a dead void */
	background:
		radial-gradient(1100px 520px at 50% 0%, rgba(76, 141, 255, 0.16), transparent 60%),
		linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
	border: 1px solid rgba(255, 255, 255, 0.12);
	box-shadow: var(--shadow-md);
	color: rgba(255, 255, 255, 0.92);
}

/* inner top highlight */
.console::after {
	content: '';
	position: absolute;
	inset: 0;
	pointer-events: none;
	border-radius: inherit;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

@media (prefers-color-scheme: light) {
	.console {
		color: var(--color-text);
		border: 1px solid var(--color-border);
		background:
			radial-gradient(1100px 520px at 50% 0%, rgba(76, 141, 255, 0.10), transparent 60%),
			linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.00));
	}
	.console::after {
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
	}
}

/* Empty state */
.console-empty {
	padding: 2.1rem 2.1rem;
	display: grid;
	gap: 0.6rem;
	max-width: 70ch;
}

.console-empty h3 {
	margin: 0;
	font-size: 0.85rem;
	font-weight: 850;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.78);
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
}

.console-empty h3::before {
	content: '';
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: rgba(76, 141, 255, 0.95);
	box-shadow: 0 0 0 4px rgba(76, 141, 255, 0.18);
}

.console-empty p {
	margin: 0;
	font-size: 0.95rem;
	line-height: 1.6;
	color: rgba(255, 255, 255, 0.68);
}

.console-empty ul {
	margin: 0.35rem 0 0;
	padding: 0;
	list-style: none;
	display: grid;
	gap: 0.45rem;
	color: rgba(255, 255, 255, 0.62);
	font-size: 0.92rem;
}

.console-empty li {
	position: relative;
	padding-left: 1.25rem;
}

.console-empty li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0.72em;
	transform: translateY(-50%);
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.22);
}

/* HEADER */
.console-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.9rem 1.05rem;
	background: rgba(0, 0, 0, 0.14);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.10);

	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.68);
}

@media (prefers-color-scheme: light) {
	.console-header {
		background: rgba(15, 23, 42, 0.02);
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-subtle);
	}
}

.tabs {
	display: inline-flex;
	gap: 0.4rem;
	padding: 0.2rem;
	border-radius: 999px;
	border: 1px solid rgba(255, 255, 255, 0.10);
	background: rgba(255, 255, 255, 0.04);
}

@media (prefers-color-scheme: light) {
	.tabs {
		border: 1px solid var(--color-border);
		background: rgba(15, 23, 42, 0.03);
	}
}

.tabs button {
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.70);
	font-size: 0.78rem;
	font-weight: 750;
	padding: 0.35rem 0.75rem;
	cursor: pointer;
	border-radius: 999px;
	transition: background-color 0.16s ease, color 0.16s ease, transform 0.16s ease;
}

.tabs button:hover {
	transform: translateY(-1px);
	background: rgba(255, 255, 255, 0.06);
}

.tabs button.active {
	background: rgba(76, 141, 255, 0.18);
	color: rgba(255, 255, 255, 0.92);
}

@media (prefers-color-scheme: light) {
	.tabs button {
		color: var(--color-text-muted);
	}
	.tabs button.active {
		background: rgba(76, 141, 255, 0.14);
		color: var(--color-text);
	}
}

/* BLOCKS (json/curl/js) */
.block {
	margin: 1rem;
	padding: 0.95rem;
	border-radius: var(--radius-2xl);
	border: 1px solid rgba(255, 255, 255, 0.10);
	background:
		radial-gradient(900px 280px at 30% 0%, rgba(76, 141, 255, 0.12), transparent 60%),
		linear-gradient(180deg, rgba(2, 6, 23, 0.72), rgba(2, 6, 23, 0.62));
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

@media (prefers-color-scheme: light) {
	.block {
		border: 1px solid var(--color-border);
		background:
			linear-gradient(180deg, rgba(15, 23, 42, 0.03), rgba(15, 23, 42, 0.01));
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
	}
}

/* block header */
.block-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.65rem;

	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.64);
}

@media (prefers-color-scheme: light) {
	.block-header {
		color: var(--color-text-subtle);
	}
}

.block-header button {
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.10);
	color: rgba(255, 255, 255, 0.86);
	font-size: 0.78rem;
	font-weight: 750;
	padding: 0.35rem 0.6rem;
	border-radius: 999px;
	cursor: pointer;
	transition: transform 0.16s ease, background-color 0.16s ease, border-color 0.16s ease;
}

.block-header button:hover {
	transform: translateY(-1px);
	border-color: rgba(76, 141, 255, 0.32);
	background: rgba(76, 141, 255, 0.12);
}

@media (prefers-color-scheme: light) {
	.block-header button {
		background: rgba(15, 23, 42, 0.03);
		border: 1px solid var(--color-border);
		color: var(--color-text);
	}
	.block-header button:hover {
		background: rgba(76, 141, 255, 0.10);
		border-color: rgba(76, 141, 255, 0.28);
	}
}

/* CODE */
pre {
	margin: 0;
	padding: 0.95rem 1rem;
	border-radius: var(--radius-xl);
	border: 1px solid rgba(255, 255, 255, 0.10);
	background: rgba(255, 255, 255, 0.03);

	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	font-size: 0.84rem;
	line-height: 1.7;
	white-space: pre-wrap;
	word-break: break-word;

	color: rgba(255, 255, 255, 0.92);
}

@media (prefers-color-scheme: light) {
	pre {
		border: 1px solid var(--color-border);
		background: rgba(15, 23, 42, 0.03);
		color: var(--color-text);
	}
}

/* MOBILE */
@media (max-width: 900px) {
	.page {
		padding: 2.5rem 1.25rem 3.5rem;
	}
	.layout {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}
	.panel {
		position: relative;
		top: auto;
	}
}
</style>
