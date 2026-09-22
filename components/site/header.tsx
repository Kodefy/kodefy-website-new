"use client";

import { useEffect, useState } from "react";
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
import { DriftPreview } from "@/components/site/drift-preview";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

export function Header({
  locale,
  routeId,
}: {
  locale: Locale;
  routeId: RouteId;
}) {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasMenuEntered, setHasMenuEntered] = useState(false);
  const [isMenuAtTop, setIsMenuAtTop] = useState(true);
  const content = homeContent[locale];
  const homePath = getRoutePath("home", locale);
  const navigation = [
    {
      label: locale === "id" ? "Beranda" : "Home",
      href: homePath,
      imageSrc:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: content.navigation.services,
      href: `${homePath}#services`,
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: content.navigation.work,
      href: `${homePath}#work`,
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: content.navigation.process,
      href: `${homePath}#process`,
      imageSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: content.navigation.pricing,
      href: `${homePath}#pricing`,
      imageSrc:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: locale === "id" ? "Kontak" : "Contact",
      href: `${homePath}#contact`,
      imageSrc:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    },
  ];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  useEffect(() => {
    const updateScrollState = () => setIsAtTop(window.scrollY === 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!open) {
      setHasMenuEntered(false);
      return;
    }

    let animationFrame = requestAnimationFrame(() => {
      animationFrame = requestAnimationFrame(() => setHasMenuEntered(true));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [open]);

  const showLogo = isAtTop && (!open || isMenuAtTop);

  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) setIsMenuAtTop(true);
      }}
    >
      <header className="pointer-events-none fixed top-0 right-0 z-[60] mix-blend-difference p-6 sm:p-8 lg:p-12">
        <div className="pointer-events-auto flex items-center gap-6">
          <Link
            href={homePath}
            onClick={() => setOpen(false)}
            aria-label={locale === "id" ? "Beranda Kodefy" : "Kodefy home"}
            aria-hidden={!showLogo}
            tabIndex={showLogo ? 0 : -1}
            className={`transition-opacity duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
              showLogo ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
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
        className="!inset-0 !h-dvh !w-full !max-w-none gap-0 overflow-hidden !border-0 bg-black p-0 text-white shadow-none !transition-opacity !duration-1000 data-[side=top]:data-ending-style:!translate-y-0 data-[side=top]:data-starting-style:!translate-y-0"
      >
        <SheetTitle className="sr-only">
          {locale === "id" ? "Menu utama" : "Main menu"}
        </SheetTitle>
        <SheetDescription className="sr-only">
          {locale === "id"
            ? "Navigasi utama website Kodefy"
            : "Primary navigation for the Kodefy website"}
        </SheetDescription>

        <div
          className="mx-auto flex h-full w-full max-w-[1440px] flex-col overflow-y-auto px-6 pt-32 pb-8 sm:px-8 sm:pt-36 lg:overflow-hidden lg:px-12 lg:pt-40"
          onScroll={(event) =>
            setIsMenuAtTop(event.currentTarget.scrollTop === 0)
          }
        >
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
            Menu
          </p>

          <nav
            aria-label={
              locale === "id" ? "Navigasi utama" : "Primary navigation"
            }
            className="group/menu flex flex-1 flex-wrap content-center gap-x-10 gap-y-4 py-12 lg:gap-x-12 lg:gap-y-6"
          >
            {navigation.map((item, index) => (
              <span
                key={item.href}
                className={`transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  open
                    ? hasMenuEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
                style={{ transitionDelay: open ? `${index * 100}ms` : "0ms" }}
              >
                <DriftPreview
                  href={item.href}
                  imageSrc={item.imageSrc}
                  onClick={() => setOpen(false)}
                  className="group relative z-10 flex items-start gap-2 text-5xl leading-none font-extralight tracking-tight text-white transition-colors duration-200 group-hover/menu:text-white/60 hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-6xl lg:text-8xl xl:text-9xl"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="relative z-10 mt-1 text-base font-medium tracking-normal text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </DriftPreview>
              </span>
            ))}
          </nav>

          <div className="grid gap-8 border-t border-white/20 pt-6 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white">Kodefy</p>
              <p className="mt-2">{business.location}</p>
              <p className="mt-1">
                {locale === "id" ? "Sejak 2020" : "Since 2020"}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <a className="hover:text-white" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              <a
                className="hover:text-white"
                href={business.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                {business.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-3">
              {(["id", "en"] as const).map((language) => (
                <SheetClose
                  key={language}
                  nativeButton={false}
                  render={
                    <a
                      href={getRoutePath(routeId, language)}
                      hrefLang={language}
                    />
                  }
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
