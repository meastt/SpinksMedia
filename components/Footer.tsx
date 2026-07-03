"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import { AccentButton } from "./ui/AccentButton";
import {
  ownerEmail,
  ownerEmailHref,
  ownerPhoneHref,
  ownerPhoneNumber,
  socialUrls,
} from "@/data/contact";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#services" },
    { name: "Process", href: "/process" },
    { name: "FAQ", href: "/#faq" },
  ];

  const socials = [
    { name: "YouTube", icon: Youtube, href: socialUrls.youtube },
    { name: "Instagram", icon: Instagram, href: socialUrls.instagram },
  ];

  return (
    <footer className="relative bg-[var(--color-black)] pt-16 pb-12 border-t border-white/5 overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mb-12">
          {/* Left: Branding */}
          <div className="flex flex-col items-start -mt-24">
            {/* Visual Flourish */}
            <div className="w-12 h-1 bg-terracotta mb-8 invisible lg:visible" />
            
            <Link href="/" className="mb-0 block">
              <Image
                src="/images/logo-primary.png"
                alt="Spinks Media Logo"
                width={500}
                height={250}
                className="h-[144px] w-auto lg:h-[184px] -ml-12"
              />
            </Link>

            <AccentButton href={ownerPhoneHref} className="min-w-[200px] -mt-4">
              Book a Shoot
            </AccentButton>
            <a
              href={ownerPhoneHref}
              className="mt-5 flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white font-dm-sans"
              aria-label={`Call Spinks Media at ${ownerPhoneNumber}`}
            >
              <Phone className="w-4 h-4 text-terracotta" />
              <span>{ownerPhoneNumber}</span>
            </a>
            <a
              href={ownerEmailHref}
              className="mt-3 flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white font-dm-sans"
              aria-label={`Email Spinks Media at ${ownerEmail}`}
            >
              <Mail className="w-4 h-4 text-terracotta" />
              <span>{ownerEmail}</span>
            </a>
          </div>

          {/* Center: Spacer */}
          <div className="hidden lg:block" />

          {/* Right: Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="text-terracotta text-xs font-bold uppercase tracking-widest mb-6 font-dm-sans">Quick Links</h3>
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
              <h3 className="text-terracotta text-xs font-bold uppercase tracking-widest mb-6 font-dm-sans">Socials</h3>
              <ul className="flex flex-col gap-4">
                {socials.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted hover:text-white transition-colors font-dm-sans text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-muted text-[13px] font-dm-sans">
              © {new Date().getFullYear()} Spinks Media. All rights reserved.
            </p>
            <p className="text-muted/60 text-[13px] font-dm-sans">
              Made by your Southern Utah neighbor at{" "}
              <a 
                href="https://TechRidgeSEO.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terracotta hover:text-white transition-colors underline underline-offset-4 font-bold"
              >
                TechRidgeSEO.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
