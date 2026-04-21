"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Heart } from "lucide-react";
import { hourlyHeartRate, today } from "@/lib/mock-data";

export function HeartRateChart() {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-oura-heart/15 text-oura-heart grid place-items-center">
            <Heart className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm text-ink-300">Heart rate</p>
            <p className="text-base font-medium">Resting · {today.rhr} bpm</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-ink-300">HRV avg</p>
          <p className="text-base font-medium tabular-nums">{today.hrv} ms</p>
        </div>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hourlyHeartRate} margin={{ top: 0, right: 0, left: -32, bottom: 0 }}>
            <XAxis
              dataKey="hour"
              tick={{ fill: "#8b90a2", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={3}
            />
            <YAxis
              tick={{ fill: "#8b90a2", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[40, 90]}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{
                background: "#0f1016",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: "#c4c7d1" }}
            />
            <Bar dataKey="bpm" fill="#ff6b9d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
