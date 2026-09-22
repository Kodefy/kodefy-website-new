import type { MetadataRoute } from "next";

import {
  getAbsoluteRouteUrl,
  getLanguageAlternates,
  locales,
  routeRegistry,
  type RouteId,
} from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routeIds = Object.keys(routeRegistry) as RouteId[];

  return routeIds.flatMap((routeId) =>
    locales.map((locale) => ({
      url: getAbsoluteRouteUrl(routeId, locale),
      changeFrequency: routeId === "home" ? ("monthly" as const) : ("yearly" as const),
      priority: routeId === "home" ? 1 : 0.3,
      alternates: { languages: getLanguageAlternates(routeId) },
    })),
  );
}
