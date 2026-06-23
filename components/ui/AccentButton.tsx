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
  href?: string;
}

export const AccentButton = ({
  children,
  className,
  showIcon = true,
  href,
  ...props
}: AccentButtonProps) => {
  const buttonClassName = cn(
    "bg-terracotta text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-terracotta-dark",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClassName}
        aria-label={props["aria-label"]}
      >
        {showIcon && <CalendarDays className="w-4 h-4" />}
        <span className="uppercase text-sm tracking-tight font-dm-sans">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClassName}
      {...props}
    >
      {showIcon && <CalendarDays className="w-4 h-4" />}
      <span className="uppercase text-sm tracking-tight font-dm-sans">{children}</span>
    </motion.button>
  );
};
