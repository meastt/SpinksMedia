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

      {/* Simplified SVG Sparkline */}
      <div className="mt-4 relative z-10">
        <svg
          viewBox="0 0 100 30"
          className="w-full h-8 stroke-terracotta fill-none stroke-[2.5] stroke-round"
        >
          <path
            d="M0,25 L10,22 L20,28 L30,15 L40,20 L50,5 L60,18 L70,12 L80,25 L90,10 L100,15"
            className="opacity-80"
          />
        </svg>
      </div>
    </div>
  );
};
