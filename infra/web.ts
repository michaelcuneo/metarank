import { metarankApi } from './api';
import { ClerkPublishableKey, ClerkSecretKey, OpenAIKey, UnlimitedUserId } from './config';
import { usersTable, billingTable, usageSnapshotsTable, apiKeysTable } from './tables';

export const web = new sst.aws.SvelteKit('MetarankFrontend', {
	path: './packages/frontend',
	domain: {
		name: 'metarank.dev'
	},
	link: [metarankApi, usersTable, billingTable, usageSnapshotsTable, apiKeysTable, billingTable],
	environment: {
		PUBLIC_CLERK_PUBLISHABLE_KEY: ClerkPublishableKey.value,
		CLERK_SECRET_KEY: ClerkSecretKey.value,
		OPENAI_KEY: OpenAIKey.value,
		METARANK_UNLIMITED_USER_ID: UnlimitedUserId.value
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
