<script lang="ts">
	import { enhance } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';

	type ApiKeyItem = {
		keyId: string;
		name: string;
		prefix: string;
		createdAt: number;
		revoked: boolean;
	};

	type GenerateResult = {
		metaTitle: string;
		metaDescription: string;
		slug: string;
		keywords: string;
		ogDescription: string;
		searchIntent?: string;
		primaryLocation?: string;
		languageCode?: string;
	};

	type FormValues = {
		apiKey: string;
		title: string;
		body: string;
		location: string;
		targetQuery: string;
	};

	type ActionData = {
		error?: string;
		result?: GenerateResult;
		values?: Partial<FormValues>;
	};

	let { data, form } = $props<{
		data: {
			keys: ApiKeyItem[];
		};
		form?: ActionData;
	}>();

	let apiKey = $derived(form?.values?.apiKey ?? '');
	let title = $derived(form?.values?.title ?? '');
	let body = $derived(form?.values?.body ?? '');
	let location = $derived(form?.values?.location ?? '');
	let targetQuery = $derived(form?.values?.targetQuery ?? '');

	let selectedKeyId = $state('');
	let activeTab = $state<'response' | 'api'>('response');
	let loading = $state(false);
	let rawKeyStore = $state<Record<string, string>>({});

	const result = $derived(form?.result ?? null);
	const errorMessage = $derived(form?.error ?? '');

	function copy(text: string) {
		return navigator.clipboard.writeText(text);
	}

	function formatDate(timestamp: number): string {
		return new Date(timestamp).toLocaleDateString(undefined, {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	function readRawKeyStore(): Record<string, string> {
		try {
			const stored = localStorage.getItem('metarank.rawApiKeys');
			if (!stored) return {};

			const parsed = JSON.parse(stored);
			return parsed && typeof parsed === 'object' ? parsed : {};
		} catch {
			return {};
		}
	}

	function refreshRawKeyStore() {
		if (typeof window === 'undefined') return;
		rawKeyStore = readRawKeyStore();
	}

	function applySelectedKey(keyId: string) {
		selectedKeyId = keyId;

		if (!keyId) {
			apiKey = '';
			return;
		}

		apiKey = rawKeyStore[keyId]?.trim() ?? '';
	}

	const usableKeys = $derived(
		data.keys.filter((key: ApiKeyItem) => Boolean(rawKeyStore[key.keyId]?.trim()))
	);

	const selectedKeyMeta = $derived(
		data.keys.find((key: ApiKeyItem) => key.keyId === selectedKeyId) ?? null
	);

	const selectedKeyAvailableLocally = $derived(
		Boolean(selectedKeyId && rawKeyStore[selectedKeyId]?.trim())
	);

	const curlExample = $derived(`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer ${apiKey || 'YOUR_API_KEY'}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(
		{
			title,
			body,
			location: location || undefined,
			targetQuery: targetQuery || undefined
		},
		null,
		2
	)}'`);

	const jsExample = $derived(`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ${apiKey || 'YOUR_API_KEY'}",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: ${JSON.stringify(title)},
    body: ${JSON.stringify(body)},
    location: ${JSON.stringify(location || undefined)},
    targetQuery: ${JSON.stringify(targetQuery || undefined)}
  })
})
  .then(res => res.json())
  .then(console.log);`);

	$effect(() => {
		if (typeof window === 'undefined') return;

		refreshRawKeyStore();

		if (!selectedKeyId) {
			const firstAvailable = data.keys.find((key: ApiKeyItem) => rawKeyStore[key.keyId]?.trim());
			if (firstAvailable) {
				applySelectedKey(firstAvailable.keyId);
			}
		}
	});

	$effect(() => {
		if (typeof window === 'undefined') return;

		const onStorage = (event: StorageEvent) => {
			if (event.key !== 'metarank.rawApiKeys') return;

			refreshRawKeyStore();

			if (selectedKeyId) {
				apiKey = rawKeyStore[selectedKeyId]?.trim() ?? '';
			}
		};

		window.addEventListener('storage', onStorage);
		return () => window.removeEventListener('storage', onStorage);
	});
</script>

<DashboardPageHeader
	eyebrow="Dashboard"
	title="Generate metadata"
	description="Use the power of MetaRank's API to generate SEO metadata for your content, including meta titles, descriptions, keywords, and more."
>
	{#snippet actions()}
		<Button as="a" href="/docs" variant="ghost">View docs</Button>
	{/snippet}
</DashboardPageHeader>

<div class="generate">
	<div class="layout">
		<Card class="panel">
			<h1 class="panel-title">Generate metadata</h1>
			<p class="panel-subtext">
				Test the live API using one of your keys.
			</p>

			<form
				method="POST"
				action="?/generate"
				use:enhance={() => {
					loading = true;

					return async ({ update }) => {
						loading = false;
						await update();
					};
				}}
			>
				<div class="optional">
					<div class="field">
						<label class="field-label" for="key-select">Saved key record</label>
						<select
							id="key-select"
							class="select"
							value={selectedKeyId}
							onchange={(event) =>
								applySelectedKey((event.currentTarget as HTMLSelectElement).value)}
						>
							<option value="">Paste a key or choose one available on this device</option>
							{#each data.keys as key}
								<option value={key.keyId}>
									{key.name} — {key.prefix} • {formatDate(key.createdAt)}
									{rawKeyStore[key.keyId]?.trim()
										? ' • available on this device'
										: ' • paste required'}
								</option>
							{/each}
						</select>
					</div>

					<Input bind:value={apiKey}>API key</Input>

					{#if selectedKeyMeta && !selectedKeyAvailableLocally}
						<p class="helper-text">
							This key exists on your account, but the full secret is not available on this
							device. Paste the full API key to use it here, or create a new key on this device.
						</p>
					{/if}

					{#if data.keys.length > 0 && usableKeys.length === 0}
						<p class="helper-text">
							No saved keys are available on this device yet. The dashboard can list key records,
							but it cannot recover full API secrets from the server after creation.
						</p>
					{/if}
				</div>

				<input type="hidden" name="apiKey" value={apiKey} />
				<input type="hidden" name="title" value={title} />
				<input type="hidden" name="body" value={body} />
				<input type="hidden" name="location" value={location} />
				<input type="hidden" name="targetQuery" value={targetQuery} />

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

				{#if errorMessage}
					<p class="error-text">{errorMessage}</p>
				{/if}

				<div class="actions">
					{#if loading}
						<Spinner size="24px" />
					{:else}
						<Button
							type="submit"
							variant="primary"
							disabled={!title.trim() || !body.trim() || !apiKey.trim()}
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
		display: grid;
		gap: 1rem;
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

	.field {
		display: grid;
		gap: 0.45rem;
	}

	.field-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.select {
		width: 100%;
		height: 2.5rem;
		padding: 0 0.75rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-text);
		font: inherit;
		outline: none;
	}

	.select:focus {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
	}

	.helper-text {
		margin: 0;
		font-size: 0.85rem;
		line-height: 1.5;
		color: var(--color-text-muted);
	}

	.error-text {
		margin: 0.75rem 0 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--danger-bg);
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