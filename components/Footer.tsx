"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Disc as Discord } from "lucide-react";
import { AccentButton } from "./ui/AccentButton";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Listing Media", href: "#listing-media" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter/X", icon: Twitter, href: "#" },
    { name: "Discord", icon: Discord, href: "#" },
  ];

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mb-20">
          {/* Left: Branding */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Visual Flourish */}
            <div className="w-12 h-1 bg-terracotta mb-8 invisible lg:visible" />
            
            <Link href="/" className="mb-8 block">
              <Image
                src="/images/logo.white.png"
                alt="Spinks Media Logo"
                width={320}
                height={64}
                className="h-14 w-auto lg:h-[72px]"
              />
            </Link>

            <AccentButton className="min-w-[200px]">Book a Shoot</AccentButton>
          </div>

          {/* Center: Spacer */}
          <div className="hidden lg:block" />

          {/* Right: Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {/* Quick Links */}
            <div>
              <h4 className="text-terracotta text-xs font-bold uppercase tracking-widest mb-6 font-dm-sans">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-white transition-colors font-dm-sans text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-terracotta text-xs font-bold uppercase tracking-widest mb-6 font-dm-sans">Socials</h4>
              <ul className="flex flex-col gap-4">
                {socials.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-muted hover:text-white transition-colors font-dm-sans text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted text-[13px] font-dm-sans">
            © {new Date().getFullYear()} Spinks Media. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-muted hover:text-white transition-colors text-[13px] font-dm-sans">Privacy Policy</Link>
            <Link href="/terms" className="text-muted hover:text-white transition-colors text-[13px] font-dm-sans">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
