import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/episodes", "/about", "/subscribe", "/contact"];
  return routes.map((route) => ({
    url: `https://offratio.com${route}`,
    lastModified: new Date(),
  }));
}
