import { r as root } from "./root.js";
import "./environment.js";
import "./shared-server.js";
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		<meta name="theme-color" content="#2b6fff" />\n		<meta name="color-scheme" content="light dark" />\n		<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n\n		<!-- SEO -->\n		<meta\n			name="description"\n			content="MetaRank generates SEO titles, meta descriptions, keywords, and search intent using AI. Fast API for developers, CMSs, and content platforms."\n		/>\n		<meta\n			name="keywords"\n			content="SEO metadata API, meta description API, meta title generator API, AI SEO automation, search intent classification API, SEO tools for developers, content optimization API"\n		/>\n		<link rel="canonical" href="https://metarank.dev/" />\n\n		<!-- 🪞 Open Graph / Facebook -->\n		<meta property="og:type" content="website" />\n		<meta property="og:url" content="https://metarank.dev/" />\n		<meta property="og:title" content="MetaRank — AI SEO Metadata API" />\n		<meta\n			property="og:description"\n			content="Generate SEO titles, meta descriptions, keywords and search intent instantly. Built for developers and modern content platforms."\n		/>\n		<meta property="og:image" content="' + assets + '/metarank.png" />\n		<meta property="og:image:width" content="1200" />\n		<meta property="og:image:height" content="630" />\n		<meta property="og:site_name" content="MetaRank" />\n\n		<!-- 🐦 Twitter Card -->\n		<meta name="twitter:card" content="summary_large_image" />\n		<meta name="twitter:site" content="@metarankdev" />\n		<meta name="twitter:title" content="MetaRank — AI SEO Metadata API" />\n		<meta\n			name="twitter:description"\n			content="Generate SEO titles, meta descriptions, keywords and search intent instantly via API."\n		/>\n		<meta name="twitter:image" content="' + assets + '/metarank.png" />\n\n		<!-- PWA & Favicons -->\n		<link rel="manifest" href="' + assets + '/site.webmanifest" />\n		<link rel="icon" type="image/svg+xml" href="' + assets + '/favicon.svg" />\n		<link rel="icon" type="image/png" href="' + assets + '/favicon-96x96.png" sizes="96x96" />\n		<link rel="apple-touch-icon" href="' + assets + '/apple-touch-icon.png" />\n		<meta name="apple-mobile-web-app-title" content="MetaRank" />\n		<meta name="application-name" content="MetaRank" />\n\n		<!-- ⚡️ Performance & Prefetch -->\n		<link rel="dns-prefetch" href="https://api.metarank.dev" />\n		<link rel="preconnect" href="https://api.metarank.dev" crossorigin />\n\n		<!-- 🔐 Privacy & Accessibility -->\n		<meta name="robots" content="index, follow" />\n		<meta name="referrer" content="strict-origin-when-cross-origin" />\n		<meta name="format-detection" content="telephone=no" />\n		<meta name="msapplication-TileColor" content="#408CFF" />\n		<meta name="generator" content="MetaRank Platform v1.0" />\n\n		<!-- 🧩 Structured Data (JSON-LD Schema.org) -->\n		<script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "SoftwareApplication",\n				"name": "MetaRank",\n				"url": "https://metarank.dev",\n				"applicationCategory": "DeveloperApplication, SEO Tool",\n				"operatingSystem": "Any",\n				"description": "AI-powered API that generates SEO titles, meta descriptions, keywords and search intent classification for websites and content platforms.",\n				"offers": {\n					"@type": "Offer",\n					"price": "0",\n					"priceCurrency": "USD"\n				},\n				"publisher": {\n					"@type": "Organization",\n					"name": "MetaRank",\n					"logo": {\n						"@type": "ImageObject",\n						"url": "https://metarank.dev/og/metarank-logo.png"\n					}\n				}\n			}\n		<\/script>\n\n		' + head + '\n	</head>\n\n	<body data-sveltekit-preload-data="hover">\n		<div>' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1fb1y0g"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  ({ handle, handleFetch, handleError, handleValidationError, init } = await import("../entries/hooks.server.js"));
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_manifest as a,
  get_hooks as g,
  options as o,
  read_implementation as r,
  set_read_implementation as s
};
