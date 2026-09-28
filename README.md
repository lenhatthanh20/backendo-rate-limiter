# Rate Limiter

Your starting point for the Backendo "Build your own Rate Limiter" challenge.

- `start.sh` starts your server. The grader runs it with `PORT`, `ALGORITHM`,
  `RATE_LIMIT` and `WINDOW_MS` set. Change it if you use another language.
- `src/server.ts` already answers `GET /health` and `GET /api/resource`. Your job
  is to add rate limiting, one stage at a time.

Run it yourself (Node.js 22.18 or newer):

```sh
PORT=3000 ALGORITHM=fixed_window RATE_LIMIT=5 WINDOW_MS=1000 ./start.sh
curl -i -H 'X-Client-Id: me' http://localhost:3000/api/resource
```

Push to submit. Each push runs the tests for every stage you have unlocked.
