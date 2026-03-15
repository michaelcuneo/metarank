import { fail, error } from "@sveltejs/kit";
async function getErrorMessage(res) {
  const body = await res.text().catch(() => "");
  if (!body) {
    return `Request failed with status ${res.status}`;
  }
  try {
    const parsed = JSON.parse(body);
    return parsed.error ?? body;
  } catch {
    return body;
  }
}
const load = async ({ fetch }) => {
  const res = await fetch("/api/keys");
  if (!res.ok) {
    const message = await getErrorMessage(res);
    console.error("/api/keys load failed:", res.status, message);
    throw error(res.status, message);
  }
  const data = await res.json();
  return {
    keys: data.items
  };
};
const actions = {
  create: async ({ request, fetch }) => {
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    if (!name) {
      return fail(400, {
        createError: "Key name is required."
      });
    }
    const res = await fetch("/api/keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });
    if (!res.ok) {
      const message = await getErrorMessage(res);
      return fail(res.status, {
        createError: message
      });
    }
    const createdKey = await res.json();
    return {
      createdKey
    };
  },
  revoke: async ({ request, fetch }) => {
    const formData = await request.formData();
    const keyId = formData.get("keyId")?.toString() ?? "";
    if (!keyId) {
      return fail(400, {
        revokeError: "Missing API key id."
      });
    }
    const res = await fetch(`/api/keys/${keyId}`, {
      method: "DELETE"
    });
    if (!res.ok && res.status !== 204) {
      const message = await getErrorMessage(res);
      return fail(res.status, {
        revokeError: message
      });
    }
    return {
      revokedKeyId: keyId
    };
  }
};
export {
  actions,
  load
};
