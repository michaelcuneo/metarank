export const getEnv = async (key: string): Promise<string> => {
	try {
		const envModule = await import('$env/static/private');
		if (key in envModule) return String(envModule[key as keyof typeof envModule]);
	} catch {
		// not in SvelteKit build context
	}
	return process.env[key] ?? '';
};
