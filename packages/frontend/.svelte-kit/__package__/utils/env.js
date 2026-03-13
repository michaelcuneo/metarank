export const getEnv = async (key) => {
    try {
        const envModule = await import('$env/static/private');
        if (key in envModule)
            return String(envModule[key]);
    }
    catch {
        // not in SvelteKit build context
    }
    return process.env[key] ?? '';
};
