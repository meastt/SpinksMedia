import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/data/site";
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
  metadataBase: new URL(siteUrl),
  title: "St. George Real Estate Photography & Video | Spinks Media",
  description: "Real estate photography, cinematic listing video and drone media in St. George, Utah. Packages from $750 with 24-hour photo delivery for Southern Utah agents.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Spinks Media",
    locale: "en_US",
    url: "/",
    title: "St. George Real Estate Photography & Video | Spinks Media",
    description: "Cinematic listing video, HDR photography and drone media for Southern Utah real estate agents.",
  },
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
        <StructuredData />
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QWTV2L545Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QWTV2L545Z');
          `}
        </Script>
        {/* Theme restoration script is handled by next/script below for better React integration */}
      </head>
      <body className="antialiased font-sans overflow-x-hidden">
        <Script id="theme-restore" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
