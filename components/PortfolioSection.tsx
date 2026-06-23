"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Images, Maximize2 } from "lucide-react";
import { homepagePortfolioImages } from "@/data/portfolioImages";
import { PortfolioLightbox } from "@/components/PortfolioLightbox";

export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) =>
      index === 0 ? homepagePortfolioImages.length - 1 : index - 1
    );
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((index) =>
      index === homepagePortfolioImages.length - 1 ? 0 : index + 1
    );
  }, []);

  const showPreviousLightbox = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) {
        return index;
      }

      return index === 0 ? homepagePortfolioImages.length - 1 : index - 1;
    });
  }, []);

  const showNextLightbox = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) {
        return index;
      }

      return index === homepagePortfolioImages.length - 1 ? 0 : index + 1;
    });
  }, []);

  const activeImage = homepagePortfolioImages[currentIndex];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[var(--color-black)] py-24 md:py-32"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-terracotta/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-accent2/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto max-w-[1280px] px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-terracotta/40 bg-terracotta/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta font-dm-sans"
            >
              <Images className="h-4 w-4" />
              Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white md:text-5xl lg:text-[56px] font-oswald"
            >
              LISTING MEDIA THAT MAKES BUYERS STOP
            </motion.h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg font-dm-sans">
              Browse a sample of real estate interiors, exteriors, drone views, and twilight
              captures built to help properties stand out online.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-bold uppercase tracking-tight text-white transition-colors hover:border-terracotta hover:bg-terracotta font-dm-sans"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch">
          <motion.button
            type="button"
            key={activeImage.id}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={() => setLightboxIndex(currentIndex)}
            className="group relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[var(--color-surface-card)] text-left shadow-2xl md:min-h-[560px]"
          >
            <Image
              src={activeImage.src}
              alt={`Spinks Media portfolio image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur font-dm-sans">
              <Maximize2 className="h-4 w-4 text-terracotta" />
              Click to enlarge
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta font-dm-sans">
                Portfolio image {currentIndex + 1} of {homepagePortfolioImages.length}
              </p>
            </div>
          </motion.button>

          <div className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[var(--color-surface-mid)] p-5">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60 font-dm-sans">
                  Featured Work
                </p>
                <p className="text-sm text-white/40 font-dm-sans">
                  {currentIndex + 1} / {homepagePortfolioImages.length}
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3 lg:grid-cols-2">
                {homepagePortfolioImages.map((image, index) => (
                  <button
                    type="button"
                    key={image.id}
                    aria-label={`Show portfolio image ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl border transition-all ${
                      index === currentIndex
                        ? "border-terracotta opacity-100 shadow-[0_0_24px_rgba(196,81,42,0.28)]"
                        : "border-white/10 opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`Spinks Media portfolio thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 25vw, 180px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                aria-label="Show previous portfolio image"
                onClick={showPrevious}
                className="flex h-12 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-terracotta hover:bg-terracotta"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Show next portfolio image"
                onClick={showNext}
                className="flex h-12 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-terracotta hover:bg-terracotta"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <PortfolioLightbox
        images={homepagePortfolioImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrevious={showPreviousLightbox}
        onNext={showNextLightbox}
      />
    </section>
  );
};
