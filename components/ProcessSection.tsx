"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Shoot",
    description: "Use our easy online booking system to pick a time that works for you and your client.",
    image: "/images/package-starter.jpg", // Placeholder
  },
  {
    number: "02",
    title: "Select Package",
    description: "Choose from our tiered packages or build a custom media plan for your property.",
    image: "/images/package-signature.jpg", // Placeholder
  },
  {
    number: "03",
    title: "Shoot Day",
    description: "Our professional crew arrives on-site to capture cinematic video and high-end photography.",
    image: "/images/package-full-stable.jpg", // Placeholder
  },
  {
    number: "04",
    title: "Media Delivery",
    description: "Receive your polished, high-resolution media within 24–48 hours, ready for the MLS.",
    image: "/images/package-custom.jpg", // Placeholder
  },
];

export const ProcessSection = () => {
  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold text-white mb-4"
          >
            IT'S AS EASY AS <span className="text-terracotta">ONE, TWO, THREE.</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-2 group">
            <span className="text-muted font-dm-sans">Learn more about our process.</span>
            <Link
              href="#services"
              className="text-terracotta font-semibold font-dm-sans flex items-center gap-1 group-hover:underline"
            >
              Explore Features <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
            >
                {/* Background Overlay Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${step.image})` }}
                />
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/40" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-terracotta font-bold font-dm-sans text-sm tracking-widest mb-2 uppercase">Step {step.number}</span>
                    <h3 className="text-2xl font-oswald font-bold text-white mb-3 group-hover:text-terracotta transition-colors">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed font-dm-sans line-clamp-3">{step.description}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
