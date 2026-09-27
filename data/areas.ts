// Service areas. Each entry gets a page at /areas/[slug], a sitemap entry,
// a footer link, and an areaServed entry in the structured data.
export interface ServiceArea {
  slug: string;
  name: string;
}

export const serviceAreas: ServiceArea[] = [
  { slug: "st-george", name: "St. George" },
  { slug: "washington", name: "Washington City" },
  { slug: "santa-clara", name: "Santa Clara" },
  { slug: "hurricane", name: "Hurricane" },
  { slug: "ivins", name: "Ivins" },
  { slug: "cedar-city", name: "Cedar City" },
];
