import type { MetadataRoute } from "next";
import { services, projects } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wildpaws-exotic-pet-care.amsitservices.com";
  const now = new Date();

  const staticPages = ["", "/services", "/about", "/projects", "/pricing", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/projects#${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
