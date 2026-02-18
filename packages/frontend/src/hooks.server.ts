// src/hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks';
import { clerkHandle } from '$lib/auth/clerk-handler';
import { syncUserHandle } from '$lib/auth/sync-user-handler';

export const handle = sequence(clerkHandle, syncUserHandle);
