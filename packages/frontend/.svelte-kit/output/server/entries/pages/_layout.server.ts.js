import "@clerk/backend";
import "@sveltejs/kit";
import "../../chunks/clerkClient.js";
import { makeAuthObjectSerializable, stripPrivateDataFromObject } from "@clerk/backend/internal";
import "@clerk/shared/netlifyCacheHandler";
import "@clerk/shared/utils";
import "@clerk/shared/proxy";
import "@clerk/shared/keys";
import "@clerk/shared/underscore";
function buildClerkProps(auth) {
  const initialState = makeAuthObjectSerializable(stripPrivateDataFromObject(auth));
  return {
    initialState: JSON.parse(JSON.stringify(initialState))
  };
}
const load = async ({ locals, cookies }) => {
  if (!locals.auth().userId) {
    cookies.delete("user_hash", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });
  }
  return {
    ...buildClerkProps(locals.auth()),
    auth: {
      isSignedIn: Boolean(locals.auth().userId)
    }
  };
};
export {
  load
};
