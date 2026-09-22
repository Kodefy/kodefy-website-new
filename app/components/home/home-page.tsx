import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { ClientLogos } from "@/app/components/home/components/client-logos";
import { Expectations } from "@/app/components/home/components/expectations";
import { Hero } from "@/app/components/home/components/hero";
import { Process } from "@/app/components/home/components/process";
import { Services } from "@/app/components/home/components/services";
import { SuccessStories } from "@/app/components/home/components/success-stories";
import { WhyKodefy } from "@/app/components/home/components/why-kodefy";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { business, homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function HomePage({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-md bg-black px-4 py-3 text-sm font-semibold text-white focus:translate-y-0"
      >
        {locale === "id" ? "Lewati ke konten" : "Skip to content"}
      </a>
      <Header locale={locale} routeId="home" />
      <main id="main-content">
        <Hero locale={locale} />

        <ClientLogos locale={locale} />

        <Expectations locale={locale} />

        <Services locale={locale} />

        <SuccessStories locale={locale} />

        <WhyKodefy locale={locale} />

        <Process locale={locale} />

        <section id="pricing" className="scroll-mt-24 bg-[#f8f7f3]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionIntro {...content.pricingIntro} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.pricing.map((item) => (
                <article
                  key={item.name}
                  className={`flex min-h-64 flex-col rounded-2xl border p-6 ${
                    item.featured
                      ? "border-[#1847e8] bg-[#1847e8] text-white"
                      : "border-black/10 bg-white text-black"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className={`mt-3 text-sm leading-6 ${item.featured ? "text-white/68" : "text-black/55"}`}>
                    {item.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <p className={`text-xs font-semibold tracking-[0.12em] uppercase ${item.featured ? "text-[#d7ff52]" : "text-black/38"}`}>
                      {locale === "id" ? "Mulai dari" : "Starting from"}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-black/48">{content.pricingIntro.note}</p>
          </div>
        </section>

        <section id="contact" className="bg-[#1847e8] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <p className="section-eyebrow text-[#d7ff52] before:bg-[#d7ff52]">{content.contact.eyebrow}</p>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6.5vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.06em]">
                {content.contact.title}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">{content.contact.body}</p>
            </div>
            <div className="space-y-3">
              <Button
                size="lg"
                className="h-14 w-full justify-between rounded-full bg-[#d7ff52] px-6 text-base text-black hover:bg-white"
                nativeButton={false}
                render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
              >
                {content.contact.whatsappLabel}
                <ArrowUpRight aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-full justify-between rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white hover:text-black"
                nativeButton={false}
                render={<a href={`mailto:${business.email}`} />}
              >
                {content.contact.emailLabel}
                <ArrowRight aria-hidden="true" />
              </Button>
              <p className="pt-3 text-center text-xs text-white/55">{content.contact.expectation}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} routeId="home" />
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div>
        <p className={`section-eyebrow ${dark ? "text-[#d7ff52] before:bg-[#d7ff52]" : ""}`}>{eyebrow}</p>
        <h2 className={`mt-5 max-w-4xl text-[clamp(2.5rem,5.5vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.055em] ${dark ? "text-white" : "text-[#101014]"}`}>
          {title}
        </h2>
      </div>
      <p className={`max-w-xl text-base leading-7 lg:justify-self-end lg:text-lg lg:leading-8 ${dark ? "text-white/58" : "text-black/58"}`}>
        {body}
      </p>
    </div>
  );
}
