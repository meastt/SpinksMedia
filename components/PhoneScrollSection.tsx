"use client";

import React from "react";
import Image from "next/image";
import { MetricCard } from "./ui/MetricCard";
import { Heart, TrendingUp, Share2, MessageCircle } from "lucide-react";

export const PhoneScrollSection = () => {
  return (
    <section
      className="relative pt-8 md:pt-0 pb-24 overflow-hidden"
      style={{ background: "var(--color-white)" }}
    >
      {/* Section Header */}
      <div className="w-full text-center mb-2 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-oswald font-bold leading-tight"
          style={{ color: "var(--color-black)" }}>
          WE MAKE LISTINGS{" "}
          <span className="text-terracotta">GO VIRAL</span>
        </h2>
        <p className="mt-3 text-lg font-dm-sans font-medium"
          style={{ color: "var(--color-muted)" }}>
          Scroll-stopping content that drives real engagement.
        </p>
      </div>

      {/* Phone + Floating Stats Layout */}
      <div className="relative flex items-center justify-center mx-auto max-w-5xl px-4">

        {/* ── LEFT COLUMN ── */}
        <div className="hidden md:flex flex-col gap-6 items-end pr-10 flex-1">
          {/* Top-left card */}
          <div className="animate-float-slow">
            <MetricCard icon={Heart} label="Total Likes" value="78,926" />
          </div>
          {/* Bottom-left card */}
          <div className="animate-float-medium">
            <MetricCard icon={Share2} label="Shares" value="4,812" />
          </div>
        </div>

        {/* ── PHONE (center) ── */}
        <div className="relative z-10 w-full max-w-[351px] sm:max-w-[414px] lg:max-w-[360px] flex-shrink-0">
          {/* Glow ring behind phone */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20 scale-75"
            style={{ background: "radial-gradient(ellipse, var(--color-gold) 0%, transparent 70%)" }}
          />

          {/* Phone frame + video — new PNG has transparent screen, no finger overlap */}
          <div className="relative w-full aspect-[9/16]">

            {/* LAYER 1 (z-10): Video — sits BEHIND the phone frame.
                The transparent screen cutout in iphone-frame.png lets this
                show through perfectly. No clipping tricks needed. */}
            <div
              className="absolute overflow-hidden"
              style={{
                top: "14.3%",
                left: "20.3%",
                width: "47.1%",
                height: "56.8%",
                borderRadius: "20px",
                zIndex: 30,
                background: "#000",
              }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/hero-bg.mp4"
              />
              <div className="absolute inset-0 opacity-20" style={{ background: "var(--color-gold)", zIndex: 1 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" style={{ zIndex: 1 }} />
              <div className="absolute bottom-8 left-4 text-white font-oswald text-xl tracking-wide drop-shadow-xl" style={{ zIndex: 2 }}>
                LUXURY ESTATE
              </div>
            </div>

            {/* LAYER 2 (z-20): Phone frame — ON TOP of the video.
                Transparent screen area reveals the video below.
                Hand/fingers are fully opaque and sit in front naturally. */}
            <Image
              src="/images/iphone-frame4.png"
              alt="Hand holding phone showing real estate listing video"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 390px"
              className="object-contain pointer-events-none"
              style={{ zIndex: 10 }}
              priority
            />


            {/* ── Floating emoji badges pinned to the phone ── */}
            {/* Top-right of phone */}
            <div className="absolute top-[12%] right-[8%] z-40 animate-float-fast">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl md:text-2xl">🔥</div>
            </div>
            {/* Mid-right of phone */}
            <div className="absolute top-1/3 right-0 z-40 animate-float-slow">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl md:text-2xl">📈</div>
            </div>
            {/* Bottom-left of phone */}
            <div className="absolute bottom-[18%] left-0 z-40 animate-float-medium">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl md:text-2xl">❤️</div>
            </div>
            {/* Top-left of phone */}
            <div className="absolute top-[12%] left-1 z-40 animate-float-fast">
              <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-lg md:text-xl">✨</div>
            </div>
          </div>

          {/* Mobile-only stat pills (shown below phone on small screens) */}
          <div className="flex md:hidden justify-center gap-3 mt-6 w-full px-4">
            <MetricCard icon={Heart} label="Likes" value="78,926" className="w-[44vw] min-w-0" />
            <MetricCard icon={TrendingUp} label="Views" value="181,705" className="w-[44vw] min-w-0" />
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hidden md:flex flex-col gap-6 items-start pl-10 flex-1">
          {/* Top-right card */}
          <div className="animate-float-medium">
            <MetricCard icon={TrendingUp} label="Total Views" value="181,705" />
          </div>
          {/* Bottom-right card */}
          <div className="animate-float-slow">
            <MetricCard icon={MessageCircle} label="Comments" value="2,340" />
          </div>
        </div>

      </div>

      {/* Bottom caption */}
      <p className="text-center mt-14 text-sm font-dm-sans uppercase tracking-widest"
        style={{ color: "var(--color-muted)" }}>
        Real numbers from real listings — not estimates
      </p>
    </section>
  );
};
