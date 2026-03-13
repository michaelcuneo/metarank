<script lang="ts">
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import { SignedIn, SignedOut, UserButton } from 'svelte-clerk';
</script>

<header class="header">
	<div class="header-inner">
		<div class="brand">
			<a href="/" class="brand-name">MetaRank</a>
		</div>

		<nav class="nav">
			<a
				href="/"
				class="nav-link"
				class:active={page.url.pathname === '/'}
			>
				Landing
			</a>

			<a
				href="/about"
				class="nav-link"
				class:active={page.url.pathname.startsWith('/about')}
			>
				About
			</a>

			<a
				href="/pricing"
				class="nav-link"
				class:active={page.url.pathname.startsWith('/pricing')}
			>
				Pricing
			</a>

			<a
				href="/docs"
				class="nav-link"
				class:active={page.url.pathname.startsWith('/docs')}
			>
				Docs
			</a>
		</nav>

		<div class="actions">
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<Button
					as="a"
					href="/signin"
					size="sm"
				>
					Sign in →
				</Button>
			</SignedOut>
			<Button
				as="a"
				href="/generate"
				size="sm"
			>
				Generate →
			</Button>
		</div>
	</div>
</header>

<style>
.header {
	position: sticky;
	top: 0;
	z-index: 40;

	background: color-mix(
		in srgb,
		var(--color-bg) 85%,
		var(--color-surface)
	);
	backdrop-filter: saturate(1.2) blur(8px);

	border-bottom: 1px solid var(--color-border);
}

.header-inner {
	max-width: 1400px;
	margin: 0 auto;
	padding: 0.75rem 2rem;

	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	gap: 2rem;
}

/* Brand */
.brand-name {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: -0.01em;
	color: var(--color-text);
	text-decoration: none;
}

/* Nav links (Landing / About) */
.nav {
	display: flex;
	gap: 1.25rem;
}

.nav-link {
	font-size: 0.8rem;
	font-weight: 500;
	color: var(--color-text-muted);
	text-decoration: none;
	padding: 0.25rem 0.4rem;
	border-radius: 0.375rem;
	transition: color 0.15s ease, background-color 0.15s ease;
}

.nav-link:hover {
	color: var(--color-text);
	background: var(--color-elevated);
}

.nav-link.active {
	color: var(--color-text);
	background: var(--color-elevated);
}

/* Icons */
.actions {
	display: flex;
	gap: 0.75rem;
	align-items: center;
}

/* Mobile */
@media (max-width: 768px) {
	.nav {
		display: none;
	}
}
</style>