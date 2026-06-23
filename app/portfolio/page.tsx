import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Spinks Media Real Estate Photography",
  description:
    "Explore Spinks Media's real estate photography portfolio featuring interiors, exteriors, drone imagery, and twilight listing media in Southern Utah.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] overflow-clip flex flex-col">
      <Header />

      <section className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-32 md:pb-28 md:pt-48">
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-terracotta/15 blur-[130px]" />

        <div className="container relative z-10 mx-auto max-w-[1000px] text-center">
          <p className="mb-5 inline-flex rounded-full border border-terracotta/40 bg-terracotta/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-terracotta font-dm-sans">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold uppercase text-white md:text-6xl lg:text-[72px] font-oswald">
            Photo Work That <span className="text-terracotta">Moves Listings</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl font-dm-sans">
            A broader look at the interiors, exteriors, aerials, and twilight images we
            create for real estate agents and listings across Southern Utah.
          </p>
        </div>
      </section>

      <PortfolioGrid />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
