export function ok(body: unknown, headers: Record<string, string> = {}) {
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			...headers
		},
		body: JSON.stringify(body)
	};
}

export function error(statusCode: number, message: string) {
	return {
		statusCode,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ error: message })
	};
}

export function badRequest(message: string) {
	return error(400, message);
}

export function unauthorized(message = 'Unauthorized') {
	return error(401, message);
}

export function forbidden(message = 'Forbidden') {
	return error(403, message);
}

export function tooManyRequests(message = 'Rate limit exceeded') {
	return error(429, message);
}

export function internalError(message = 'Internal server error') {
	return error(500, message);
}