import { redirect, error } from "@sveltejs/kit";
async function load({ locals, fetch }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/login");
  }
  const res = await fetch("/api/keys");
  if (!res.ok) {
    throw error(res.status, "Failed to load API keys");
  }
  const keys = await res.json();
  return {
    keys: keys.items
  };
}
export {
  load
};
