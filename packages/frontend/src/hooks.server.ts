// src/hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks';
import { clerkHandle } from '$lib/auth/clerk-handler.js';
import { syncUserHandle } from '$lib/auth/sync-user-handler.js';

export const handle = sequence(clerkHandle, syncUserHandle);
