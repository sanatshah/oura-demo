"use client";

import { cn } from "@/lib/utils";

type Props = {
  label: string;
  score: number;
  tone: "readiness" | "sleep" | "activity";
  caption: string;
  delta?: number;
};

const gradients: Record<Props["tone"], [string, string]> = {
  readiness: ["#7fdcbe", "#3aa88a"],
  sleep: ["#9b8cff", "#6553d4"],
  activity: ["#ff9f6b", "#e06a3e"],
};

export function ScoreRing({ label, score, tone, caption, delta }: Props) {
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const [from, to] = gradients[tone];
  const gid = `grad-${tone}`;

  return (
    <div className="card card-hover p-6 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-4">
        <span className="text-sm text-ink-300">{label}</span>
        {typeof delta === "number" && (
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              delta >= 0
                ? "bg-oura-readiness/10 text-oura-readiness"
                : "bg-oura-heart/10 text-oura-heart"
            )}
          >
            {delta >= 0 ? "+" : ""}
            {delta}
          </span>
        )}
      </div>

      <div className="relative h-44 w-44">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
          <defs>
            <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r={radius}
            strokeWidth="10"
            fill="none"
            className="ring-track"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            strokeWidth="10"
            fill="none"
            stroke={`url(#${gid})`}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 800ms ease" }}
          />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-4xl font-semibold tracking-tight tabular-nums">
              {score}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-300 mt-1">
              {scoreWord(score)}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-ink-300 mt-4 text-center leading-relaxed max-w-[14rem]">
        {caption}
      </p>
    </div>
  );
}

function scoreWord(n: number) {
  if (n >= 85) return "Optimal";
  if (n >= 70) return "Good";
  if (n >= 60) return "Fair";
  return "Pay Attention";
}
