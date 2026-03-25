"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccentButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  showIcon?: boolean;
}

export const AccentButton = ({
  children,
  className,
  showIcon = true,
  ...props
}: AccentButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "bg-terracotta text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-terracotta-dark",
        className
      )}
      {...props}
    >
      {showIcon && <CalendarDays className="w-4 h-4" />}
      <span className="uppercase text-sm tracking-tight font-dm-sans">{children}</span>
    </motion.button>
  );
};
