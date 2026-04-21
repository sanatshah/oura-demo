"use client";

import { AlertCircle, CheckCircle2, Info, Sparkles } from "lucide-react";
import { insights, sleepStages } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneStyles: Record<
  (typeof insights)[number]["tone"],
  { icon: React.ElementType; bg: string; fg: string }
> = {
  positive: { icon: CheckCircle2, bg: "bg-oura-readiness/10", fg: "text-oura-readiness" },
  warning: { icon: AlertCircle, bg: "bg-oura-activity/10", fg: "text-oura-activity" },
  info: { icon: Info, bg: "bg-oura-hrv/10", fg: "text-oura-hrv" },
};

function gentleNotesFor(
  id: string,
  fallback: { title: string; detail: string }
): { title: string; detail: string } {
  const deep = sleepStages.deep;
  const deepHm = `${Math.floor(deep / 60)}h${String(deep % 60).padStart(2, "0")}m`;
  const byId: Record<string, { title: string; detail: string }> = {
    recovery: {
      title: `About ${deepHm} of deep sleep — your body had a soft runway for repair`,
      detail:
        "When deep sleep shows up like this, you might feel a little more patient with yourself tomorrow. No need to optimize — just notice.",
    },
    "sleep-consistency": {
      title: "Sleep has felt steady this week — a sweet moment to pause and name what's working",
      detail:
        "Rhythm doesn’t have to be perfect to be kind. If you journal today, a single line about last night could be enough.",
    },
    temp: {
      title: "Temperature is drifting warmer — sometimes that lines up with a shift in your cycle or energy",
      detail:
        "Pair the number with a feeling: calm, tender, tired, hopeful. Screenshots love context, and so does your future self.",
    },
  };
  return byId[id] ?? fallback;
}

export function Insights() {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-oura-readiness/15 text-oura-readiness grid place-items-center">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-base font-medium">Gentle notes</h3>
          <p className="text-xs text-ink-300">
            A few reflective prompts from your last few nights — no pressure to act on any of them
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((i) => {
          const { icon: Icon, bg, fg } = toneStyles[i.tone];
          const display = gentleNotesFor(i.id, { title: i.title, detail: i.detail });
          return (
            <div
              key={i.id}
              className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
            >
              <div className={cn("h-7 w-7 rounded-lg grid place-items-center flex-shrink-0", bg, fg)}>
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{display.title}</p>
                <p className="text-xs text-ink-300 mt-1 leading-relaxed">
                  {display.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
