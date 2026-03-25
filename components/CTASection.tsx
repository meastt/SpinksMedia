"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AccentButton } from "./ui/AccentButton";

export const CTASection = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="relative bg-[var(--color-dark)] rounded-[32px] overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 group">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[64px] font-oswald font-bold text-white leading-none mb-8"
            >
              BECOME THE AGENT <br />
              <span className="text-terracotta">ON INSTAGRAM</span>
            </motion.h2>
            <p className="text-gray-600 text-lg font-dm-sans mb-10 max-w-xl mx-auto lg:mx-0">
              In 48 hours, we film 45-second branding videos, clips, and professional headshots to transform your social presence. Stop competing—start winning.
            </p>
            <div className="flex justify-center lg:justify-start">
              <AccentButton className="min-w-[240px] text-base h-14">Book a Shoot</AccentButton>
            </div>
          </div>

          {/* Right Imagery (Mockup) */}
          <div className="relative w-full lg:w-auto flex-grow flex items-center justify-center lg:justify-end pr-4 sm:pr-0 z-10 mt-16 lg:mt-0">
            {/* Instagram Profile Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-[220px] sm:w-[280px] bg-white rounded-3xl overflow-hidden shadow-2xl rotate-[-4deg] group-hover:rotate-[-2deg] transition-transform duration-500 shrink-0 mt-8 lg:mt-12"
            >
              <Image
                src="/images/agent-details.jpg"
                alt="Instagram Profile Mockup"
                width={400}
                height={600}
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Featured Realtor Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative w-[130px] sm:w-[160px] aspect-square bg-slate-100 rounded-full border-[6px] border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] rotate-[6deg] group-hover:rotate-[3deg] transition-transform duration-500 -ml-14 sm:-ml-20 mt-20 sm:mt-24 lg:mt-32 shrink-0"
            >
              <Image
                src="/images/featured-agent.jpg"
                alt="Featured Agent"
                fill
                className="object-cover z-0"
              />
            </motion.div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[100px] z-0" />
        </div>
      </div>
    </section>
  );
};
