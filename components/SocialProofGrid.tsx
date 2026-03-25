"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialProof } from "@/data/socialProof";
import Image from "next/image";
import { Instagram } from "lucide-react";

export const SocialProofGrid = () => {
  return (
    <section className="bg-[#F5F3EF] py-24">
      <div className="container mx-auto max-w-[1280px] px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-oswald font-bold text-black mb-16"
        >
          TRUSTED BY REALTORS <span className="text-terracotta">NATION-WIDE</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {socialProof.map((realtor, index) => (
            <motion.a
              key={realtor.handle + index}
              href={`https://instagram.com/${realtor.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 7) * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-black p-4 rounded-xl shadow-xl border border-white/5 flex flex-col items-center gap-3 transition-all hover:shadow-terracotta/10"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-terracotta">
                <Image
                  src={realtor.image}
                  alt={realtor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold text-white font-dm-sans mb-1 uppercase tracking-tight">{realtor.name}</p>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/60 font-medium">
                  <Instagram className="w-3 h-3 text-white" />
                  <span>{realtor.followers}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
