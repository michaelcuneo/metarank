<script lang="ts">
	import { page } from '$app/stores';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
</script>

<header class="header">
	<div class="header-inner">
		<div class="brand">
			<a href="/" class="brand-name">MetaRank</a>
		</div>

		<nav class="nav">
			<a
				href="/about"
				class="nav-link"
				class:active={$page.url.pathname.startsWith('/about')}
			>
				About
			</a>

			<a
				href="/pricing"
				class="nav-link"
				class:active={$page.url.pathname.startsWith('/pricing')}
			>
				Pricing
			</a>

			<a
				href="/docs"
				class="nav-link"
				class:active={$page.url.pathname.startsWith('/docs')}
			>
				Docs
			</a>
		</nav>

		<div class="actions">
			<a
				href="/generate"
				class="generate-cta"
				class:active={$page.url.pathname.startsWith('/generate')}
			>
				Generate →
			</a>

			<a
				href="https://github.com/michaelcuneo/seo-genius"
				target="_blank"
				rel="noopener noreferrer"
				class="icon-link"
				aria-label="GitHub"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>

			<a
				href="https://join.slack.com/t/michaelcuneo/shared_invite/zt-2ewl9vs81-QWUZBWzHqkGiaN4XpqLXjg"
				target="_blank"
				rel="noopener noreferrer"
				class="icon-link"
				aria-label="Slack"
			>
				<FontAwesomeIcon icon={faSlack} />
			</a>
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
	font-size: 0.95rem;
	font-weight: 600;
	letter-spacing: 0.02em;
	color: var(--color-text);
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

/* Primary CTA */
.generate-cta {
	font-size: 0.8rem;
	font-weight: 600;
	padding: 0.45rem 0.75rem;
	border-radius: 0.5rem;
	background: var(--primary-bg);
	color: var(--primary-text);
	text-decoration: none;
	transition: background-color 0.15s ease, transform 0.15s ease;
}

.generate-cta:hover {
	background: var(--primary-hover);
	transform: translateY(-1px);
}

.generate-cta.active {
	box-shadow: 0 0 0 2px
		color-mix(in srgb, var(--primary-bg) 40%, transparent);
}

/* Icons */
.actions {
	display: flex;
	gap: 0.75rem;
	align-items: center;
}

.icon-link {
	color: var(--color-text-muted);
	font-size: 1.1rem;
	transition: color 0.15s ease, transform 0.15s ease;
}

.icon-link:hover {
	color: var(--color-text);
	transform: translateY(-1px);
}

/* Mobile */
@media (max-width: 768px) {
	.nav {
		display: none;
	}
}
</style>