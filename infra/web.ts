import { metarankApi } from './api';
import { OpenAIKey } from './config';
import { usersTable, billingTable, usageSnapshotsTable, apiKeysTable } from './tables';

const clerkPublishableKey =
	$app.stage === 'production'
		? process.env.PUBLIC_CLERK_PUBLISHABLE_KEY_PROD
		: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY_DEV;

const clerkSecretKey =
	$app.stage === 'production'
		? process.env.CLERK_SECRET_KEY_PROD
		: process.env.CLERK_SECRET_KEY_DEV;

export const web = new sst.aws.SvelteKit('MetarankFrontend', {
	path: './packages/frontend',
	domain: {
		name: 'metarank.dev'
	},
	link: [metarankApi, usersTable, billingTable, usageSnapshotsTable, apiKeysTable, billingTable],
	environment: {
		PUBLIC_CLERK_PUBLISHABLE_KEY: clerkPublishableKey!,
		CLERK_SECRET_KEY: clerkSecretKey!,
		OPENAI_KEY: OpenAIKey.value
	},
	permissions: [
		{
			actions: ['*'],
			resources: ['*']
		}
	],
	invalidation: {
		paths: ['/*']
	}
});
