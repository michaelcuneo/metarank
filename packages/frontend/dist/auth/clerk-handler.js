import { withClerkHandler } from 'svelte-clerk/server';
const key = process.env['PUBLIC_CLERK_PUBLISHABLE_KEY'] ?? '';
export const clerkHandle = withClerkHandler({
    publishableKey: key
});
