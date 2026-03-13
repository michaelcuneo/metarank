
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
	export const SST_SERVER: string;
	export const NVM_INC: string;
	export const SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const SHELL: string;
	export const TERM: string;
	export const PULUMI_NODEJS_ORGANIZATION: string;
	export const SST_AWS_SESSION_TOKEN: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const PULUMI_SKIP_UPDATE_CHECK: string;
	export const CONDA_SHLVL: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const NODE_OPTIONS: string;
	export const PULUMI_NODEJS_MONITOR: string;
	export const ZDOTDIR: string;
	export const MallocNanoZone: string;
	export const PULUMI_NODEJS_STACK: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const PULUMI_NODEJS_ENGINE: string;
	export const NVM_DIR: string;
	export const _CONDA_EXE: string;
	export const SEO_QUERY: string;
	export const SST_AWS_ACCESS_KEY_ID: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const CONDA_EXE: string;
	export const npm_config_globalconfig: string;
	export const OPENAI_KEY: string;
	export const SSH_AUTH_SOCK: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const SST_AWS_SECRET_ACCESS_KEY: string;
	export const AWS_PROFILE: string;
	export const PULUMI_CONFIG_PASSPHRASE: string;
	export const SST: string;
	export const _CE_CONDA: string;
	export const PATH: string;
	export const PULUMI_NODEJS_PARALLEL: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const PULUMI_NODEJS_ROOT_DIRECTORY: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const CONDA_PREFIX: string;
	export const npm_config_userconfig: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const npm_command: string;
	export const PULUMI_NODEJS_PROJECT: string;
	export const PULUMI_CONFIG: string;
	export const SEO_LOCATION: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const PULUMI_NODEJS_SYNC: string;
	export const SST_RESOURCE_MetarankBillingTable: string;
	export const AWS_REGION: string;
	export const PULUMI_DEBUG_COMMANDS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const SST_AWS_REGION: string;
	export const PULUMI_PROJECT: string;
	export const npm_config_node_gyp: string;
	export const _CONDA_ROOT: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const npm_package_version: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const PULUMI_CONFIG_SECRET_KEYS: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const CLERK_SECRET_KEY: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const SST_RESOURCE_MetarankUsers: string;
	export const NVM_BIN: string;
	export const SST_RESOURCE_MetarankApiKeys: string;
	export const PULUMI_HOME: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const PULUMI_BACKEND_URL: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const SST_RESOURCE_App: string;
	export const SST_RESOURCE_MetarankUsageSnapshots: string;
	export const GIT_ASKPASS: string;
	export const SST_SECRET_OPENAI_KEY: string;
	export const OSLogRateLimit: string;
	export const PULUMI_NODEJS_TYPESCRIPT: string;
	export const npm_config_prefix: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const SST_RESOURCE_MetarankAPI: string;
	export const _: string;
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
	export const PUBLIC_CLERK_PUBLISHABLE_KEY: string;
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
		SST_SERVER: string;
		NVM_INC: string;
		SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		SHELL: string;
		TERM: string;
		PULUMI_NODEJS_ORGANIZATION: string;
		SST_AWS_SESSION_TOKEN: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		PULUMI_SKIP_UPDATE_CHECK: string;
		CONDA_SHLVL: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		NODE_OPTIONS: string;
		PULUMI_NODEJS_MONITOR: string;
		ZDOTDIR: string;
		MallocNanoZone: string;
		PULUMI_NODEJS_STACK: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		USER: string;
		PULUMI_NODEJS_ENGINE: string;
		NVM_DIR: string;
		_CONDA_EXE: string;
		SEO_QUERY: string;
		SST_AWS_ACCESS_KEY_ID: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		CONDA_EXE: string;
		npm_config_globalconfig: string;
		OPENAI_KEY: string;
		SSH_AUTH_SOCK: string;
		VSCODE_PROFILE_INITIALIZED: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		SST_AWS_SECRET_ACCESS_KEY: string;
		AWS_PROFILE: string;
		PULUMI_CONFIG_PASSPHRASE: string;
		SST: string;
		_CE_CONDA: string;
		PATH: string;
		PULUMI_NODEJS_PARALLEL: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		PULUMI_NODEJS_ROOT_DIRECTORY: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		CONDA_PREFIX: string;
		npm_config_userconfig: string;
		USER_ZDOTDIR: string;
		PWD: string;
		npm_command: string;
		PULUMI_NODEJS_PROJECT: string;
		PULUMI_CONFIG: string;
		SEO_LOCATION: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		LANG: string;
		PULUMI_NODEJS_SYNC: string;
		SST_RESOURCE_MetarankBillingTable: string;
		AWS_REGION: string;
		PULUMI_DEBUG_COMMANDS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		SST_AWS_REGION: string;
		PULUMI_PROJECT: string;
		npm_config_node_gyp: string;
		_CONDA_ROOT: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		npm_package_version: string;
		VSCODE_INJECTION: string;
		HOME: string;
		PULUMI_CONFIG_SECRET_KEYS: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		CLERK_SECRET_KEY: string;
		HOMEBREW_PREFIX: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		CONDA_DEFAULT_ENV: string;
		SST_RESOURCE_MetarankUsers: string;
		NVM_BIN: string;
		SST_RESOURCE_MetarankApiKeys: string;
		PULUMI_HOME: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		PULUMI_BACKEND_URL: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		SST_RESOURCE_App: string;
		SST_RESOURCE_MetarankUsageSnapshots: string;
		GIT_ASKPASS: string;
		SST_SECRET_OPENAI_KEY: string;
		OSLogRateLimit: string;
		PULUMI_NODEJS_TYPESCRIPT: string;
		npm_config_prefix: string;
		npm_node_execpath: string;
		COLORTERM: string;
		SST_RESOURCE_MetarankAPI: string;
		_: string;
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
		PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
