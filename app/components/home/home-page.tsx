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
import { Testimonials } from "@/app/components/home/components/testimonials";
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
        className="fixed top-3 left-3 z-100 -translate-y-20 rounded-md bg-black px-4 py-3 text-sm font-semibold text-white focus:translate-y-0"
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

        <Testimonials locale={locale} />

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
