import type { MetadataRoute } from "next";
import { categories } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enkarneil.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    cat.projects.map((proj) => ({
      url: `${baseUrl}/${cat.slug}/${proj.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  );

  return [...staticPages, ...categoryPages, ...projectPages];
}
