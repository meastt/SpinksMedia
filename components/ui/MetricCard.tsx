"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export const MetricCard = ({
  icon: Icon,
  label,
  value,
  className,
}: MetricCardProps) => {
  return (
    <div
      className={cn(
        "bg-[var(--color-gold-light)] rounded-2xl p-5 shadow-lg w-[260px] relative overflow-hidden group",
        className
      )}
    >
      {/* Decorative Diagonal Stripe */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 -rotate-45 translate-x-12 -translate-y-12 transition-transform group-hover:translate-x-10 group-hover:-translate-y-10" />

      <div className="flex flex-col gap-1 relative z-10">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-terracotta" />
          <span className="text-xs uppercase tracking-widest font-medium text-muted font-dm-sans">
            {label}
          </span>
        </div>
        <div className="text-3xl font-bold text-black font-oswald mt-1">
          {value}
        </div>
      </div>

      {/* Upward-Trending Sparkline */}
      <div className="mt-4 relative z-10">
        <svg
          viewBox="0 0 100 30"
          className="w-full h-8 fill-none"
        >
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-terracotta)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--color-terracotta)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Fill area under the line */}
          <path
            d="M0,28 L10,24 L25,22 L40,17 L55,12 L70,8 L85,5 L100,2 L100,30 L0,30 Z"
            fill="url(#sparkGrad)"
          />
          {/* The upward trend line */}
          <path
            d="M0,28 L10,24 L25,22 L40,17 L55,12 L70,8 L85,5 L100,2"
            stroke="var(--color-terracotta)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* End dot */}
          <circle cx="100" cy="2" r="2.5" fill="var(--color-terracotta)" className="opacity-90" />
        </svg>
      </div>
    </div>
  );
};
