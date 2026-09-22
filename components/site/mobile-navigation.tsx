"use client";

import { ArrowUpRight, Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import type { Locale, RouteId } from "@/lib/routes";

export function MobileNavigation({
  locale,
  routeId,
  links,
  ctaLabel,
  whatsappHref,
}: {
  locale: Locale;
  routeId: RouteId;
  links: { label: string; href: string }[];
  ctaLabel: string;
  whatsappHref: string;
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label={locale === "id" ? "Buka menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent className="w-[min(88vw,24rem)] bg-[#f5f3ee] p-0">
        <SheetHeader className="border-b border-black/10 p-6 pr-16 text-left">
          <SheetTitle className="text-lg font-semibold">Kodefy</SheetTitle>
          <SheetDescription>
            {locale === "id"
              ? "Website, SEO, dan analitik untuk bisnis yang bertumbuh."
              : "Websites, SEO, and analytics for growing businesses."}
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col px-6 py-5" aria-label="Mobile navigation">
          {links.map((link) => (
            <SheetClose key={link.href} render={<a href={link.href} />}>
              <span className="block border-b border-black/10 py-4 text-xl font-semibold">
                {link.label}
              </span>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto space-y-5 border-t border-black/10 p-6">
          <LanguageSwitcher locale={locale} routeId={routeId} />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-between rounded-lg bg-[#1847e8] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1847e8]"
          >
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
