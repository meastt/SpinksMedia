"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionItemProps {
  title: string;
  content: string;
  isOpenDefault?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export const AccordionItem = ({
  title,
  content,
  isOpenDefault = false,
  className,
  titleClassName,
  contentClassName,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className={cn("border-b border-white/10 last:border-0", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
      >
        <span className={cn("font-semibold text-base font-dm-sans transition-colors group-hover:text-terracotta", titleClassName)}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-terracotta" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={cn("pb-4 text-sm text-gray-600 font-dm-sans leading-relaxed", contentClassName)}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
