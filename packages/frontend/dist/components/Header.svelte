<script lang="ts">
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
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
		<SignedOut>
			<SignInButton class="clerk-user-button" />
		</SignedOut>
		<SignedIn>
			<UserButton />
			<Button as="a" href="/dashboard" variant="ghost" size="sm">
				Dashboard
			</Button>
		</SignedIn>
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

:global(.clerk-user-button) {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	font-family: inherit;
	font-weight: 600;
	line-height: 1;
	text-decoration: none;
	white-space: nowrap;
	border-radius: var(--radius-sm);
	border: 1px solid transparent;
	min-height: 2rem;
	padding: 0.4rem 0.75rem;
	font-size: 0.75rem;
	cursor: pointer;
	user-select: none;
	background: var(--primary-bg);
	color: var(--primary-text);
	border-color: var(--primary-bg);
	transition:
		background-color 0.15s ease,
		border-color 0.15s ease,
		color 0.15s ease,
		box-shadow 0.15s ease;
}
:global(.clerk-user-button:hover) {
	background: var(--primary-hover);
	border-color: var(--primary-hover);
}

/* Mobile */
@media (max-width: 768px) {
	.nav {
		display: none;
	}
}
</style>