"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/faq";
import { AccordionItem } from "./ui/AccordionItem";
import { AccentButton } from "./ui/AccentButton";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FAQSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(faqData[0].id);

  const activeCategory = useMemo(() => {
    return faqData.find((cat) => cat.id === activeCategoryId) || faqData[0];
  }, [activeCategoryId]);

  // Divide topics into pyramid rows for desktop
  const row1 = faqData.slice(0, 3);
  const row2 = faqData.slice(3, 6);
  const row3 = faqData.slice(6);

  const TopicButton = ({ id, title }: { id: string; title: string }) => {
    const isActive = activeCategoryId === id;
    return (
      <button
        onClick={() => setActiveCategoryId(id)}
        className={cn(
          "px-6 py-2 rounded-full border text-xs font-dm-sans font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
          isActive
            ? "bg-terracotta border-terracotta text-black"
            : "bg-white border-black/10 text-black hover:border-terracotta hover:text-terracotta"
        )}
      >
        {title}
      </button>
    );
  };

  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="container mx-auto max-w-[1280px] px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-oswald font-bold text-black mb-12"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          {/* Pyramid Topic Buttons (Desktop) */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              {row1.map((cat) => (
                <TopicButton key={cat.id} {...cat} />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {row2.map((cat) => (
                <TopicButton key={cat.id} {...cat} />
              ))}
            </div>
            {row3.length > 0 && (
              <div className="flex justify-center gap-4">
                {row3.map((cat) => (
                  <TopicButton key={cat.id} {...cat} />
                ))}
              </div>
            )}
          </div>

          {/* Simple Wrap (Mobile) */}
          <div className="flex flex-wrap justify-center gap-3 md:hidden">
            {faqData.map((cat) => (
              <TopicButton key={cat.id} {...cat} />
            ))}
          </div>
        </div>

        {/* FAQ Cards Container */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {activeCategory.questions.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-2 shadow-sm border border-black/5">
                  <AccordionItem 
                    title={faq.question} 
                    content={faq.answer} 
                    className="px-6 border-0"
                    titleClassName="text-black font-bold text-lg"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* "Still Have Questions?" Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-white font-oswald text-2xl font-bold mb-2">STILL HAVE QUESTIONS?</h3>
            <p className="text-muted font-dm-sans">Still can't find the answer? Contact us here:</p>
          </div>
          <AccentButton className="min-w-[200px]">Contact Us</AccentButton>
        </motion.div>
      </div>
    </section>
  );
};
