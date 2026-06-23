import React from 'react';
import { ownerEmail, ownerPhoneNumber, socialUrls } from "@/data/contact";

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://spinksmedia.com/#localbusiness",
        "name": "Spinks Media",
        "image": "https://spinksmedia.com/images/logo-primary.png",
        "telephone": ownerPhoneNumber,
        "email": ownerEmail,
        "url": "https://spinksmedia.com",
        "description": "Leading real estate media company in St. George, Utah. Specializing in cinematic listing videos, drone videography, and scroll-stopping social media content for top producers.",
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
        "areaServed": [
          {
            "@type": "City",
            "name": "St. George"
          },
          {
            "@type": "City",
            "name": "Washington"
          },
          {
            "@type": "City",
            "name": "Santa Clara"
          },
          {
            "@type": "City",
            "name": "Hurricane"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://spinksmedia.com/#service",
        "name": "Cinematic Real Estate Videography",
        "provider": {
          "@id": "https://spinksmedia.com/#localbusiness"
        },
        "areaServed": {
          "@type": "State",
          "name": "Utah"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
