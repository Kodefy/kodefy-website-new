export const productionOrigin = "https://kodefy.id";

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export const routeRegistry = {
  home: {
    internalPath: "/",
    paths: { en: "/", id: "/" },
  },
  terms: {
    internalPath: "/terms",
    paths: { en: "/terms", id: "/syarat-ketentuan" },
  },
  privacy: {
    internalPath: "/privacy",
    paths: { en: "/privacy", id: "/kebijakan-privasi" },
  },
  services: {
    internalPath: "/services",
    paths: { en: "/services", id: "/layanan" },
  },
} as const;

export type RouteId = keyof typeof routeRegistry;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getRoutePath(routeId: RouteId, locale: Locale) {
  const localizedPath = routeRegistry[routeId].paths[locale];
  return `/${locale}${localizedPath === "/" ? "" : localizedPath}`;
}

export function getAbsoluteRouteUrl(routeId: RouteId, locale: Locale) {
  return `${productionOrigin}${getRoutePath(routeId, locale)}`;
}

export function getLanguageAlternates(routeId: RouteId) {
  return {
    en: getAbsoluteRouteUrl(routeId, "en"),
    id: getAbsoluteRouteUrl(routeId, "id"),
    "x-default": getAbsoluteRouteUrl(routeId, defaultLocale),
  };
}

export function getCanonicalLocaleRedirect(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const requestedLocale = segments[0];

  if (!requestedLocale || !isLocale(requestedLocale)) return null;

  const requestedPath = `/${segments.slice(1).join("/")}`.replace(/\/$/, "") || "/";

  for (const [routeId, route] of Object.entries(routeRegistry) as [
    RouteId,
    (typeof routeRegistry)[RouteId],
  ][]) {
    const canonicalPath = route.paths[requestedLocale];
    const isOtherLocalePath = locales.some(
      (locale) => locale !== requestedLocale && route.paths[locale] === requestedPath,
    );

    if (isOtherLocalePath && requestedPath !== canonicalPath) {
      return getRoutePath(routeId, requestedLocale);
    }
  }

  return null;
}
