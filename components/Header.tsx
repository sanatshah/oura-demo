"use client";

import { Battery, Bell, ChevronDown, Wifi } from "lucide-react";

export function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink-300">
          {today}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mt-1">
          Good morning, Sunny
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-full bg-ink-850/60 border border-white/5 text-xs text-ink-300">
          <div className="flex items-center gap-1.5">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-oura-readiness opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-oura-readiness" />
            </div>
            <span>Ring connected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Battery className="h-3.5 w-3.5" />
            <span>87%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3.5 w-3.5" />
            <span>Synced 2m ago</span>
          </div>
        </div>

        <button className="h-10 w-10 grid place-items-center rounded-full bg-ink-850/60 border border-white/5 hover:bg-ink-800 transition">
          <Bell className="h-4 w-4 text-ink-200" />
        </button>

        <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-ink-850/60 border border-white/5 hover:bg-ink-800 transition">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-oura-sleep to-oura-heart grid place-items-center text-xs font-semibold">
            SD
          </div>
          <span className="text-sm">Sunny</span>
          <ChevronDown className="h-3.5 w-3.5 text-ink-300" />
        </button>
      </div>
    </header>
  );
}
