"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";

type ThemeId = "ember" | "slate-royal" | "onyx-mint" | "navy-crimson" | "void-violet" | "aurora-fog";

interface Theme {
  id: ThemeId;
  name: string;
  tagline: string;
  primary: string;
  secondary: string;
  tertiary: string;
  bg: string;
  swatchGradient: string;
}

const THEMES: Theme[] = [
  {
    id: "ember",
    name: "Ember",
    tagline: "Red Rock Desert",
    primary: "#C4512A",
    secondary: "#E0815A",
    tertiary: "#F5A670",
    bg: "#1A1A1A",
    swatchGradient: "linear-gradient(135deg, #1A1A1A 50%, #C4512A 100%)",
  },
  {
    id: "slate-royal",
    name: "Slate Royal",
    tagline: "Corporate Authority",
    primary: "#2563EB",
    secondary: "#60A5FA",
    tertiary: "#94A3B8",
    bg: "#12151A",
    swatchGradient: "linear-gradient(135deg, #12151A 50%, #2563EB 100%)",
  },
  {
    id: "onyx-mint",
    name: "Onyx Mint",
    tagline: "Tech-Forward Edge",
    primary: "#10D9A0",
    secondary: "#06B6D4",
    tertiary: "#F59E0B",
    bg: "#0E0E0E",
    swatchGradient: "linear-gradient(135deg, #0E0E0E 50%, #10D9A0 100%)",
  },
  {
    id: "navy-crimson",
    name: "Navy Crimson",
    tagline: "Bold Prestige",
    primary: "#DC2626",
    secondary: "#D4A017",
    tertiary: "#E8CDA0",
    bg: "#0D1B2A",
    swatchGradient: "linear-gradient(135deg, #0D1B2A 50%, #DC2626 100%)",
  },
  {
    id: "void-violet",
    name: "Void Violet",
    tagline: "2026 Dopamine Dark",
    primary: "#7C3AED",
    secondary: "#D946EF",
    tertiary: "#818CF8",
    bg: "#0C0A1A",
    swatchGradient: "linear-gradient(135deg, #0C0A1A 40%, #5B21B6 75%, #D946EF 100%)",
  },
  {
    id: "aurora-fog",
    name: "Aurora Fog",
    tagline: "2026 Neo-Earth Signal",
    primary: "#2DD4BF",
    secondary: "#F59E0B",
    tertiary: "#FB7185",
    bg: "#1C1917",
    swatchGradient: "linear-gradient(135deg, #1C1917 40%, #0F9380 75%, #F59E0B 100%)",
  },
];

const STORAGE_KEY = "spinks-media-theme";
const DEFAULT_THEME: ThemeId = "ember";

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeId>(DEFAULT_THEME);

  // On mount, restore saved theme
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      applyTheme(saved);
      setActiveTheme(saved);
    } else {
      applyTheme(DEFAULT_THEME);
    }
  }, []);

  const applyTheme = (id: ThemeId) => {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  const handleSelect = (id: ThemeId) => {
    setActiveTheme(id);
    applyTheme(id);
    // Brief close delay for tactile feel
    setTimeout(() => setIsOpen(false), 350);
  };

  const currentTheme = THEMES.find((t) => t.id === activeTheme) ?? THEMES[0];

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
      role="region"
      aria-label="Theme selector"
    >
      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              background: "rgba(14,14,14,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              width: 260,
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
              <div>
                <p className="text-white text-[11px] font-bold uppercase tracking-[0.18em] font-dm-sans">
                  Color Theme
                </p>
                <p className="text-white/40 text-[10px] font-dm-sans mt-0.5">
                  Choose a palette
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close theme panel"
              >
                <X size={12} />
              </button>
            </div>

            {/* Theme Options */}
            <div className="p-3 flex flex-col gap-2">
              {THEMES.map((theme) => {
                const isActive = theme.id === activeTheme;
                return (
                  <motion.button
                    key={theme.id}
                    onClick={() => handleSelect(theme.id)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                      isActive
                        ? "bg-white/12 border border-white/20"
                        : "hover:bg-white/6 border border-transparent"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Switch to ${theme.name} theme`}
                  >
                    {/* Swatch */}
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 shadow-lg border border-white/10"
                      style={{ background: theme.swatchGradient }}
                    >
                      {/* Accent dots */}
                      <div className="w-full h-full rounded-xl flex items-end justify-end p-1.5 gap-1">
                        <div
                          className="w-2 h-2 rounded-full opacity-90"
                          style={{ background: theme.secondary }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full opacity-70"
                          style={{ background: theme.tertiary }}
                        />
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="flex-grow min-w-0">
                      <p className="text-white text-[12px] font-bold font-dm-sans leading-none mb-0.5">
                        {theme.name}
                      </p>
                      <p className="text-white/40 text-[10px] font-dm-sans truncate">
                        {theme.tagline}
                      </p>
                      {/* Mini color row */}
                      <div className="flex gap-1 mt-1.5">
                        {[theme.primary, theme.secondary, theme.tertiary].map((c, i) => (
                          <div
                            key={i}
                            className="w-3 h-1.5 rounded-full"
                            style={{ background: c, opacity: 1 - i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Active check */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: theme.primary }}
                      >
                        <Check size={10} className="text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="px-4 py-2.5 border-t border-white/8">
              <p className="text-white/25 text-[9px] font-dm-sans text-center uppercase tracking-[0.15em]">
                Theme preference is saved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 relative overflow-hidden group"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.bg}, ${currentTheme.primary})`,
          width: 52,
          height: 52,
        }}
        aria-label="Open theme selector"
        aria-expanded={isOpen}
      >
        {/* Shimmer ring */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 0 2px ${currentTheme.primary}60, 0 8px 32px ${currentTheme.primary}40`,
          }}
        />
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 250 }}
        >
          {isOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Palette size={20} className="text-white" />
          )}
        </motion.div>

        {/* Active theme indicator pip */}
        <div
          className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full border border-white/40"
          style={{ background: currentTheme.primary }}
        />
      </motion.button>
    </div>
  );
};
