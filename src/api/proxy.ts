import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const backendBase = 'http://217.147.233.62';
  const targetUrl = `${backendBase}${req.url?.replace('/api/proxy', '')}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers as Record<string, string>),
      },
      body:
        req.method !== 'GET' && req.body ? JSON.stringify(req.body) : undefined,
    });

    const contentType =
      response.headers.get('content-type') || 'application/json';
    res.setHeader('Content-Type', contentType);
    res.status(response.status).send(await response.text());
  } catch (error: any) {
    res.status(500).json({ message: 'Proxy error', error: error.message });
  }
}
