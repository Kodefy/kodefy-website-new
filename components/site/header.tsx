import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { LanguageSwitcher } from "@/components/site/language-switcher";
import { MobileNavigation } from "@/components/site/mobile-navigation";
import { Button } from "@/components/ui/button";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

export function Header({ locale, routeId }: { locale: Locale; routeId: RouteId }) {
  const content = homeContent[locale];
  const homePath = getRoutePath("home", locale);
  const navLinks = [
    { label: content.navigation.services, href: `${homePath}#services` },
    { label: content.navigation.work, href: `${homePath}#work` },
    { label: content.navigation.process, href: `${homePath}#process` },
    { label: content.navigation.pricing, href: `${homePath}#pricing` },
  ];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f8f7f3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={homePath}
          aria-label={locale === "id" ? "Beranda Kodefy" : "Kodefy home"}
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <Image
            src="/assets/brand/kodefy-logo.png"
            alt="Kodefy"
            width={130}
            height={32}
            priority
            className="h-auto w-[112px] sm:w-[126px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-black/65 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} routeId={routeId} compact />
          <Button
            size="lg"
            className="h-11 rounded-full bg-[#1847e8] px-5 text-white hover:bg-[#1238ba]"
            nativeButton={false}
            render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
          >
            {content.cta.primary}
            <ArrowUpRight aria-hidden="true" />
          </Button>
        </div>

        <MobileNavigation
          locale={locale}
          routeId={routeId}
          links={navLinks}
          ctaLabel={content.cta.primary}
          whatsappHref={whatsappHref}
        />
      </div>
    </header>
  );
}
