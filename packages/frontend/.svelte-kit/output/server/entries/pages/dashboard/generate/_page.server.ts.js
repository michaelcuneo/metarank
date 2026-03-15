import { fail, error } from "@sveltejs/kit";
import { Resource } from "sst";
const load = async ({ fetch }) => {
  const res = await fetch("/api/keys");
  if (!res.ok) {
    throw error(res.status, "Failed to load API keys");
  }
  const data = await res.json();
  return {
    keys: data.items.filter((key) => !key.revoked)
  };
};
const actions = {
  generate: async ({ request, fetch }) => {
    const formData = await request.formData();
    const apiKey = formData.get("apiKey")?.toString().trim() ?? "";
    const title = formData.get("title")?.toString().trim() ?? "";
    const body = formData.get("body")?.toString().trim() ?? "";
    const location = formData.get("location")?.toString().trim() ?? "";
    const targetQuery = formData.get("targetQuery")?.toString().trim() ?? "";
    if (!apiKey) {
      return fail(400, {
        error: "Select a key or paste an API key before generating.",
        values: { apiKey, title, body, location, targetQuery }
      });
    }
    if (!title) {
      return fail(400, {
        error: "Title is required.",
        values: { apiKey, title, body, location, targetQuery }
      });
    }
    if (!body) {
      return fail(400, {
        error: "Body is required.",
        values: { apiKey, title, body, location, targetQuery }
      });
    }
    const res = await fetch(`${Resource.MetarankAPI.url}/v1/seo/meta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        title,
        body,
        location: location || void 0,
        targetQuery: targetQuery || void 0
      })
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return fail(res.status, {
        error: data && "error" in data ? data.error ?? "Failed to generate metadata" : "Failed to generate metadata",
        values: { apiKey, title, body, location, targetQuery }
      });
    }
    return {
      result: data,
      values: { apiKey, title, body, location, targetQuery }
    };
  }
};
export {
  actions,
  load
};
