"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface OutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const OutlineButton = ({
  children,
  className,
  ...props
}: OutlineButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)", color: "#1A1A1A" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "bg-transparent text-white border border-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200",
        className
      )}
      {...props}
    >
      <span className="uppercase text-sm tracking-tight font-dm-sans">{children}</span>
    </motion.button>
  );
};
