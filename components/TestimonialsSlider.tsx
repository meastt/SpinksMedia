"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";

export const TestimonialsSlider = () => {
  return (
    <section className="bg-[#F5F3EF] py-24 overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-oswald font-bold text-black mb-16 text-center"
        >
          WHAT CUSTOMERS SAY AFTER THE SHOOT
        </motion.h2>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[400px] bg-white rounded-2xl p-8 shadow-sm border border-black/5 snap-center flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                  ))}
                </div>
                
                {/* Body */}
                <p className="text-black font-dm-sans text-lg italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-black font-dm-sans">{testimonial.name}</div>
                  <div className="text-xs text-muted font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
