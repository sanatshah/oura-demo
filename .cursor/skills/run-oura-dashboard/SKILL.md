---
name: run-oura-dashboard
description: Start, stop, and verify the local Oura Health Dashboard Next.js dev server on http://localhost:3000. Use when the user asks to run, start, launch, serve, preview, or boot the Oura dashboard app, or asks why the dashboard isn't loading locally.
---

# Run Oura Health Dashboard

Starts the Next.js dev server for this repo (`oura-health-dashboard`) on `http://localhost:3000`, verifies it is serving, and hands the user a URL. Also covers production builds and common failure modes.

## Quick start (dev server)

1. Check for an already-running dev server before spawning a new one.
   - Read the terminals folder first; if any terminal shows `next dev` still running on port 3000, reuse it instead of launching another.
   - Otherwise, from the repo root:

```bash
npm install --no-audit --no-fund
npm run dev
```

2. Launch `npm run dev` as a **backgrounded** shell (`block_until_ms: 0`) so the dev server keeps running. Then poll the terminal file until you see a ready line like `Ready in` or `Local:   http://localhost:3000` before telling the user it is up.

3. Once ready, report the URL (`http://localhost:3000`) to the user. Do not open a browser automatically unless asked.

### Port already in use

If port 3000 is taken, Next.js will auto-pick the next free port and print it. Surface whatever port the ready line reports — do not assume 3000. If the user wants a specific port:

```bash
npm run dev -- -p 3005
```

## Production-style run

Only use this when the user asks for a production build / preview, not for normal "run the app":

```bash
npm run build
npm run start
```

`npm run start` also defaults to port 3000. Background it the same way as `dev`.

## Stopping the server

- Prefer killing the backgrounded shell task by its pid (shown in the terminal file header).
- Do not leave multiple `next dev` processes running across turns; before starting a new one, check the terminals folder.

## Verification checklist

After starting, confirm the app is actually serving before declaring success:

- [ ] Terminal output contains `Ready in` (or `started server on`)
- [ ] `curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:3000` returns `200`
- [ ] No unhandled errors appear in the terminal during the first request

If `curl` returns non-200 or the terminal shows a stack trace, read the error from the terminal file and fix before reporting "running".

## Common failure modes

- **`next: command not found`** → dependencies weren't installed. Run `npm install` from the repo root, then retry.
- **Node version errors from Next.js 16** → this repo targets Node.js 20+. If the user is on an older version, ask them to upgrade (Node 24 LTS recommended) before retrying.
- **Tailwind / PostCSS build error on first request** → usually a stale `.next/` cache. Stop the server, run `rm -rf .next`, then `npm run dev` again.
- **`EADDRINUSE` on 3000** → another dev server is already bound. Either reuse that terminal or start on a different port (`npm run dev -- -p 3005`).
- **Blank page / hydration error** → check the terminal for the first error line; almost always a component in `components/` or `app/page.tsx`. Do not restart the server; fix the code and let Fast Refresh reload.

## Repo facts worth remembering

- Framework: Next.js 16 (App Router), React 18, TypeScript, Tailwind, Recharts.
- Scripts (from `package.json`): `dev`, `build`, `start`, `lint`. There is no test script.
- Data is fully mocked in `lib/mock-data.ts` — no env vars, no API keys, no database, no auth. The app should run with zero configuration after `npm install`.
- Entry point: `app/page.tsx` composes the dashboard from components in `components/`.

## Do / don't

- Do reuse an existing `next dev` terminal if one is already running.
- Do background the dev server and poll for readiness instead of blocking on it.
- Do report the exact URL and port Next.js printed.
- Don't run `npm run build` when the user just said "run the app" — use `npm run dev`.
- Don't add env files or API wiring; this app is intentionally mock-only.
