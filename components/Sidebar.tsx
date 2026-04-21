"use client";

import {
  Activity,
  Heart,
  Home,
  Moon,
  Settings,
  Sparkles,
  Thermometer,
  TrendingUp,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Today", icon: Home, active: true },
  { label: "Readiness", icon: Sparkles },
  { label: "Sleep", icon: Moon },
  { label: "Activity", icon: Activity },
  { label: "Heart", icon: Heart },
  { label: "Body", icon: Thermometer },
  { label: "Trends", icon: TrendingUp },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-60 flex-col border-r border-white/[0.06] bg-ink-900/60 backdrop-blur-xl p-5 z-20">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-oura-readiness via-oura-sleep to-oura-activity p-[2px]">
          <div className="h-full w-full rounded-full bg-ink-950 flex items-center justify-center">
            <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-oura-readiness to-oura-sleep" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight">Oura</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
            Ring Gen 4
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition",
              item.active
                ? "bg-white/5 text-ink-100"
                : "text-ink-300 hover:bg-white/[0.03] hover:text-ink-100"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-white/[0.06] pt-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-ink-300 hover:bg-white/[0.03] hover:text-ink-100">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-ink-300 hover:bg-white/[0.03] hover:text-ink-100">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
