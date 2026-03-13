<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import DashboardPageHeader from '../DashboardPageHeader.svelte';

	type ApiKeyItem = {
		keyId: string;
		name: string;
		prefix: string;
		createdAt: number;
		revoked: boolean;
	};

	type CreatedKey = {
		keyId: string;
		name: string;
		key: string;
		prefix: string;
		createdAt: number;
	};

	let { data } = $props<{
		data: {
			keys: ApiKeyItem[];
		};
	}>();

	let name = $state('');
	let creating = $state(false);
	let revokingKeyId = $state<string | null>(null);
	let createError = $state('');
	let createdKey = $state<CreatedKey | null>(null);
	let keys = $state<ApiKeyItem[]>(data.keys);

	async function createKey() {
		createError = '';

		const trimmed = name.trim();

		if (!trimmed) {
			createError = 'Key name is required.';
			return;
		}

		creating = true;

		try {
			const res = await fetch('/api/keys', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name: trimmed })
			});

			if (!res.ok) {
				const body = await res.json().catch(() => null);
				throw new Error(body?.error ?? 'Failed to create API key');
			}

			const created = (await res.json()) as CreatedKey;
			createdKey = created;
			name = '';

			keys = [
				{
					keyId: created.keyId,
					name: created.name,
					prefix: created.prefix,
					createdAt: created.createdAt,
					revoked: false
				},
				...keys
			];
		} catch (err) {
			createError = err instanceof Error ? err.message : 'Failed to create API key';
		} finally {
			creating = false;
		}
	}

	async function revokeKey(keyId: string) {
		revokingKeyId = keyId;

		try {
			const res = await fetch(`/api/keys/${keyId}`, {
				method: 'DELETE'
			});

			if (!res.ok && res.status !== 204) {
				const body = await res.json().catch(() => null);
				throw new Error(body?.error ?? 'Failed to revoke API key');
			}

			keys = keys.map((key) =>
				key.keyId === keyId ? { ...key, revoked: true } : key
			);
		} catch (err) {
			createError = err instanceof Error ? err.message : 'Failed to revoke API key';
		} finally {
			revokingKeyId = null;
		}
	}

	async function copyCreatedKey() {
		if (!createdKey?.key) return;
		await navigator.clipboard.writeText(createdKey.key);
	}
</script>

<svelte:head>
	<title>API Keys — MetaRank</title>
	<meta
		name="description"
		content="Create, rotate, and revoke API keys used to access the MetaRank API."
	/>
</svelte:head>

<DashboardPageHeader
	eyebrow="Dashboard"
	title="API Keys"
	description="Create, rotate, and revoke keys used to access the MetaRank API."
>
	{#snippet actions()}
		<Button as="a" href="/docs" variant="ghost">View docs</Button>
	{/snippet}
</DashboardPageHeader>

<div class="keys-page">
	<Card class="panel create-panel">
		<h2 class="section-title">Create API key</h2>
		<p class="section-copy">
			Name your key by environment or use case so you can identify it later.
		</p>

		<div class="create-row">
			<div class="field">
				<label class="label" for="key-name">Key name</label>
				<input
					id="key-name"
					class="input"
					type="text"
					placeholder="Production"
					bind:value={name}
				/>
			</div>

			<div class="actions">
				<Button onclick={createKey} disabled={creating}>
					{creating ? 'Creating...' : 'Create API key'}
				</Button>
			</div>
		</div>

		{#if createError}
			<p class="error">{createError}</p>
		{/if}

		{#if createdKey}
			<div class="created-key">
				<div class="created-key-header">
					<div>
						<p class="created-label">New API key</p>
						<p class="created-note">
							Copy this now. You will not be able to see it again.
						</p>
					</div>

					<Button size="sm" variant="ghost" onclick={copyCreatedKey}>
						Copy key
					</Button>
				</div>

				<pre class="key-output">{createdKey.key}</pre>
			</div>
		{/if}
	</Card>

	<Card class="panel list-panel">
		<div class="list-header">
			<div>
				<h2 class="section-title">Existing keys</h2>
				<p class="section-copy">
					Revoke keys you no longer use. Revoked keys can no longer access the API.
				</p>
			</div>
		</div>

		{#if keys.length === 0}
			<div class="empty-state">
				<p class="empty-title">No API keys yet</p>
				<p class="empty-copy">
					Create your first key to start sending requests to the MetaRank API.
				</p>
			</div>
		{:else}
			<div class="table-wrap">
				<table class="keys-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Prefix</th>
							<th>Created</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{#each keys as key}
							<tr>
								<td>{key.name}</td>
								<td>
									<code>{key.prefix}</code>
								</td>
								<td>{new Date(key.createdAt).toLocaleDateString()}</td>
								<td>
									<span class:revoked={key.revoked} class="status-badge">
										{key.revoked ? 'Revoked' : 'Active'}
									</span>
								</td>
								<td class="action-cell">
									{#if key.revoked}
										<span class="muted">—</span>
									{:else}
										<Button
											size="sm"
											variant="ghost"
											onclick={() => revokeKey(key.keyId)}
											disabled={revokingKeyId === key.keyId}
										>
											{revokingKeyId === key.keyId ? 'Revoking...' : 'Revoke'}
										</Button>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</Card>
</div>

<style>
	.keys-page {
		display: grid;
		gap: 1rem;
	}

	.panel {
		min-height: 100%;
	}

	.section-title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.section-copy {
		margin: 0.55rem 0 0;
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.create-row {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		align-items: end;
		margin-top: 1.1rem;
	}

	.field {
		display: grid;
		gap: 0.45rem;
	}

	.label {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-text-subtle);
	}

	.input {
		width: 100%;
		height: 2.5rem;
		padding: 0 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-surface);
		color: var(--color-text);
		font: inherit;
		outline: none;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			background-color 0.15s ease;
	}

	.input:focus {
		border-color: var(--ring-color);
		box-shadow: 0 0 0 1px var(--ring-color);
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.error {
		margin: 0.85rem 0 0;
		font-size: 0.9rem;
		color: var(--danger-bg);
	}

	.created-key {
		margin-top: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-elevated);
	}

	.created-key-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.85rem;
	}

	.created-label {
		margin: 0;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.created-note {
		margin: 0.35rem 0 0;
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.key-output {
		margin: 0;
		padding: 1rem;
		border-radius: var(--radius-md);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.84rem;
		line-height: 1.6;
		white-space: pre-wrap;
		word-break: break-word;
		color: var(--color-text);
	}

	.list-header {
		margin-bottom: 1rem;
	}

	.empty-state {
		padding: 1rem 0 0.25rem;
	}

	.empty-title {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.empty-copy {
		margin: 0.45rem 0 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.table-wrap {
		overflow-x: auto;
	}

	.keys-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.keys-table th,
	.keys-table td {
		padding: 0.85rem 0.75rem;
		text-align: left;
		border-bottom: 1px solid var(--color-border);
		vertical-align: middle;
	}

	.keys-table th {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.keys-table td {
		color: var(--color-text);
	}

	.keys-table code {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.84rem;
		color: var(--color-text-muted);
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		font-size: 0.76rem;
		font-weight: 600;
		background: color-mix(in srgb, var(--primary-bg) 10%, transparent);
		color: var(--primary-bg);
		border: 1px solid color-mix(in srgb, var(--primary-bg) 18%, transparent);
	}

	.status-badge.revoked {
		background: color-mix(in srgb, var(--danger-bg) 10%, transparent);
		color: var(--danger-bg);
		border-color: color-mix(in srgb, var(--danger-bg) 18%, transparent);
	}

	.action-cell {
		text-align: right;
	}

	.muted {
		color: var(--color-text-subtle);
	}

	@media (max-width: 768px) {
		.create-row {
			grid-template-columns: 1fr;
			align-items: stretch;
		}

		.created-key-header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>