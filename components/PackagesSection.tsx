"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { packages } from "@/data/packages";
import { AccentButton } from "./ui/AccentButton";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

/* ─── Inline compact accordion (white text, for dark cards) ─── */
const FeatureRow = ({ name, description }: { name: string; description: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-3 flex items-center justify-between gap-3 text-left group"
      >
        <span className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors font-dm-sans">
          {name}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-4 h-4 text-terracotta flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-xs text-white/50 font-dm-sans leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── "Read More" truncated description ─── */
const TruncatedDesc = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-5">
      <p
        className={`text-white/60 text-sm font-dm-sans leading-relaxed transition-all ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-terracotta text-xs font-semibold mt-1 hover:opacity-80 transition-opacity"
      >
        {expanded ? "Show Less" : "Read More"}
        <ChevronDown
          className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

/* ─── Main section ─── */
export const PackagesSection = () => {
  return (
    <section id="services" className="bg-[#0c0d11] py-24 md:py-32 scroll-mt-16">
      <div className="container mx-auto max-w-[1280px] px-4 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold text-white mb-4"
          >
            WHAT WE OFFER
          </motion.h2>
          <p className="text-white/50 text-lg font-dm-sans">
            Serving the Southern Utah real estate industry with top-tier cinematic content and professional media production.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col text-left transition-transform ${
                pkg.popular
                  ? "bg-[#1a1b21] border border-terracotta/60 shadow-[0_0_40px_rgba(233,121,41,0.18)] scale-[1.03] -my-3 z-10"
                  : "bg-[#13141a] border border-white/5"
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-3 right-3 z-20 bg-terracotta text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header Image — name + service count overlaid */}
              <div className="relative h-36 w-full bg-slate-900 overflow-hidden shrink-0">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105 grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Name + pill overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 flex items-end justify-between gap-2">
                  <h3 className="text-white font-oswald text-xl font-bold tracking-tight leading-none">
                    {pkg.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white px-2 py-1 rounded-md shrink-0 flex items-center gap-1">
                    {pkg.servicesCount > 0 ? `${pkg.servicesCount} Services` : "Custom Scope"}
                    <span className="inline-grid grid-cols-2 gap-[2px] ml-1 opacity-60">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="w-[3px] h-[3px] bg-white rounded-[1px]" />
                      ))}
                    </span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Price */}
                <div className="mb-4">
                  <div className="text-4xl font-oswald font-bold text-white leading-none">
                    {pkg.price}
                  </div>
                </div>

                {/* Description (truncated) */}
                <TruncatedDesc text={pkg.description} />

                {/* Feature Accordion */}
                <div className="flex-grow">
                  {pkg.services.map((service) => (
                    <FeatureRow
                      key={service.name}
                      name={service.name}
                      description={service.description}
                    />
                  ))}
                </div>

                {/* CTA */}
                <AccentButton className="w-full mt-6" showIcon={false}>
                  <span className="flex items-center justify-center gap-2">
                    Explore Package <ChevronRight className="w-4 h-4" />
                  </span>
                </AccentButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
