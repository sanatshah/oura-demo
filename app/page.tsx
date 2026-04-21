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
import { today, yesterday } from "@/lib/mock-data";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-60">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <Header />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <ScoreRing
              label="Readiness"
              score={today.readiness}
              tone="readiness"
              delta={today.readiness - yesterday.readiness}
              caption="Your body is primed. HRV and resting heart rate both look strong this morning."
            />
            <ScoreRing
              label="Sleep"
              score={today.sleep}
              tone="sleep"
              delta={today.sleep - yesterday.sleep}
              caption="Solid restorative sleep with healthy REM and deep sleep balance."
            />
            <ScoreRing
              label="Activity"
              score={today.activity}
              tone="activity"
              delta={today.activity - yesterday.activity}
              caption="You've met your daily movement goal. Keep the momentum going."
            />
          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <StatCard
              icon={HeartPulse}
              label="Resting HR"
              value={String(today.rhr)}
              unit="bpm"
              trend="-2 bpm"
              trendDirection="up"
              accent="#ff6b9d"
            />
            <StatCard
              icon={Activity}
              label="HRV"
              value={String(today.hrv)}
              unit="ms"
              trend="+4 ms"
              trendDirection="up"
              accent="#6bc4ff"
            />
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
              icon={Wind}
              label="Respiration"
              value={String(today.respiratoryRate)}
              unit="/min"
              trend="Normal"
              trendDirection="neutral"
              accent="#7fdcbe"
            />
            <StatCard
              icon={Footprints}
              label="Steps"
              value={today.steps.toLocaleString()}
              trend="On track"
              trendDirection="up"
              accent="#ff9f6b"
            />
            <StatCard
              icon={Flame}
              label="Active cal"
              value={String(today.activeCalories)}
              unit="kcal"
              trend="+18%"
              trendDirection="up"
              accent="#ff9f6b"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2 space-y-4">
              <TrendChart />
              <HeartRateChart />
            </div>
            <div className="space-y-4">
              <SleepBreakdown />
              <Insights />
            </div>
          </section>

          <footer className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-ink-300">
            <p>Oura demo dashboard · Mock data for illustration</p>
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
