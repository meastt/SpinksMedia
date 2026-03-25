"use client";

import React from "react";
import { motion } from "framer-motion";
import { outOfStatePackages } from "@/data/outOfStatePackages";
import { AccordionItem } from "./ui/AccordionItem";
import { AccentButton } from "./ui/AccentButton";
import Image from "next/image";

export const OutOfStatePackages = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto max-w-[1280px] px-4 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold leading-tight mb-6"
          >
            NOT BASED IN <span className="text-terracotta">SOUTHERN UTAH?</span>
            <br />
            NOT A PROBLEM.
          </motion.h2>
          <p className="text-muted text-lg font-dm-sans">
            We offer premium out-of-state packages. We bring the production value to you, wherever you are.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outOfStatePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--color-dark)] rounded-2xl p-1 flex flex-col text-left group border border-white/5 relative"
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 bg-terracotta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Package Header (Simple) */}
              <div className="p-6 pb-0">
                 <h3 className="text-white font-oswald text-2xl font-bold tracking-tight mb-1">
                    {pkg.name}
                  </h3>
                  <div className="text-2xl font-oswald font-bold text-terracotta">
                    {pkg.price}
                  </div>
              </div>

              {/* Package Body */}
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <p className="text-muted text-sm font-dm-sans leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Services Accordion */}
                <div className="flex-grow border-t border-white/10 pt-2">
                  {pkg.services.map((service) => (
                    <AccordionItem
                      key={service.name}
                      title={service.name}
                      content={service.description}
                      titleClassName="text-sm font-semibold text-white/90"
                      contentClassName="text-xs text-muted"
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <AccentButton className="w-full mt-8" showIcon={false}>
                  Explore Package
                </AccentButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
