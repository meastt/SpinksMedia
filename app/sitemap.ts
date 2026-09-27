import type { MetadataRoute } from "next";
import { serviceAreas } from "@/data/areas";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/process`, changeFrequency: "yearly", priority: 0.6 },
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/areas/${area.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
