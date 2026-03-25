"use client";

import React from "react";
import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import { AccordionItem } from "./ui/AccordionItem";
import { AccentButton } from "./ui/AccentButton";
import Image from "next/image";

export const PackagesSection = () => {
  return (
    <section id="services" className="bg-[#F5F3EF] py-24 md:py-32 scroll-mt-16">
      <div className="container mx-auto max-w-[1280px] px-4 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold text-black mb-6"
          >
            WHAT WE OFFER
          </motion.h2>
          <p className="text-gray-600 text-lg font-dm-sans">
            Serving the Southern Utah real estate industry with top-tier cinematic content and professional media production.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                // Staggered staircase effect for desktop
                transform: `translateY(${index * -20}px)`,
              }}
              className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden flex flex-col text-left group border border-black/5 relative"
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 bg-terracotta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header Image */}
              <div className="relative h-32 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-oswald text-2xl font-bold tracking-tight">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-terracotta/10 px-3 py-1 rounded-full text-terracotta text-[11px] font-bold uppercase tracking-wider">
                    {pkg.servicesCount > 0 ? `${pkg.servicesCount} Services` : "Bespoke Scope"}
                  </div>
                  <div className="text-2xl font-oswald font-bold text-black">
                    {pkg.price}
                  </div>
                </div>

                <p className="text-gray-600 text-sm font-dm-sans leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Services Accordion */}
                <div className="flex-grow">
                  {pkg.services.map((service) => (
                    <AccordionItem
                      key={service.name}
                      title={service.name}
                      content={service.description}
                      titleClassName="text-sm font-semibold"
                      contentClassName="text-xs"
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
