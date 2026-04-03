import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { MapPin, Camera, Video, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AccentButton } from "@/components/ui/AccentButton";
import { notFound } from "next/navigation";

// Define the valid service areas for the geographic SEO hub
const validAreas = [
  { slug: "washington", name: "Washington City" },
  { slug: "santa-clara", name: "Santa Clara" },
  { slug: "hurricane", name: "Hurricane" },
  { slug: "ivins", name: "Ivins" },
  { slug: "cedar-city", name: "Cedar City" },
];

// Generate dynamic metadata for SEO crawling based on the URL parameter
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const area = validAreas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Real Estate Photography & Video in ${area.name} | Spinks Media`,
    description: `Leading real estate media services in ${area.name}, Utah. Cinematic drone videos, HDR photography, and 48-hour turnarounds to help local agents win listings.`,
    alternates: {
      canonical: `https://spinksmedia.com/areas/${area.slug}`,
    },
  };
}

// Generate static routes for performance and flawless indexing
export function generateStaticParams() {
  return validAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const area = validAreas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-black)] overflow-clip flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/package-full-stable.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black pointer-events-none" />

        <div className="container mx-auto max-w-[1280px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-terracotta bg-terracotta/10 text-white text-xs font-semibold uppercase tracking-widest font-dm-sans mb-6">
            <MapPin className="w-3 h-3 text-terracotta" />
            Local Coverage Area
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-oswald font-bold text-white mb-6 uppercase leading-tight max-w-4xl">
            PREMIUM REAL ESTATE MEDIA IN <span className="text-terracotta">{area.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-dm-sans max-w-2xl leading-relaxed mb-10">
            Elevating property listings across {area.name} with cinematic walkthroughs, FAA-licensed drone flights, and HDR photography designed for the modern agent.
          </p>
          <div className="flex gap-4">
            <Link href="/#packages">
              <AccentButton className="min-w-[200px] h-14">View {area.name} Packages</AccentButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Factual Services Grid (Contextual SEO hooks) */}
      <section className="py-24 px-4 bg-[var(--color-surface-card)]">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 border border-white/5 rounded-3xl bg-[var(--color-surface-dark)]">
              <Camera className="w-10 h-10 text-terracotta mb-6" />
              <h3 className="text-2xl font-oswald text-white mb-3 tracking-wide">HDR Photography</h3>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-6">
                Capture the true essence of your {area.name} properties. We utilize advanced bracketed photography techniques guaranteeing perfect window pulls and accurate color representation for every room.
              </p>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-[var(--color-surface-dark)]">
              <Video className="w-10 h-10 text-terracotta mb-6" />
              <h3 className="text-2xl font-oswald text-white mb-3 tracking-wide">Cinematic Walkthroughs</h3>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-6">
                Deliver an immersive experience. Our 4K television-grade stabilized walkthrough videos ensure potential buyers get a true sense of scale and luxury before they even step through the front door.
              </p>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-[var(--color-surface-dark)]">
              <MapPin className="w-10 h-10 text-terracotta mb-6" />
              <h3 className="text-2xl font-oswald text-white mb-3 tracking-wide">Aerial Drone Media</h3>
              <p className="text-muted font-dm-sans text-sm leading-relaxed mb-6">
                Highlight expansive lots and neighborhood proximities. We use fully licensed FAA Part 107 drone pilots to legally and safely capture stunning aerial photos and videos of your properties.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
