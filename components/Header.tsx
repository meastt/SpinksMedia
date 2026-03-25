"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { AccentButton } from "./ui/AccentButton";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Listing Media", href: "#listing-media" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-4 lg:py-5 bg-[var(--color-gold-dark)] flex items-center shadow-md">
      <div className="container mx-auto max-w-[1280px] px-4 flex items-center justify-between">
        {/* Left: Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium text-[15px] font-dm-sans hover:text-white/80 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/logo.white.png"
              alt="Spinks Media Logo"
              width={160}
              height={32}
              className="h-7 w-auto lg:h-9"
              priority
            />
          </Link>
        </div>

        {/* Right: Phone & Book Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white font-medium font-dm-sans">
            <Phone className="w-4 h-4" />
            <span>(435) 668-3165</span>
          </div>
          <AccentButton className="h-10 px-4 text-xs">Book a Shoot</AccentButton>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--color-gold-dark)] border-t border-white/10 p-6 flex flex-col gap-6 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium font-dm-sans"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white font-medium font-dm-sans">
                <Phone className="w-4 h-4" />
                <span>(435) 668-3165</span>
              </div>
              <AccentButton className="w-full">Book a Shoot</AccentButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
