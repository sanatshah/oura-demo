"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { metrics } from "@/lib/mock-data";

const data = metrics.map((m) => ({
  date: new Date(m.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  }),
  Readiness: m.readiness,
  Sleep: m.sleep,
  Activity: m.activity,
}));

export function TrendChart() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-medium">30-day trends</h3>
          <p className="text-xs text-ink-300 mt-0.5">
            Readiness, sleep, and activity scores
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-ink-300">
          <LegendDot color="#7fdcbe" label="Readiness" />
          <LegendDot color="#9b8cff" label="Sleep" />
          <LegendDot color="#ff9f6b" label="Activity" />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="readiness-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7fdcbe" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7fdcbe" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sleep-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9b8cff" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#9b8cff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="activity-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff9f6b" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#ff9f6b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: "#8b90a2", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={4}
            />
            <YAxis
              domain={[40, 100]}
              tick={{ fill: "#8b90a2", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#0f1016",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: "#c4c7d1" }}
            />
            <Area
              type="monotone"
              dataKey="Readiness"
              stroke="#7fdcbe"
              strokeWidth={2}
              fill="url(#readiness-grad)"
            />
            <Area
              type="monotone"
              dataKey="Sleep"
              stroke="#9b8cff"
              strokeWidth={2}
              fill="url(#sleep-grad)"
            />
            <Area
              type="monotone"
              dataKey="Activity"
              stroke="#ff9f6b"
              strokeWidth={2}
              fill="url(#activity-grad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}
