import {
	usersTable,
  usageSnapshotsTable,
	billingTable,
	apiKeysTable,
	seoCacheTable
} from './tables';
import { OpenAIKey, ClerkPublishableKey } from './config';

const metarankApi = new sst.aws.ApiGatewayV2('MetarankAPI', {
	link: [
		usersTable,
		usageSnapshotsTable,
		billingTable,
		apiKeysTable,
		seoCacheTable,
		OpenAIKey,
		ClerkPublishableKey
	],
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