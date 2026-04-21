"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  unit?: string;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  accent?: string;
};

export function StatCard({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  trendDirection = "neutral",
  accent = "#c4c7d1",
}: Props) {
  return (
    <div className="card card-hover p-5">
      <div className="flex items-start justify-between">
        <div
          className="h-9 w-9 rounded-lg grid place-items-center"
          style={{
            backgroundColor: `${accent}15`,
            color: accent,
          }}
        >
          <Icon className="h-4 w-4" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-[11px] px-2 py-0.5 rounded-full",
              trendDirection === "up" && "bg-oura-readiness/10 text-oura-readiness",
              trendDirection === "down" && "bg-oura-heart/10 text-oura-heart",
              trendDirection === "neutral" && "bg-white/5 text-ink-300"
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <p className="text-xs text-ink-300 mt-4">{label}</p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tabular-nums tracking-tight">
          {value}
        </span>
        {unit && <span className="text-xs text-ink-300">{unit}</span>}
      </div>
    </div>
  );
}
