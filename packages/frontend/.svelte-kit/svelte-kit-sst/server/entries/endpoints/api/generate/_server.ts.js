import { json } from "@sveltejs/kit";
async function POST({ request, fetch, locals }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const res = await fetch("https://api.metarank.io/v1/seo/meta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.METARANK_INTERNAL_API_KEY ?? ""}`
      },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return json(
        { error: data?.error ?? "Failed to generate SEO metadata" },
        { status: res.status }
      );
    }
    return json(data);
  } catch (err) {
    console.error("Generate proxy failed:", err);
    return json({ error: "Failed to generate SEO metadata" }, { status: 500 });
  }
}
export {
  POST
};
