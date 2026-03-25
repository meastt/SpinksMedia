"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { stats } from "@/data/metrics";

const CountUp = ({ value, label }: { value: string; label: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  // Extract number from string (e.g., "$1 Billion+" -> 1, "750+" -> 750)
  const numericValue = parseInt(value.replace(/,/g, "").replace(/[^0-9]/g, "")) || 0;
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.replace(/[0-9,]/g, "").replace(/^\$/, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [numericValue, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(`${prefix}${latest.toLocaleString()}${suffix}`);
    });
  }, [rounded, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-black/5 relative overflow-hidden group h-full"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 -rotate-45 translate-x-12 -translate-y-12 transition-transform group-hover:translate-x-10 group-hover:-translate-y-10" />
      
      <div className="text-4xl md:text-5xl font-oswald font-bold text-black mb-2 relative z-10">
        {displayValue}
      </div>
      <div className="text-sm font-dm-sans text-gray-500 font-medium uppercase tracking-widest relative z-10 text-center">
        {label}
      </div>
    </motion.div>
  );
};

export const MetricsBanner = () => {
  return (
    <section className="bg-[#F5F3EF] pb-24">
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <CountUp key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
