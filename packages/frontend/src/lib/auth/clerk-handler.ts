// src/lib/clerk-handle.ts
import { withClerkHandler } from 'svelte-clerk/server';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/private';

export const clerkHandle = withClerkHandler({
	publishableKey: PUBLIC_CLERK_PUBLISHABLE_KEY
});
