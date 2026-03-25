"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FloatingIconProps {
  icon?: LucideIcon;
  emoji?: string;
  className?: string;
}

export const FloatingIcon = ({ icon: Icon, emoji, className }: FloatingIconProps) => {
  return (
    <div
      className={cn(
        "w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-md flex items-center justify-center transition-transform hover:scale-110",
        className
      )}
    >
      {Icon && <Icon className="w-7 h-7 md:w-8 md:h-8 text-terracotta" strokeWidth={2.5} />}
      {emoji && <span className="text-2xl md:text-3xl leading-none">{emoji}</span>}
    </div>
  );
};
