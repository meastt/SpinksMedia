import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Spinks Media | Cinematic Real Estate Content That Wins Listings",
  description: "St. George based real estate media company specializing in cinematic video, high-end photography, and scroll-stopping social content.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// Inline script to restore saved theme before first paint (prevents FOUC)
const THEME_SCRIPT = `
  (function() {
    try {
      var t = localStorage.getItem('spinks-media-theme');
      var valid = ['ember','slate-royal','onyx-mint','navy-crimson','void-violet','aurora-fog'];
      if (t && valid.indexOf(t) !== -1) {
        document.documentElement.setAttribute('data-theme', t);
      } else {
        document.documentElement.setAttribute('data-theme', 'ember');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Inline script runs synchronously: restores theme before styles paint */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
