"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { getRouteIdFromPathname, type Locale } from "@/lib/routes";

export function SiteFooter({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const routeId = getRouteIdFromPathname(pathname, locale);

  return <Footer key={pathname} locale={locale} routeId={routeId} />;
}
