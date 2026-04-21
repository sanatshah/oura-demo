"use client";

import { AlertCircle, CheckCircle2, Info, Sparkles } from "lucide-react";
import { insights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneStyles: Record<
  (typeof insights)[number]["tone"],
  { icon: React.ElementType; bg: string; fg: string }
> = {
  positive: { icon: CheckCircle2, bg: "bg-oura-readiness/10", fg: "text-oura-readiness" },
  warning: { icon: AlertCircle, bg: "bg-oura-activity/10", fg: "text-oura-activity" },
  info: { icon: Info, bg: "bg-oura-hrv/10", fg: "text-oura-hrv" },
};

export function Insights() {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-oura-sleep/15 text-oura-sleep grid place-items-center">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-base font-medium">Insights</h3>
          <p className="text-xs text-ink-300">
            Personalized observations from the last 7 days
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((i) => {
          const { icon: Icon, bg, fg } = toneStyles[i.tone];
          return (
            <div
              key={i.id}
              className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
            >
              <div className={cn("h-7 w-7 rounded-lg grid place-items-center flex-shrink-0", bg, fg)}>
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{i.title}</p>
                <p className="text-xs text-ink-300 mt-1 leading-relaxed">
                  {i.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
