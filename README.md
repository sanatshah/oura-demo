# Oura Health Dashboard

A demo health dashboard inspired by the Oura Ring experience. Built with Next.js 15, TypeScript, Tailwind CSS, and Recharts.

## Features

- **Ring-style score cards** for Readiness, Sleep, and Activity with animated progress arcs
- **Vital stats** — resting heart rate, HRV, body temperature, respiration, steps, active calories
- **Sleep stage breakdown** (awake, REM, light, deep)
- **24-hour heart rate** bar chart
- **30-day trend chart** for readiness/sleep/activity
- **Personalized insights** panel
- Dark, minimal UI with subtle gradients — intended to feel like the Oura app

All data is mocked and deterministic. See `lib/mock-data.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx         root layout
  page.tsx           dashboard composition
  globals.css        tailwind + base styling
components/
  Sidebar.tsx        left nav
  Header.tsx         top bar with ring connection status
  ScoreRing.tsx      animated SVG score arcs
  StatCard.tsx       compact vital stat tiles
  SleepBreakdown.tsx sleep stage stacked bar
  HeartRateChart.tsx 24h BPM bars
  TrendChart.tsx     30-day area chart
  Insights.tsx       personalized coaching cards
lib/
  mock-data.ts       deterministic demo dataset
  utils.ts           cn() helper
```

## Next steps for a real demo

- Connect to the [Oura Cloud API](https://cloud.ouraring.com/docs) using a personal access token
- Replace `lib/mock-data.ts` with server components that fetch `/v2/usercollection/*` endpoints
- Add OAuth for multi-user demos
- Add period selectors (day / week / month) and deep-link routes per tab
