
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
	export const AWS_REGION: string;
	export const OPENAI_API_KEY: string;
	export const SEO_LOCATION: string;
	export const SEO_QUERY: string;
	export const CLERK_SECRET_KEY: string;
	export const NVM_INC: string;
	export const SST_SERVER: string;
	export const SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const SHELL: string;
	export const PULUMI_NODEJS_ORGANIZATION: string;
	export const TERM: string;
	export const SST_AWS_SESSION_TOKEN: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const PULUMI_SKIP_UPDATE_CHECK: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const FPATH: string;
	export const PULUMI_NODEJS_MONITOR: string;
	export const NODE_OPTIONS: string;
	export const ZDOTDIR: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const PULUMI_NODEJS_STACK: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const SST_SECRET_METARANK_UNLIMITED_USER_ID: string;
	export const AI_AGENT: string;
	export const GIT_EDITOR: string;
	export const COPILOT_DEBUG_NONCE: string;
	export const USER: string;
	export const PULUMI_NODEJS_ENGINE: string;
	export const NVM_DIR: string;
	export const _CONDA_EXE: string;
	export const COMMAND_MODE: string;
	export const SST_AWS_ACCESS_KEY_ID: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const SSH_AUTH_SOCK: string;
	export const OPENAI_KEY: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const SST_AWS_SECRET_ACCESS_KEY: string;
	export const npm_execpath: string;
	export const AWS_PROFILE: string;
	export const PULUMI_CONFIG_PASSPHRASE: string;
	export const SST_SECRET_CLERK_SECRET_KEY: string;
	export const SST: string;
	export const _CE_CONDA: string;
	export const METARANK_UNLIMITED_USER_ID: string;
	export const PATH: string;
	export const PULUMI_NODEJS_PARALLEL: string;
	export const npm_package_json: string;
	export const PULUMI_NODEJS_ROOT_DIRECTORY: string;
	export const npm_config_engine_strict: string;
	export const npm_config_init_module: string;
	export const CONDA_PREFIX: string;
	export const npm_config_userconfig: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const npm_command: string;
	export const PWD: string;
	export const PULUMI_NODEJS_PROJECT: string;
	export const npm_lifecycle_event: string;
	export const PULUMI_CONFIG: string;
	export const EDITOR: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const PYTHONSTARTUP: string;
	export const PULUMI_NODEJS_SYNC: string;
	export const SST_RESOURCE_MetarankBillingTable: string;
	export const SST_AWS_REGION: string;
	export const PULUMI_DEBUG_COMMANDS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_config_npm_version: string;
	export const PULUMI_PROJECT: string;
	export const GIT_MERGE_AUTOEDIT: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const _CONDA_ROOT: string;
	export const _CE_M: string;
	export const npm_package_version: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const PULUMI_CONFIG_SECRET_KEYS: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const PYTHON_BASIC_REPL: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const DEBIAN_FRONTEND: string;
	export const NVM_BIN: string;
	export const SST_RESOURCE_MetarankApiKeys: string;
	export const SST_RESOURCE_MetarankUsers: string;
	export const CONDA_DEFAULT_ENV: string;
	export const PULUMI_HOME: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const SST_RESOURCE_App: string;
	export const PULUMI_BACKEND_URL: string;
	export const SST_RESOURCE_MetarankUsageSnapshots: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const COPILOT_AGENT: string;
	export const SST_SECRET_OPENAI_KEY: string;
	export const OSLogRateLimit: string;
	export const GIT_PAGER: string;
	export const PULUMI_NODEJS_TYPESCRIPT: string;
	export const SST_RESOURCE_MetarankAPI: string;
	export const COLORTERM: string;
	export const npm_config_prefix: string;
	export const npm_node_execpath: string;
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
		AWS_REGION: string;
		OPENAI_API_KEY: string;
		SEO_LOCATION: string;
		SEO_QUERY: string;
		CLERK_SECRET_KEY: string;
		NVM_INC: string;
		SST_SERVER: string;
		SST_SECRET_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		SHELL: string;
		PULUMI_NODEJS_ORGANIZATION: string;
		TERM: string;
		SST_AWS_SESSION_TOKEN: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		PULUMI_SKIP_UPDATE_CHECK: string;
		CONDA_PROMPT_MODIFIER: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		TERM_PROGRAM_VERSION: string;
		FPATH: string;
		PULUMI_NODEJS_MONITOR: string;
		NODE_OPTIONS: string;
		ZDOTDIR: string;
		MallocNanoZone: string;
		COLOR: string;
		PULUMI_NODEJS_STACK: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		SST_SECRET_METARANK_UNLIMITED_USER_ID: string;
		AI_AGENT: string;
		GIT_EDITOR: string;
		COPILOT_DEBUG_NONCE: string;
		USER: string;
		PULUMI_NODEJS_ENGINE: string;
		NVM_DIR: string;
		_CONDA_EXE: string;
		COMMAND_MODE: string;
		SST_AWS_ACCESS_KEY_ID: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		SSH_AUTH_SOCK: string;
		OPENAI_KEY: string;
		__CF_USER_TEXT_ENCODING: string;
		VSCODE_PROFILE_INITIALIZED: string;
		SST_AWS_SECRET_ACCESS_KEY: string;
		npm_execpath: string;
		AWS_PROFILE: string;
		PULUMI_CONFIG_PASSPHRASE: string;
		SST_SECRET_CLERK_SECRET_KEY: string;
		SST: string;
		_CE_CONDA: string;
		METARANK_UNLIMITED_USER_ID: string;
		PATH: string;
		PULUMI_NODEJS_PARALLEL: string;
		npm_package_json: string;
		PULUMI_NODEJS_ROOT_DIRECTORY: string;
		npm_config_engine_strict: string;
		npm_config_init_module: string;
		CONDA_PREFIX: string;
		npm_config_userconfig: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		npm_command: string;
		PWD: string;
		PULUMI_NODEJS_PROJECT: string;
		npm_lifecycle_event: string;
		PULUMI_CONFIG: string;
		EDITOR: string;
		LANG: string;
		npm_package_name: string;
		PYTHONSTARTUP: string;
		PULUMI_NODEJS_SYNC: string;
		SST_RESOURCE_MetarankBillingTable: string;
		SST_AWS_REGION: string;
		PULUMI_DEBUG_COMMANDS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_config_npm_version: string;
		PULUMI_PROJECT: string;
		GIT_MERGE_AUTOEDIT: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		_CONDA_ROOT: string;
		_CE_M: string;
		npm_package_version: string;
		VSCODE_INJECTION: string;
		HOME: string;
		PULUMI_CONFIG_SECRET_KEYS: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		PYTHON_BASIC_REPL: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		DEBIAN_FRONTEND: string;
		NVM_BIN: string;
		SST_RESOURCE_MetarankApiKeys: string;
		SST_RESOURCE_MetarankUsers: string;
		CONDA_DEFAULT_ENV: string;
		PULUMI_HOME: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		SST_RESOURCE_App: string;
		PULUMI_BACKEND_URL: string;
		SST_RESOURCE_MetarankUsageSnapshots: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		COPILOT_AGENT: string;
		SST_SECRET_OPENAI_KEY: string;
		OSLogRateLimit: string;
		GIT_PAGER: string;
		PULUMI_NODEJS_TYPESCRIPT: string;
		SST_RESOURCE_MetarankAPI: string;
		COLORTERM: string;
		npm_config_prefix: string;
		npm_node_execpath: string;
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
