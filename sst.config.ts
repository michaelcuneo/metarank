// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'metarank',
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
		import('./infra/config');
		import('./infra/api');
		import('./infra/tables');
		const web = await import('./infra/web');

    return {
      web: web.web.url,
    };
  },
});
