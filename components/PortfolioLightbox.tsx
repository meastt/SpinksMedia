"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioImage } from "@/data/portfolioImages";

type PortfolioLightboxProps = {
  images: PortfolioImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export const PortfolioLightbox = ({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: PortfolioLightboxProps) => {
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {activeImage && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Portfolio image ${activeIndex + 1} enlarged view`}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close enlarged portfolio image"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 h-11 w-11 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:right-8 md:top-8 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="View previous portfolio image"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-4 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:left-8 flex items-center justify-center"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="View next portfolio image"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:right-8 flex items-center justify-center"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <motion.div
            key={activeImage.id}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.22 }}
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={`Spinks Media portfolio image ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              quality={95}
              priority
            />

            <div className="absolute bottom-0 left-1/2 w-[min(100%,720px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-center text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta font-dm-sans">
                Portfolio
              </p>
              <h2 className="mt-1 text-2xl font-oswald uppercase tracking-tight">
                Image {activeIndex + 1} of {images.length}
              </h2>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
