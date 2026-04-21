export type DailyMetric = {
  date: string;
  readiness: number;
  sleep: number;
  activity: number;
  rhr: number;
  hrv: number;
  tempDeviation: number;
  respiratoryRate: number;
  steps: number;
  activeCalories: number;
  totalSleepMinutes: number;
};

const seeded = (seed: number) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function generate(): DailyMetric[] {
  const out: DailyMetric[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const base = 30 - i;
    const readiness = Math.round(72 + seeded(base * 1.1) * 22);
    const sleep = Math.round(70 + seeded(base * 1.7) * 25);
    const activity = Math.round(65 + seeded(base * 2.3) * 30);
    const rhr = Math.round(52 + seeded(base * 3.1) * 8);
    const hrv = Math.round(48 + seeded(base * 4.2) * 28);
    const tempDeviation = +(seeded(base * 5.5) * 0.6 - 0.3).toFixed(2);
    const respiratoryRate = +(13.5 + seeded(base * 6.1) * 2.5).toFixed(1);
    const steps = Math.round(4500 + seeded(base * 7.9) * 7500);
    const activeCalories = Math.round(280 + seeded(base * 8.3) * 520);
    const totalSleepMinutes = Math.round(380 + seeded(base * 9.6) * 120);
    out.push({
      date: d.toISOString().slice(0, 10),
      readiness,
      sleep,
      activity,
      rhr,
      hrv,
      tempDeviation,
      respiratoryRate,
      steps,
      activeCalories,
      totalSleepMinutes,
    });
  }
  return out;
}

export const metrics: DailyMetric[] = generate();
export const today: DailyMetric = metrics[metrics.length - 1];
export const yesterday: DailyMetric = metrics[metrics.length - 2];

export const sleepStages = {
  awake: 22,
  rem: 98,
  light: 214,
  deep: 82,
};

export const hourlyHeartRate = Array.from({ length: 24 }, (_, h) => {
  const base = h < 6 ? 52 : h < 22 ? 68 : 58;
  return {
    hour: `${h}:00`,
    bpm: Math.round(base + seeded(h * 1.3) * 14),
  };
});

export const weeklyActivity = metrics.slice(-7).map((m) => ({
  day: new Date(m.date).toLocaleDateString("en-US", { weekday: "short" }),
  steps: m.steps,
  calories: m.activeCalories,
}));

export const insights = [
  {
    id: "recovery",
    title: "Your body is well recovered",
    detail:
      "HRV trended 12% above your 14-day baseline last night, and resting heart rate was low. Consider a higher-intensity workout today.",
    tone: "positive" as const,
  },
  {
    id: "sleep-consistency",
    title: "Sleep timing is drifting later",
    detail:
      "Bedtime has shifted 42 minutes later this week. Going to bed earlier tonight could improve tomorrow's readiness.",
    tone: "warning" as const,
  },
  {
    id: "temp",
    title: "Skin temperature slightly elevated",
    detail:
      "+0.4°F above baseline for two consecutive nights. Monitor for signs of illness or late-day strain.",
    tone: "info" as const,
  },
];
