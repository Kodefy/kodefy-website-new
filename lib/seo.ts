import type { Metadata } from "next";

import {
  aboutPageContent,
  contactPageContent,
  homeContent,
  legalSeo,
  portfolioPageContent,
  servicesPageContent,
  seoServicePageContent,
  analyticsServicePageContent,
  webDevelopmentPageContent,
} from "@/content/site";
import {
  getAbsoluteRouteUrl,
  getLanguageAlternates,
  productionOrigin,
  type Locale,
  type RouteId,
} from "@/lib/routes";

export function buildPageMetadata(routeId: RouteId, locale: Locale): Metadata {
  const seo =
    routeId === "home"
      ? homeContent[locale].seo
      : routeId === "about"
        ? aboutPageContent[locale].seo
      : routeId === "services"
        ? servicesPageContent[locale].seo
        : routeId === "webDevelopment"
          ? webDevelopmentPageContent[locale].seo
          : routeId === "seo"
            ? seoServicePageContent[locale].seo
            : routeId === "analytics"
              ? analyticsServicePageContent[locale].seo
          : routeId === "portfolio"
          ? portfolioPageContent[locale].seo
          : routeId === "contact"
            ? contactPageContent[locale].seo
            : legalSeo[routeId][locale];
  const canonical = getAbsoluteRouteUrl(routeId, locale);

  return {
    metadataBase: new URL(productionOrigin),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(routeId),
    },
    openGraph: {
      type: "website",
      siteName: "Kodefy",
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [
        {
          url: `${productionOrigin}/assets/brand/social-card.jpg`,
          width: 2250,
          height: 2250,
          alt: "Kodefy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${productionOrigin}/assets/brand/social-card.jpg`],
    },
  };
}
