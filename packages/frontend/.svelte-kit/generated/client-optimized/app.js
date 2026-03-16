export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/ai-seo-api": [5],
		"/dashboard": [~6,[2]],
		"/dashboard/api-keys": [~7,[2]],
		"/dashboard/billing": [~8,[2]],
		"/dashboard/generate": [~9,[2]],
		"/dashboard/usage": [~10,[2]],
		"/docs": [11],
		"/meta-description-generator": [12],
		"/meta-title-generator": [13],
		"/pricing": [14],
		"/search-intent-api": [15],
		"/seo-metadata-api": [16],
		"/seo-tools": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';