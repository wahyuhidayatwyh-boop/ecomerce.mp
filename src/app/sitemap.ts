import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myportofolio.store";

  // List of all static pages
  const pages = [
    "",
    "/about",
    "/portfolio",
    "/pricing",
    "/faq",
    "/contact",
    "/privacy",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
