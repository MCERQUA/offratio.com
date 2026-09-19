import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/episodes", "/about", "/subscribe", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({
    url: `https://offratio.com${route}`,
    lastModified: new Date(),
  }));
}
