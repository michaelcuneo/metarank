
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/account" | "/api/billing" | "/api/keys" | "/api/keys/[keyId]" | "/api/usage" | "/api/usage/history" | "/dashboard" | "/dashboard/api-keys" | "/dashboard/billing" | "/dashboard/usage" | "/docs" | "/generate" | "/pricing" | "/signin";
		RouteParams(): {
			"/api/keys/[keyId]": { keyId: string }
		};
		LayoutParams(): {
			"/": { keyId?: string };
			"/about": Record<string, never>;
			"/api": { keyId?: string };
			"/api/account": Record<string, never>;
			"/api/billing": Record<string, never>;
			"/api/keys": { keyId?: string };
			"/api/keys/[keyId]": { keyId: string };
			"/api/usage": Record<string, never>;
			"/api/usage/history": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/dashboard/api-keys": Record<string, never>;
			"/dashboard/billing": Record<string, never>;
			"/dashboard/usage": Record<string, never>;
			"/docs": Record<string, never>;
			"/generate": Record<string, never>;
			"/pricing": Record<string, never>;
			"/signin": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/api/account" | "/api/billing" | "/api/keys" | `/api/keys/${string}` & {} | "/api/usage" | "/api/usage/history" | "/dashboard" | "/dashboard/api-keys" | "/dashboard/billing" | "/dashboard/usage" | "/docs" | "/generate" | "/pricing" | "/signin";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | string & {};
	}
}