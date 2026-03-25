"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MetricCard } from "./ui/MetricCard";
import { FloatingIcon } from "./ui/FloatingIcon";
import { Heart, TrendingUp, MessageCircle, Share2 } from "lucide-react";

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
              src="/images/phone-frame.png"
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
            <div className="phase-1-elements absolute top-[15%] -left-4 md:left-[556px] hidden xl:block relative w-[260px] z-40">
              <MetricCard icon={Heart} label="Likes" value="2,200" />
              <FloatingIcon emoji="🔥" className="absolute -top-8 -right-6 scale-90 rotate-6" />
            </div>
            <div className="phase-1-elements absolute bottom-[25%] -right-4 md:-right-80 hidden xl:block relative w-[260px] z-40">
              <MetricCard icon={TrendingUp} label="Views" value="78,926" />
              <FloatingIcon emoji="📈" className="absolute -top-8 -left-6 scale-90 -rotate-6" />
            </div>
            <div className="phase-1-elements absolute top-[10%] -right-4 md:-right-[690px] hidden xl:block relative w-[260px] z-40">
              <MetricCard icon={Heart} label="Saves" value="4,812" />
              <FloatingIcon emoji="❤️" className="absolute -top-8 -right-6 scale-90 rotate-6" />
            </div>

            {/* Metric Cards - Phase 2 */}
            <div className="phase-2-elements absolute -top-[180px] -left-4 md:left-[-120px] hidden xl:block opacity-0 relative w-[260px] z-40">
              <MetricCard icon={Share2} label="Shares" value="1,340" />
              <FloatingIcon emoji="✨" className="absolute -top-8 -right-6 scale-90 -rotate-6" />
            </div>
            <div className="phase-2-elements absolute top-[25%] -left-4 md:left-[122px] hidden xl:block opacity-0 relative w-[260px] z-40">
              <MetricCard icon={Heart} label="Likes" value="756" />
              <FloatingIcon emoji="😍" className="absolute -top-8 -right-6 scale-90 rotate-12" />
            </div>
            <div className="phase-2-elements absolute -top-[100px] -right-4 md:right-[22px] hidden xl:block opacity-0 relative w-[260px] z-40">
              <MetricCard icon={TrendingUp} label="Views" value="20,602" />
              <FloatingIcon emoji="🚀" className="absolute -top-8 -left-6 scale-90 rotate-6" />
            </div>

            {/* Metric Cards - Phase 3 */}
            <div className="phase-3-elements absolute top-[25%] -left-4 md:-left-82 hidden xl:block opacity-0 relative w-[260px] z-40">
              <MetricCard icon={Heart} label="Likes" value="6,700" />
              <FloatingIcon emoji="⬆️" className="absolute -top-8 -right-6 scale-90 rotate-6" />
            </div>
            <div className="phase-3-elements absolute bottom-[15%] -right-4 md:right-[1206px] hidden xl:block opacity-0 relative w-[260px] z-40">
              <MetricCard icon={TrendingUp} label="Views" value="181,705" />
              <FloatingIcon emoji="💥" className="absolute -top-8 -left-6 scale-90 -rotate-6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
