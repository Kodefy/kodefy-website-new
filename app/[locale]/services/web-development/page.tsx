import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { WebDevelopmentPage } from "@/app/components/web-development/web-development-page";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return buildPageMetadata("webDevelopment", locale as Locale);
}

export default async function WebDevelopmentRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return <WebDevelopmentPage locale={locale as Locale} />;
}
