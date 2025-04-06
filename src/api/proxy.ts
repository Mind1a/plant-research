export default async function handler(req: any, res: any) {
  const backendBase = 'http://217.147.233.62';
  const url = req.url?.replace('/api/proxy', '') || '';
  const targetUrl = `${backendBase}${url}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...Object.fromEntries(
          Object.entries(req.headers).filter(
            ([key]) => key.toLowerCase() !== 'host'
          )
        ),
      } as HeadersInit,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const contentType =
      response.headers.get('content-type') || 'application/json';
    const raw = await response.text();

    res.setHeader('Content-Type', contentType);
    res.status(response.status).send(raw);
  } catch (error: any) {
    res.status(500).json({ message: 'Proxy error', error: error.message });
  }
}
