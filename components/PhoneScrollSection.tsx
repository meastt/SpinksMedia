"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MetricCard } from "./ui/MetricCard";
import { FloatingIcon } from "./ui/FloatingIcon";
import { Heart, Eye, MessageCircle, Share2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const PhoneScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -5%",
          end: "+=315%", // Extended scroll duration to account for larger image size
          pin: innerRef.current,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Initial State (Phase 1)
      tl.fromTo(
        ".phase-1-elements",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
        0
      );

      // Transition to Phase 2
      tl.to(
        ".phase-1-elements",
        { opacity: 0, scale: 0.8, duration: 1, stagger: 0.1 },
        1.5
      );

      // Phone Screen Content Fade - Phase 2
      tl.to(".screen-v1", { opacity: 0, duration: 0.5 }, 1.5);
      tl.fromTo(".screen-v2", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.5);

      tl.fromTo(
        ".phase-2-elements",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
        2
      );

      // Transition to Phase 3
      tl.to(
        ".phase-2-elements",
        { opacity: 0, scale: 0.8, duration: 1, stagger: 0.1 },
        3.5
      );

      // Phone Screen Content Fade - Phase 3
      tl.to(".screen-v2", { opacity: 0, duration: 0.5 }, 3.5);
      tl.fromTo(".screen-v3", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 3.5);

      tl.fromTo(
        ".phase-3-elements",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
        4
      );

      // Phase 3 elements now intentionally remain fully visible as the component unpins and natively scrolls out of view!

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-white pt-24">
      <div ref={innerRef} className="h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-12 pb-8 px-4">

        {/* Persistent Header */}
        <div className="w-full text-center z-40 mb-6 flex-shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold text-black leading-tight">
            WE MAKE LISTINGS <span className="text-terracotta">GO VIRAL</span>
          </h2>
          <p className="text-gray-600 font-dm-sans text-lg mt-2 font-medium">
            Scroll-stopping content that drives engagement.
          </p>
        </div>

        {/* The Phone Container */}
        {/* Adjusted to let mobile expand significantly using padding bounds while keeping desktop max-width intact */}
        <div ref={phoneRef} className="relative z-10 w-full max-w-[550px] lg:max-w-[462px] px-4 sm:px-8 lg:px-0 flex items-center justify-center -mt-6 sm:mt-0 flex-grow basis-0 min-h-0">
          
          {/* Phone Frame strictly bound to the image's aspect ratio */}
          <div className="relative h-full max-h-full w-full max-w-full aspect-[757/1091] flex items-center justify-center">
            <Image
              src="/images/phone-frame.PNG"
              alt="Phone Frame"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain z-20 pointer-events-none"
              priority
            />

            {/* Phone Screen Content (Mock Videos - Rendered ON TOP of the phone screen) */}
            {/* NOTE: These specific coordinate percentages (top: 17.3%, left: 28.6%, w: 43.8%, h: 63.5%) were manually fine-tuned pixel-by-pixel to perfectly fit the specific black screen dimensions of the phone-frame.PNG graphic. */}
            <div className="absolute top-[16.3%] left-[29.35%] w-[42.3%] h-[65.5%] bg-black rounded-[22px] xl:rounded-[28px] overflow-hidden z-30">
              {/* Phase 1 Video */}
              <div className="absolute inset-0 screen-v1">
                <video className="absolute inset-0 w-full h-full object-cover shadow-inner" autoPlay muted loop playsInline src="/videos/hero-bg.mp4" />
                <div className="absolute inset-0 bg-terracotta/20 mix-blend-overlay z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                <div className="absolute bottom-10 left-6 text-white font-oswald text-2xl tracking-wide drop-shadow-xl z-10">LUXURY ESTATE</div>
              </div>

              {/* Phase 2 Video */}
              <div className="absolute inset-0 screen-v2 opacity-0">
                <video className="absolute inset-0 w-full h-full object-cover shadow-inner" autoPlay muted loop playsInline src="/videos/hero-bg.mp4" />
                <div className="absolute inset-0 bg-[#2A65C4]/30 mix-blend-overlay z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                <div className="absolute bottom-10 left-6 text-white font-oswald text-2xl tracking-wide drop-shadow-xl z-10">URBAN LOFT</div>
              </div>

              {/* Phase 3 Video */}
              <div className="absolute inset-0 screen-v3 opacity-0">
                <video className="absolute inset-0 w-full h-full object-cover shadow-inner" autoPlay muted loop playsInline src="/videos/hero-bg.mp4" />
                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                <div className="absolute bottom-10 left-6 text-white font-oswald text-2xl tracking-wide drop-shadow-xl z-10">DESERT OASIS</div>
              </div>
            </div>
            {/* Metric Cards - Phase 1 */}
            <div className="phase-1-elements absolute top-[10%] -left-32 md:-left-64 hidden xl:block">
              <MetricCard icon={Heart} label="Likes" value="2,200" />
            </div>
            <div className="phase-1-elements absolute bottom-[20%] -right-32 md:-right-64 hidden xl:block">
              <MetricCard icon={Eye} label="Views" value="78,926" />
            </div>
            {/* Floating Icons - Phase 1 */}
            <FloatingIcon icon={Eye} className="phase-1-elements absolute -top-4 -left-4 md:-top-10 md:-left-12" />
            <FloatingIcon icon={Heart} className="phase-1-elements absolute -bottom-4 -right-4 md:-bottom-10 md:-right-12" />

            {/* Metric Cards - Phase 2 */}
            <div className="phase-2-elements absolute top-[40%] -left-32 md:-left-64 hidden xl:block opacity-0">
              <MetricCard icon={Heart} label="Likes" value="756" />
              <FloatingIcon emoji="😍" className="absolute -top-10 -right-10 scale-90 rotate-12" />
            </div>
            <div className="phase-2-elements absolute top-[10%] -right-32 md:-right-64 hidden xl:block opacity-0">
              <MetricCard icon={Eye} label="Views" value="20,602" />
            </div>
            {/* Floating Icons - Phase 2 */}
            <FloatingIcon icon={MessageCircle} className="phase-2-elements absolute top-1/2 -left-6 md:-left-20 opacity-0" />
            <FloatingIcon icon={Share2} className="phase-2-elements absolute top-1/4 -right-6 md:-right-20 opacity-0" />

            {/* Metric Cards - Phase 3 */}
            <div className="phase-3-elements absolute top-[20%] -left-36 md:-left-72 hidden xl:block opacity-0">
              <MetricCard icon={Heart} label="Likes" value="6,700" />
            </div>
            <div className="phase-3-elements absolute bottom-[10%] -right-36 md:-right-72 hidden xl:block opacity-0">
              <MetricCard icon={Eye} label="Views" value="181,705" />
            </div>
            {/* Floating Icons - Phase 3 */}
            <FloatingIcon icon={Heart} className="phase-3-elements absolute -top-4 -right-6 md:-top-12 md:-right-16 opacity-0" />
            <FloatingIcon icon={MessageCircle} className="phase-3-elements absolute -bottom-4 -left-6 md:-bottom-8 md:-left-16 opacity-0" />
          </div>
        </div>

      </div>
    </div>
  );
};
