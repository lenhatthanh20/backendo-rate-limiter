import { createServer, type ServerResponse } from 'node:http';

const port = Number(process.env.PORT ?? 3000);

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

const server = createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');

  if (req.method === 'GET' && url.pathname === '/health') {
    sendJson(res, 200, { status: 'ok' });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/resource') {
    // TODO: rate limit this endpoint. Start with stages/01-fixed-window.md.
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: 'not_found' });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
