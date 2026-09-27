import React from 'react';
import { ownerEmail, ownerPhoneNumber, socialUrls } from "@/data/contact";
import { serviceAreas } from "@/data/areas";
import { packages } from "@/data/packages";
import { faqData } from "@/data/faq";
import { siteUrl } from "@/data/site";

const businessId = `${siteUrl}/#localbusiness`;

// "$1,100.00" -> "1100.00"; returns null for non-numeric prices like "Custom"
const toSchemaPrice = (price: string) => {
  const cleaned = price.replace(/[^0-9.]/g, "");
  return cleaned ? cleaned : null;
};

export const StructuredData = () => {
  const offers = packages.flatMap((pkg) => {
    const price = toSchemaPrice(pkg.price);
    if (!price) return [];
    return [
      {
        "@type": "Offer",
        "name": `${pkg.name} Real Estate Media Package`,
        "description": pkg.description,
        "price": price,
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": `${pkg.name} Package`,
          "description": pkg.services.map((s) => s.name).join(", "),
          "provider": { "@id": businessId },
        },
      },
    ];
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Spinks Media",
        "publisher": { "@id": businessId },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        "name": "Spinks Media",
        "image": `${siteUrl}/images/logo-primary.png`,
        "logo": `${siteUrl}/images/logo-primary.png`,
        "telephone": ownerPhoneNumber,
        "email": ownerEmail,
        "url": siteUrl,
        "priceRange": "$750–$1,425+",
        "description": "Real estate media company in St. George, Utah offering listing photography, cinematic walkthrough video, FAA Part 107 drone aerials, twilight shoots, Matterport 3D tours and social media content for real estate agents across Southern Utah.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "St. George",
          "addressRegion": "UT",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.0965,
          "longitude": -113.5684
        },
        "sameAs": [
          socialUrls.youtube,
          socialUrls.instagram
        ],
        "areaServed": serviceAreas.map((area) => ({
          "@type": "City",
          "name": `${area.name}, Utah`,
          "url": `${siteUrl}/areas/${area.slug}`,
        })),
        "knowsAbout": [
          "Real estate photography",
          "Real estate videography",
          "Drone aerial photography",
          "Twilight photography",
          "Matterport 3D tours",
          "Real estate social media marketing"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Real Estate Media Packages",
          "itemListElement": offers,
        },
      },
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Rendered only on the homepage, where the FAQ section is visible.
export const FaqStructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    "mainEntity": faqData.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": { "@type": "Answer", "text": q.answer },
      }))
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
