import { redirect } from "@sveltejs/kit";
async function load({ locals, fetch }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/login");
  }
  const [usageRes, historyRes] = await Promise.all([
    fetch("/api/usage"),
    fetch("/api/usage/history")
  ]);
  if (!usageRes.ok) {
    throw new Error("Failed to load usage");
  }
  if (!historyRes.ok) {
    throw new Error("Failed to load usage history");
  }
  return {
    usage: await usageRes.json(),
    history: await historyRes.json()
  };
}
export {
  load
};
