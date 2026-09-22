import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { HomePage } from "@/app/components/home/home-page";
import { business } from "@/content/site";
import { routing } from "@/i18n/routing";
import { productionOrigin, type Locale } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return buildPageMetadata("home", locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: business.name,
      url: productionOrigin,
      logo: `${productionOrigin}/assets/brand/kodefy-logo.png`,
      email: business.email,
      telephone: business.phoneInternational,
      foundingDate: business.founded,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tangerang Selatan",
        addressCountry: "ID",
      },
      sameAs: [business.github],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: business.name,
      url: productionOrigin,
      inLanguage: ["id", "en"],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage locale={locale as Locale} />
    </>
  );
}
