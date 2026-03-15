export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-96x96.png","favicon.ico","favicon.svg","site.webmanifest","web-app-manifest-192x192.png","web-app-manifest-512x512.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.BW1MGsIm.js",app:"_app/immutable/entry/app.CwQWSkyV.js",imports:["_app/immutable/entry/start.BW1MGsIm.js","_app/immutable/chunks/DthANRhZ.js","_app/immutable/chunks/0x5NZaKt.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/entry/app.CwQWSkyV.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0x5NZaKt.js","_app/immutable/chunks/XWLQnX6V.js","_app/immutable/chunks/Mh1E_Pax.js","_app/immutable/chunks/Bl4hTET8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/account",
				pattern: /^\/api\/account\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/account/_server.ts.js'))
			},
			{
				id: "/api/account/internal/sync",
				pattern: /^\/api\/account\/internal\/sync\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/account/internal/sync/_server.ts.js'))
			},
			{
				id: "/api/billing",
				pattern: /^\/api\/billing\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/billing/_server.ts.js'))
			},
			{
				id: "/api/generate",
				pattern: /^\/api\/generate\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/generate/_server.ts.js'))
			},
			{
				id: "/api/keys",
				pattern: /^\/api\/keys\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/keys/_server.ts.js'))
			},
			{
				id: "/api/keys/[keyId]",
				pattern: /^\/api\/keys\/([^/]+?)\/?$/,
				params: [{"name":"keyId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/keys/_keyId_/_server.ts.js'))
			},
			{
				id: "/api/status",
				pattern: /^\/api\/status\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/status/_server.ts.js'))
			},
			{
				id: "/api/usage",
				pattern: /^\/api\/usage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/usage/_server.ts.js'))
			},
			{
				id: "/api/usage/history",
				pattern: /^\/api\/usage\/history\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/usage/history/_server.ts.js'))
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/api-keys",
				pattern: /^\/dashboard\/api-keys\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dashboard/billing",
				pattern: /^\/dashboard\/billing\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard/generate",
				pattern: /^\/dashboard\/generate\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/usage",
				pattern: /^\/dashboard\/usage\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
