<script>
	import ApiStatus from "./ApiStatus.svelte";

</script>
<footer class="footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<div class="logo">MetaRank</div>
			<p class="tagline">
				Predictable SEO metadata for developers and publishing systems.
			</p>
		</div>

		<nav class="footer-nav" aria-label="Footer">
			<div class="footer-group">
				<div class="footer-title">Product</div>
				<a href="/generate">Generate</a>
				<a href="/pricing">Pricing</a>
				<a href="/about">About</a>
			</div>

			<div class="footer-group">
				<div class="footer-title">Developers</div>
				<a href="/docs">Docs</a>
				<a href="https://github.com/your-org/metarank" target="_blank" rel="noopener">
					GitHub
				</a>
			</div>

			<div class="footer-group">
				<div class="footer-title">Company</div>
				<a href="mailto:hello@metarank.io">Contact</a>
			</div>

			<div class="footer-group">
			  <div class="footer-title">Service Status</div>
				<ApiStatus />
			</div>
		</nav>
	</div>

	<div class="footer-bottom">
		<span>© {new Date().getFullYear()} MetaRank</span>
		<span class="sep">·</span>
		<span>Stable, predictable SEO metadata</span>
	</div>
</footer>

<style>
.footer {
	margin-top: 8rem;
	padding: 3rem 2rem 1.5rem;
	background: var(--color-surface);
	border-top: 1px solid var(--color-border);
}

.footer-inner {
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 3rem;
}

.footer-brand .logo {
	font-size: 1.1rem;
	font-weight: 700;
	letter-spacing: -0.01em;
	color: var(--color-text);
}

.footer-brand .tagline {
	margin-top: 0.5rem;
	font-size: 0.875rem;
	color: var(--color-text-muted);
	max-width: 280px;
}

.footer-nav {
	display: grid;
	grid-template-columns: repeat(4, minmax(120px, 1fr));
	gap: 2rem;
}

.footer-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.footer-title {
	font-size: 0.7rem;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--color-text-subtle);
	margin-bottom: 0.25rem;
}

.footer-group a {
	font-size: 0.875rem;
	color: var(--color-text-muted);
	text-decoration: none;
	transition: color 0.15s ease;
}

.footer-group a:hover {
	color: var(--color-text);
}

.footer-bottom {
	max-width: 1200px;
	margin: 2.5rem auto 0;
	padding-top: 1rem;
	border-top: 1px solid var(--color-border);
	display: flex;
	gap: 0.5rem;
	align-items: center;
	font-size: 0.75rem;
	color: var(--color-text-subtle);
	flex-wrap: wrap;
}

.sep {
	opacity: 0.5;
}

/* Mobile */
@media (max-width: 900px) {
	.footer-inner {
		grid-template-columns: 1fr;
	}

	.footer-nav {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
