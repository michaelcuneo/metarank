
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const PULUMI_NODEJS_STACK: string;
	export const SSH_CLIENT: string;
	export const PULUMI_HOME: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const XDG_SESSION_TYPE: string;
	export const BROWSER: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const PULUMI_PROJECT: string;
	export const npm_package_json: string;
	export const TERM_PROGRAM_VERSION: string;
	export const PULUMI_NODEJS_PROJECT: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const NVM_BIN: string;
	export const NVM_INC: string;
	export const OPENAI_KEY: string;
	export const NODE_OPTIONS: string;
	export const OPENAI_API_KEY: string;
	export const GK_GL_PATH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_config_userconfig: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const SSL_CERT_FILE: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const npm_config_engine_strict: string;
	export const PULUMI_CONFIG_SECRET_KEYS: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const PULUMI_DEBUG_COMMANDS: string;
	export const NVM_DIR: string;
	export const LOGNAME: string;
	export const _: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const CLERK_SECRET_KEY: string;
	export const XDG_SESSION_CLASS: string;
	export const SST: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const TERM: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const SST_RESOURCE_App: string;
	export const npm_package_name: string;
	export const PULUMI_NODEJS_PARALLEL: string;
	export const XDG_RUNTIME_DIR: string;
	export const PULUMI_NODEJS_SYNC: string;
	export const DENO_INSTALL: string;
	export const CLERK_SECRET_KEY_DEV: string;
	export const SSL_CERT_DIR: string;
	export const PULUMI_NODEJS_MONITOR: string;
	export const LANG: string;
	export const npm_lifecycle_script: string;
	export const PULUMI_BACKEND_URL: string;
	export const TERM_PROGRAM: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const PULUMI_CONFIG_PASSPHRASE: string;
	export const SST_RESOURCE_MetarankUsageSnapshots: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const PULUMI_CONFIG: string;
	export const AWS_PROFILE: string;
	export const PULUMI_NODEJS_ENGINE: string;
	export const npm_package_version: string;
	export const SST_RESOURCE_MetarankAPI: string;
	export const SST_AWS_SESSION_TOKEN: string;
	export const SST_RESOURCE_MetarankBillingTable: string;
	export const AWS_REGION: string;
	export const SST_RESOURCE_MetarankUsers: string;
	export const LESSCLOSE: string;
	export const PULUMI_NODEJS_TYPESCRIPT: string;
	export const SST_SECRET_OPENAI_KEY: string;
	export const GK_GL_ADDR: string;
	export const CLERK_SECRET_KEY_PROD: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_globalconfig: string;
	export const SEO_LOCATION: string;
	export const SEO_QUERY: string;
	export const npm_config_init_module: string;
	export const npm_execpath: string;
	export const PULUMI_SKIP_UPDATE_CHECK: string;
	export const PWD: string;
	export const npm_config_global_prefix: string;
	export const NVM_CD_FLAGS: string;
	export const SSH_CONNECTION: string;
	export const XDG_DATA_DIRS: string;
	export const npm_command: string;
	export const SST_RESOURCE_MetarankApiKeys: string;
	export const SST_AWS_REGION: string;
	export const SST_AWS_ACCESS_KEY_ID: string;
	export const PULUMI_NODEJS_ORGANIZATION: string;
	export const SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
	export const SST_SERVER: string;
	export const SST_AWS_SECRET_ACCESS_KEY: string;
	export const EDITOR: string;
	export const PULUMI_NODEJS_ROOT_DIRECTORY: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_CLERK_PUBLISHABLE_KEY_PROD: string;
	export const PUBLIC_CLERK_PUBLISHABLE_KEY: string;
	export const PUBLIC_CLERK_PUBLISHABLE_KEY_DEV: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		USER: string;
		npm_config_user_agent: string;
		PULUMI_NODEJS_STACK: string;
		SSH_CLIENT: string;
		PULUMI_HOME: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		XDG_SESSION_TYPE: string;
		BROWSER: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		PULUMI_PROJECT: string;
		npm_package_json: string;
		TERM_PROGRAM_VERSION: string;
		PULUMI_NODEJS_PROJECT: string;
		VSCODE_IPC_HOOK_CLI: string;
		NVM_BIN: string;
		NVM_INC: string;
		OPENAI_KEY: string;
		NODE_OPTIONS: string;
		OPENAI_API_KEY: string;
		GK_GL_PATH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_config_userconfig: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		SSL_CERT_FILE: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		npm_config_engine_strict: string;
		PULUMI_CONFIG_SECRET_KEYS: string;
		COLOR: string;
		COLORTERM: string;
		PULUMI_DEBUG_COMMANDS: string;
		NVM_DIR: string;
		LOGNAME: string;
		_: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		CLERK_SECRET_KEY: string;
		XDG_SESSION_CLASS: string;
		SST: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		TERM: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		SST_RESOURCE_App: string;
		npm_package_name: string;
		PULUMI_NODEJS_PARALLEL: string;
		XDG_RUNTIME_DIR: string;
		PULUMI_NODEJS_SYNC: string;
		DENO_INSTALL: string;
		CLERK_SECRET_KEY_DEV: string;
		SSL_CERT_DIR: string;
		PULUMI_NODEJS_MONITOR: string;
		LANG: string;
		npm_lifecycle_script: string;
		PULUMI_BACKEND_URL: string;
		TERM_PROGRAM: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		PULUMI_CONFIG_PASSPHRASE: string;
		SST_RESOURCE_MetarankUsageSnapshots: string;
		SHELL: string;
		npm_lifecycle_event: string;
		PULUMI_CONFIG: string;
		AWS_PROFILE: string;
		PULUMI_NODEJS_ENGINE: string;
		npm_package_version: string;
		SST_RESOURCE_MetarankAPI: string;
		SST_AWS_SESSION_TOKEN: string;
		SST_RESOURCE_MetarankBillingTable: string;
		AWS_REGION: string;
		SST_RESOURCE_MetarankUsers: string;
		LESSCLOSE: string;
		PULUMI_NODEJS_TYPESCRIPT: string;
		SST_SECRET_OPENAI_KEY: string;
		GK_GL_ADDR: string;
		CLERK_SECRET_KEY_PROD: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_globalconfig: string;
		SEO_LOCATION: string;
		SEO_QUERY: string;
		npm_config_init_module: string;
		npm_execpath: string;
		PULUMI_SKIP_UPDATE_CHECK: string;
		PWD: string;
		npm_config_global_prefix: string;
		NVM_CD_FLAGS: string;
		SSH_CONNECTION: string;
		XDG_DATA_DIRS: string;
		npm_command: string;
		SST_RESOURCE_MetarankApiKeys: string;
		SST_AWS_REGION: string;
		SST_AWS_ACCESS_KEY_ID: string;
		PULUMI_NODEJS_ORGANIZATION: string;
		SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		SST_SERVER: string;
		SST_AWS_SECRET_ACCESS_KEY: string;
		EDITOR: string;
		PULUMI_NODEJS_ROOT_DIRECTORY: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_CLERK_PUBLISHABLE_KEY_PROD: string;
		PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		PUBLIC_CLERK_PUBLISHABLE_KEY_DEV: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
