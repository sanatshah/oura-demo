"use client";

import { Moon } from "lucide-react";
import { sleepStages, today } from "@/lib/mock-data";

const stages = [
  { key: "awake" as const, label: "Awake", color: "#585c6c" },
  { key: "rem" as const, label: "REM", color: "#9b8cff" },
  { key: "light" as const, label: "Light", color: "#6bc4ff" },
  { key: "deep" as const, label: "Deep", color: "#3a55a8" },
];

export function SleepBreakdown() {
  const total = stages.reduce((sum, s) => sum + sleepStages[s.key], 0);
  const hours = Math.floor(today.totalSleepMinutes / 60);
  const minutes = today.totalSleepMinutes % 60;

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-oura-sleep/15 text-oura-sleep grid place-items-center">
            <Moon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm text-ink-300">Last night</p>
            <p className="text-base font-medium">
              {hours}h {minutes}m asleep
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-ink-300">Sleep efficiency</p>
          <p className="text-base font-medium tabular-nums">94%</p>
        </div>
      </div>

      <div className="flex h-3 rounded-full overflow-hidden bg-ink-800">
        {stages.map((s) => (
          <div
            key={s.key}
            style={{
              width: `${(sleepStages[s.key] / total) * 100}%`,
              backgroundColor: s.color,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {stages.map((s) => {
          const minutes = sleepStages[s.key];
          const h = Math.floor(minutes / 60);
          const m = minutes % 60;
          return (
            <div key={s.key}>
              <div className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-xs text-ink-300">{s.label}</span>
              </div>
              <p className="text-sm font-medium tabular-nums mt-1">
                {h > 0 ? `${h}h ` : ""}
                {m}m
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
