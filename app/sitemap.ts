import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE_URL = "https://sukoon.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/cookies`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/shipping`,lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
