import type { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { generateSeoMeta } from './generate.js';

export const lambdaHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	try {
		const body = JSON.parse(event.body || '{}');
		const result = await generateSeoMeta(body);
		return {
			statusCode: 200,
			body: JSON.stringify(result)
		};
	} catch (err) {
		console.error('SEO lambda error:', err);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Internal error' })
		};
	}
};
