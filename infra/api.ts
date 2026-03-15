import {
	usersTable,
	usageSnapshotsTable,
	billingTable,
	apiKeysTable,
	seoCacheTable,
	seoLocksTable
} from './tables';
import { OpenAIKey, ClerkPublishableKey } from './config';
import { domain } from './domain.js';

const isProd = $app.stage === 'production';

const metarankApi = new sst.aws.ApiGatewayV2('MetarankAPI', {
	link: [
		usersTable,
		usageSnapshotsTable,
		billingTable,
		apiKeysTable,
		seoCacheTable,
		seoLocksTable,
		OpenAIKey,
		ClerkPublishableKey
	],
	...(isProd && {
		domain: {
			name: domain({ subdomain: 'api' })
		}
	}),
	cors: {
		allowMethods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
		allowOrigins: ['*'],
		allowHeaders: ['*']
	},
	transform: {
		route: {
			handler: (args) => {
				args.memory ??= '256 MB';
			}
		}
	}
});

metarankApi.route('GET /health', './handlers/health.handler');
metarankApi.route('POST /v1/seo/meta', './handlers/seo-generate-meta.handler');

export { metarankApi };
