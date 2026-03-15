import { redirect, error } from "@sveltejs/kit";
async function load({ locals, fetch }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/login");
  }
  const [accountRes, usageRes, keysRes, billingRes] = await Promise.all([
    fetch("/api/account"),
    fetch("/api/usage"),
    fetch("/api/keys"),
    fetch("/api/billing")
  ]);
  if (!accountRes.ok) {
    throw error(accountRes.status, "Failed to load account");
  }
  if (!usageRes.ok) {
    throw error(usageRes.status, "Failed to load usage");
  }
  if (!keysRes.ok) {
    throw error(keysRes.status, "Failed to load API keys");
  }
  if (!billingRes.ok) {
    throw error(billingRes.status, "Failed to load billing");
  }
  const [account, usage, keys, billing] = await Promise.all([
    accountRes.json(),
    usageRes.json(),
    keysRes.json(),
    billingRes.json()
  ]);
  return {
    account,
    usage,
    keys: keys.items,
    billing
  };
}
export {
  load
};
