import { redirect } from "@sveltejs/kit";
async function load({ locals }) {
  const auth = locals.auth?.();
  if (!auth?.userId) {
    throw redirect(302, "/login");
  }
  return {
    userId: auth.userId
  };
}
export {
  load
};
