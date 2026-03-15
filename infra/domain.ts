const rootDomain = 'metarank.dev';
const stageDomain = $app.stage === 'production' ? rootDomain : `${$app.stage}.${rootDomain}`;

export function domain({ subdomain, path }: { subdomain?: string; path?: string }) {
	let finalUrl = stageDomain;

	if (subdomain) {
		finalUrl = `${subdomain}.${finalUrl}`;
	}

	if (path) {
		finalUrl = `${finalUrl}${!path.startsWith('/') ? '/' : ''}${path}`;
	}

	return finalUrl;
}
