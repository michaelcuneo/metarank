// +server.ts
import { json } from '@sveltejs/kit';
import { generateSeoMeta } from '$lib/utils/generate.js';

export async function POST({ request }) {
	try {
		const data = await request.json();
		const result = await generateSeoMeta(data);
		return json(result);
	} catch (err: any) {
		console.error('Generate error:', err);
		console.error('Cause:', err?.cause);

		return json(
			{
				error: err?.message ?? 'Failed to generate SEO metadata',
				cause: err?.cause ? String(err.cause) : undefined
			},
			{ status: 500 }
		);
	}
}
