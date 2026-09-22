"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

export function Header({ locale, routeId }: { locale: Locale; routeId: RouteId }) {
  const [open, setOpen] = useState(false);
  const content = homeContent[locale];
  const homePath = getRoutePath("home", locale);
  const navigation = [
    { label: locale === "id" ? "Beranda" : "Home", href: homePath },
    { label: content.navigation.services, href: `${homePath}#services` },
    { label: content.navigation.work, href: `${homePath}#work` },
    { label: content.navigation.process, href: `${homePath}#process` },
    { label: content.navigation.pricing, href: `${homePath}#pricing` },
    { label: locale === "id" ? "Kontak" : "Contact", href: `${homePath}#contact` },
  ];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  return (
    <Sheet open={open} onOpenChange={(nextOpen) => setOpen(nextOpen)}>
      <header className="pointer-events-none fixed top-0 right-0 z-[60] mix-blend-difference p-6 sm:p-8 lg:p-12">
        <div className="pointer-events-auto flex items-center gap-6">
          <Link
            href={homePath}
            onClick={() => setOpen(false)}
            aria-label={locale === "id" ? "Beranda Kodefy" : "Kodefy home"}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image
              src="/assets/brand/kodefy-logo.png"
              alt="Kodefy"
              width={120}
              height={30}
              priority
              className="h-auto w-28 invert"
            />
          </Link>

          <SheetTrigger
            aria-label={
              open
                ? locale === "id"
                  ? "Tutup menu"
                  : "Close menu"
                : locale === "id"
                  ? "Buka menu"
                  : "Open menu"
            }
            className="group relative h-8 w-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="absolute top-2 right-0 h-px w-10 bg-white transition-all group-hover:w-6 group-aria-expanded:top-4 group-aria-expanded:w-10 group-aria-expanded:rotate-45" />
            <span className="absolute right-0 bottom-2 h-px w-10 bg-white transition-all group-hover:w-8 group-aria-expanded:bottom-4 group-aria-expanded:w-10 group-aria-expanded:-rotate-45" />
          </SheetTrigger>
        </div>
      </header>

      <SheetContent
        side="top"
        showCloseButton={false}
        className="!inset-0 !h-dvh !w-full !max-w-none gap-0 overflow-hidden !border-0 bg-black p-0 text-white shadow-none"
      >
        <SheetTitle className="sr-only">
          {locale === "id" ? "Menu utama" : "Main menu"}
        </SheetTitle>
        <SheetDescription className="sr-only">
          {locale === "id"
            ? "Navigasi utama website Kodefy"
            : "Primary navigation for the Kodefy website"}
        </SheetDescription>

        <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col overflow-y-auto px-6 pt-32 pb-8 sm:px-8 sm:pt-36 lg:overflow-hidden lg:px-12 lg:pt-40">
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">Menu</p>

          <nav
            aria-label={locale === "id" ? "Navigasi utama" : "Primary navigation"}
            className="grid flex-1 content-center gap-x-10 gap-y-4 py-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {navigation.map((item, index) => (
              <SheetClose
                key={item.href}
                nativeButton={false}
                render={<a href={item.href} />}
                className="group flex items-start gap-2 text-5xl leading-none font-light tracking-tight text-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-6xl lg:text-7xl"
              >
                <span>{item.label}</span>
                <span className="mt-1 text-xs font-medium text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </SheetClose>
            ))}
          </nav>

          <div className="grid gap-8 border-t border-white/20 pt-6 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white">Kodefy</p>
              <p className="mt-2">{business.location}</p>
              <p className="mt-1">{locale === "id" ? "Sejak 2020" : "Since 2020"}</p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <a className="hover:text-white" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              <a className="hover:text-white" href={business.whatsapp} target="_blank" rel="noreferrer">
                {business.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-3">
              {(["id", "en"] as const).map((language) => (
                <SheetClose
                  key={language}
                  nativeButton={false}
                  render={<a href={getRoutePath(routeId, language)} hrefLang={language} />}
                  className={
                    locale === language
                      ? "text-white underline underline-offset-4"
                      : "hover:text-white"
                  }
                >
                  {language.toUpperCase()}
                </SheetClose>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-semibold text-white hover:text-white/70 lg:justify-self-end"
            >
              {content.cta.primary}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
