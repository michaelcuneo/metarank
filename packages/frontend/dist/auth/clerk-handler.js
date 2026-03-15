import { withClerkHandler } from 'svelte-clerk/server';
import { Resource } from 'sst';
import { PUBLIC_CLERK_PUBLISHABLE_KEY_DEV, PUBLIC_CLERK_PUBLISHABLE_KEY_PROD } from '$env/static/public';
const key = Resource.App.stage === 'production'
    ? PUBLIC_CLERK_PUBLISHABLE_KEY_PROD
    : PUBLIC_CLERK_PUBLISHABLE_KEY_DEV;
export const clerkHandle = withClerkHandler({
    publishableKey: key
});
