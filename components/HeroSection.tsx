"use client";

import React from "react";
import Image from "next/image";
import { MapPin, PlaySquare, Pencil, User } from "lucide-react";
import { AccentButton } from "./ui/AccentButton";
import { OutlineButton } from "./ui/OutlineButton";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const SellingPoint = ({ icon: Icon, text }: { icon: any; text: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 text-white/90"
    >
      <Icon className="w-5 h-5 text-terracotta flex-shrink-0" />
      <span className="text-base font-dm-sans leading-tight">{text}</span>
    </motion.div>
  );

  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-20 md:pt-40 pb-20 lg:pb-28">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          preload="none"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black" />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-terracotta bg-terracotta/10 text-white text-xs font-semibold uppercase tracking-widest font-dm-sans mb-8"
        >
          <MapPin className="w-3 h-3 text-terracotta" />
          St. George Based Real Estate Media Company
        </motion.div>

        {/* H1 Headline – no entrance animation so LCP element is immediately visible */}
        <h1 className="text-4xl md:text-6xl lg:text-[72px] font-oswald font-extrabold text-white leading-[1.1] mb-8 max-w-4xl text-center">
          CINEMATIC CONTENT <span className="text-terracotta">THAT WINS</span>
          <br />
          LISTINGS AND GETS CLIENTS.
        </h1>

        {/* Selling Points */}
        <div className="flex flex-col items-center md:items-center gap-4 mb-10 max-w-xl">
          <SellingPoint
            icon={PlaySquare}
            text="Cinematic 45–60s videos: built to stop the scroll."
          />
          <SellingPoint
            icon={Pencil}
            text="Hooks + scripts included: we tell you exactly what to say."
          />
          <SellingPoint
            icon={User}
            text="Made for agents: branding videos, short-form reels, photos, drone."
          />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <OutlineButton className="min-w-[180px]">Explore Features</OutlineButton>
          <AccentButton className="min-w-[180px]">Our Packages</AccentButton>
        </motion.div>
      </div>
    </section>
  );
};
