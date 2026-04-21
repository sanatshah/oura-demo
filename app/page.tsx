"use client";

import {
  Activity,
  Droplets,
  Flame,
  Footprints,
  HeartPulse,
  Thermometer,
  Wind,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ScoreRing } from "@/components/ScoreRing";
import { StatCard } from "@/components/StatCard";
import { SleepBreakdown } from "@/components/SleepBreakdown";
import { HeartRateChart } from "@/components/HeartRateChart";
import { TrendChart } from "@/components/TrendChart";
import { Insights } from "@/components/Insights";
import { sleepStages, today, yesterday } from "@/lib/mock-data";

export default function Page() {
  const dReadiness = today.readiness - yesterday.readiness;
  const dSleep = today.sleep - yesterday.sleep;
  const dActivity = today.activity - yesterday.activity;
  const dHrv = today.hrv - yesterday.hrv;

  const sleepCaption =
    "Last night felt restorative — your body had room to settle and move through each stage.";
  const readinessCaption =
    dReadiness >= 0
      ? "You feel a little more grounded than yesterday — ease into the day at a pace that fits."
      : "A slightly quieter morning energy — kindness toward yourself counts as movement too.";
  const activityCaption =
    dActivity >= 0
      ? "There is gentle momentum if you want it — follow curiosity rather than a quota."
      : "Rest can be the main character today — save sparkle for when it genuinely calls.";

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-60">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <Header />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <ScoreRing
              label="Sleep"
              score={today.sleep}
              tone="sleep"
              delta={dSleep}
              caption={sleepCaption}
            />
            <ScoreRing
              label="Readiness"
              score={today.readiness}
              tone="readiness"
              delta={dReadiness}
              caption={readinessCaption}
            />
            <ScoreRing
              label="Activity"
              score={today.activity}
              tone="activity"
              delta={dActivity}
              caption={activityCaption}
            />
          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <StatCard
              icon={Thermometer}
              label="Body Temp"
              value={`${today.tempDeviation >= 0 ? "+" : ""}${today.tempDeviation}`}
              unit="°F"
              trend="Baseline"
              trendDirection="neutral"
              accent="#ffd36b"
            />
            <StatCard
              icon={HeartPulse}
              label="Resting HR"
              value={String(today.rhr)}
              unit="bpm"
              trend="-2 bpm"
              trendDirection="up"
              accent="#ff8aa8"
            />
            <StatCard
              icon={Wind}
              label="Respiration"
              value={String(today.respiratoryRate)}
              unit="/min"
              trend="Normal"
              trendDirection="neutral"
              accent="#dcb8e8"
            />
            <StatCard
              icon={Activity}
              label="HRV"
              value={String(today.hrv)}
              unit="ms"
              trend={`${dHrv >= 0 ? "+" : ""}${dHrv} ms`}
              trendDirection={dHrv >= 0 ? "up" : "down"}
              accent="#b8d4ff"
            />
            <StatCard
              icon={Footprints}
              label="Steps"
              value={today.steps.toLocaleString()}
              trend="On track"
              trendDirection="up"
              accent="#ffb088"
            />
            <StatCard
              icon={Flame}
              label="Active cal"
              value={String(today.activeCalories)}
              unit="kcal"
              trend="+18%"
              trendDirection="up"
              accent="#ffb088"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2 space-y-4">
              <SleepBreakdown />
              <TrendChart />
            </div>
            <div className="space-y-4">
              <HeartRateChart />
              <Insights />
            </div>
          </section>

          <footer className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-ink-300">
            <p>Oura demo dashboard · A gentle signal for your day</p>
            <div className="flex items-center gap-1.5">
              <Droplets className="h-3.5 w-3.5" />
              <span>Built with Next.js</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
