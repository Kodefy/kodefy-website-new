import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales, routeRegistry } from "@/lib/routes";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
  pathnames: {
    "/": routeRegistry.home.paths,
    "/terms": routeRegistry.terms.paths,
    "/privacy": routeRegistry.privacy.paths,
    "/services": routeRegistry.services.paths,
    "/services/web-development": routeRegistry.webDevelopment.paths,
    "/portfolio": routeRegistry.portfolio.paths,
    "/about": routeRegistry.about.paths,
    "/contact": routeRegistry.contact.paths,
  },
});
