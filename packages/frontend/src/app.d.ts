// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('svelte-clerk/server').ClerkAuth;
			plan: 'free' | 'pro' | 'enterprise';
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
