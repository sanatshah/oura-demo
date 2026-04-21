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
          <h3 className="text-base font-medium">30-day signal stack</h3>
          <p className="text-xs text-ink-300 mt-0.5">
            Readiness, sleep, activity — catch drift before it shows up as a bad session
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-ink-300">
          <LegendDot color="#f8b4c0" label="Readiness" />
          <LegendDot color="#c9b6ff" label="Sleep" />
          <LegendDot color="#ffb088" label="Activity" />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="readiness-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8b4c0" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#f8b4c0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sleep-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9b6ff" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#c9b6ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="activity-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffb088" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#ffb088" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: "#8b92a8", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={4}
            />
            <YAxis
              domain={[40, 100]}
              tick={{ fill: "#8b92a8", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#221e1a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: "#c5c9d4" }}
            />
            <Area
              type="monotone"
              dataKey="Readiness"
              stroke="#f8b4c0"
              strokeWidth={2}
              fill="url(#readiness-grad)"
            />
            <Area
              type="monotone"
              dataKey="Sleep"
              stroke="#c9b6ff"
              strokeWidth={2}
              fill="url(#sleep-grad)"
            />
            <Area
              type="monotone"
              dataKey="Activity"
              stroke="#ffb088"
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
