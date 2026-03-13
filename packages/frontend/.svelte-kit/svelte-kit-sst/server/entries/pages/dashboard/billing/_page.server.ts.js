import { redirect } from "@sveltejs/kit";
async function load({ locals, fetch }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/login");
  }
  const res = await fetch("/api/billing");
  if (!res.ok) {
    throw new Error("Failed to load billing");
  }
  return {
    billing: await res.json()
  };
}
export {
  load
};
