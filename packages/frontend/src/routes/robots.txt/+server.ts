export const GET = () =>
	new Response(
		`User-agent: *
Allow: /

Sitemap: https://metarank.dev/sitemap.xml`,
		{
			headers: { 'Content-Type': 'text/plain' }
		}
	);
