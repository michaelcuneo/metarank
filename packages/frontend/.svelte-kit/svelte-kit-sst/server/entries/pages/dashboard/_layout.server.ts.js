import { redirect, error } from "@sveltejs/kit";
const load = async ({ locals, fetch }) => {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/signin");
  }
  const usageRes = await fetch("/api/usage");
  if (!usageRes.ok) {
    throw error(usageRes.status, "Failed to load usage");
  }
  const usage = await usageRes.json();
  return {
    userId: auth.userId,
    usage
  };
};
export {
  load
};
