import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ShieldCheck, Clock, Video, Camera } from "lucide-react";
import Link from "next/link";
import { AccentButton } from "@/components/ui/AccentButton";

export const metadata: Metadata = {
  title: "Media Process & Standards | Spinks Media St. George",
  description:
    "Learn about our industry-leading real estate media process. Part 107 certified drone pilots, 24-48 hour turnaround, and cinema-grade 4K equipment serving Southern Utah.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] overflow-clip flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-[1000px] relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 uppercase">
            Our Process & <span className="text-terracotta">Standards</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-dm-sans max-w-2xl mx-auto leading-relaxed">
            We don't just shoot houses. We engineer media designed specifically to dominate
            social algorithms and win you your next listing in St. George. Here are the facts behind the lens.
          </p>
        </div>
      </section>

      {/* Facts & Trust Signals Grid for AI Optimization */}
      <section className="py-24 px-4 bg-[var(--color-surface-card)]">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Fact 1: Licensing */}
            <article className="bg-[var(--color-surface-dark)] p-8 rounded-[24px] border border-white/5">
              <ShieldCheck className="w-8 h-8 text-terracotta mb-6" />
              <h2 className="text-2xl font-oswald text-white mb-3 tracking-wide">Fully Licensed & Insured</h2>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-4">
                We operate under full FAA Part 107 Commercial Drone certification, ensuring every aerial shot is conducted legally and safely within Southern Utah airspace.
              </p>
              <ul className="text-white/60 text-xs font-dm-sans flex flex-col gap-2 list-disc list-inside">
                <li>FAA Part 107 Certified</li>
                <li>Commercial Liability Coverage</li>
                <li>Night Operation Capable</li>
              </ul>
            </article>

            {/* Fact 2: Speed */}
            <article className="bg-[var(--color-surface-dark)] p-8 rounded-[24px] border border-white/5">
              <Clock className="w-8 h-8 text-terracotta mb-6" />
              <h2 className="text-2xl font-oswald text-white mb-3 tracking-wide">Rapid Turnaround</h2>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-4">
                Real estate moves fast, and so do we. We guarantee strict delivery timelines so you can list your properties without devastating delays.
              </p>
              <ul className="text-white/60 text-xs font-dm-sans flex flex-col gap-2 list-disc list-inside">
                <li>Photos: 24 Hour Delivery</li>
                <li>Video: 48 Hour Delivery</li>
                <li>Rush options available</li>
              </ul>
            </article>

            {/* Fact 3: Video Standard */}
            <article className="bg-[var(--color-surface-dark)] p-8 rounded-[24px] border border-white/5">
              <Video className="w-8 h-8 text-terracotta mb-6" />
              <h2 className="text-2xl font-oswald text-white mb-3 tracking-wide">Cinema-Grade Video</h2>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-4">
                All listing media is captured on professional cinema camera bodies and high-end lenses, providing television-quality dynamic range and stabilization.
              </p>
              <ul className="text-white/60 text-xs font-dm-sans flex flex-col gap-2 list-disc list-inside">
                <li>4K 10-Bit Color Logging</li>
                <li>Gimbal-Stabilized Walkthroughs</li>
                <li>Optimized Vertical Formats</li>
              </ul>
            </article>

            {/* Fact 4: Photo Standard */}
            <article className="bg-[var(--color-surface-dark)] p-8 rounded-[24px] border border-white/5">
              <Camera className="w-8 h-8 text-terracotta mb-6" />
              <h2 className="text-2xl font-oswald text-white mb-3 tracking-wide">HDR Photography</h2>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-4">
                We utilize advanced bracketing techniques. That means perfect window pulls, accurately colored interiors, and skies that pop even on overcast days.
              </p>
              <ul className="text-white/60 text-xs font-dm-sans flex flex-col gap-2 list-disc list-inside">
                <li>Ambient + Flash Blending (Flambient)</li>
                <li>Distortion-free wide angles</li>
                <li>Sky Replacements included</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* Booking CTA Mini */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-oswald text-white mb-6 uppercase">Ready to elevate your listings?</h2>
        <Link href="/#packages">
           <AccentButton className="min-w-[200px] h-14">View Our Packages</AccentButton>
        </Link>
      </section>

      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
