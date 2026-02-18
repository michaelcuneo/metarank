// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'seo-genius',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			protect: ['production'].includes(input?.stage),
			home: 'aws',
			providers: {
				aws: {
					region: 'ap-southeast-2',
					profile: 'default'
				}
			}
		};
	},
	async run() {
		const web = new sst.aws.SvelteKit('MyWeb', {
			path: './packages/frontend',
			domain: {
				name: 'seo-genius.michaelcuneo.com.au'
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

    return {
      web: web.url,
    };
  },
});
