const pages = [
  "/",
  "/pricing",
  "/docs",
  "/seo-tools",
  // SEO landing pages
  "/meta-description-generator",
  "/meta-title-generator",
  "/search-intent-api",
  "/seo-metadata-api",
  "/ai-seo-api"
];
const GET = async () => {
  const base = "https://metarank.dev";
  const urls = pages.map(
    (page) => `
	<url>
		<loc>${base}${page}</loc>
		<changefreq>weekly</changefreq>
		<priority>${page === "/" ? "1.0" : "0.8"}</priority>
	</url>`
  ).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
export {
  GET
};
