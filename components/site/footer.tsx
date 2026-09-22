import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/site/language-switcher";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

export function Footer({ locale, routeId }: { locale: Locale; routeId: RouteId }) {
  const content = homeContent[locale];
  const homePath = getRoutePath("home", locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0f] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href={homePath} aria-label="Kodefy home" className="inline-block rounded-sm bg-white px-3 py-2">
              <Image
                src="/assets/brand/kodefy-logo.png"
                alt="Kodefy"
                width={120}
                height={30}
                className="h-auto w-[110px]"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/60">{content.footer.summary}</p>
            <p className="mt-3 text-sm text-white/45">{business.location}</p>
          </div>

          <FooterGroup title={content.footer.navigate}>
            <a href={`${homePath}#services`}>{content.navigation.services}</a>
            <a href={`${homePath}#work`}>{content.navigation.work}</a>
            <a href={`${homePath}#process`}>{content.navigation.process}</a>
            <a href={`${homePath}#pricing`}>{content.navigation.pricing}</a>
          </FooterGroup>

          <FooterGroup title={content.footer.contact}>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={business.whatsapp} target="_blank" rel="noreferrer">
              {business.phoneDisplay}
            </a>
            <a href={business.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </FooterGroup>

          <FooterGroup title={content.footer.legal}>
            <Link href={getRoutePath("terms", locale)}>{content.footer.terms}</Link>
            <Link href={getRoutePath("privacy", locale)}>{content.footer.privacy}</Link>
          </FooterGroup>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {year} Kodefy. {content.footer.rights}
          </p>
          <LanguageSwitcher locale={locale} routeId={routeId} compact />
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.16em] text-white/40 uppercase">{title}</h2>
      <div className="mt-4 flex flex-col gap-3 text-sm text-white/75 [&_a]:w-fit [&_a]:hover:text-white [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-white">
        {children}
      </div>
    </div>
  );
}
