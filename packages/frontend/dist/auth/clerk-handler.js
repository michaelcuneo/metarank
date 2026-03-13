import { withClerkHandler } from 'svelte-clerk/server';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
export const clerkHandle = withClerkHandler({
    publishableKey: PUBLIC_CLERK_PUBLISHABLE_KEY
});
