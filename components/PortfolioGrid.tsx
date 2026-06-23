"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { portfolioImages } from "@/data/portfolioImages";
import { PortfolioLightbox } from "@/components/PortfolioLightbox";

export const PortfolioGrid = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPreviousLightbox = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) {
        return index;
      }

      return index === 0 ? portfolioImages.length - 1 : index - 1;
    });
  }, []);

  const showNextLightbox = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) {
        return index;
      }

      return index === portfolioImages.length - 1 ? 0 : index + 1;
    });
  }, []);

  return (
    <>
      <section className="bg-[var(--color-surface-dark)] px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-terracotta font-dm-sans">
                Full Gallery
              </p>
              <h2 className="text-3xl font-bold uppercase text-white md:text-5xl font-oswald">
                Real Estate Photo Portfolio
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/50 font-dm-sans">
              Select any image to open a larger view, then move through the full gallery
              with the left and right controls.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioImages.map((image, index) => (
              <motion.button
                type="button"
                key={image.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (index % 8) * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface-card)] text-left shadow-lg ${
                  index % 9 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index % 9 === 0 ? "aspect-[16/11] sm:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Spinks Media portfolio image ${index + 1}`}
                    fill
                    sizes={
                      index % 9 === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1280px) 66vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-dm-sans">
                      View larger
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <PortfolioLightbox
        images={portfolioImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrevious={showPreviousLightbox}
        onNext={showNextLightbox}
      />
    </>
  );
};
