import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal/legal-page";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return buildPageMetadata("privacy", locale);
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return <LegalPage locale={locale as Locale} routeId="privacy" />;
}
