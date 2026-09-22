import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Gauge,
  MessagesSquare,
  Sparkles,
} from "lucide-react";

import { ClientLogos } from "@/app/components/home/components/client-logos";
import { Expectations } from "@/app/components/home/components/expectations";
import { Hero } from "@/app/components/home/components/hero";
import { Services } from "@/app/components/home/components/services";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { business, homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

const reasonIcons = [Sparkles, MessagesSquare, Gauge, Check];

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

        <section id="work" className="scroll-mt-24 bg-[#f8f7f3]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionIntro {...content.workIntro} />
            <div className="mt-12 space-y-5">
              {content.projects.map((project, index) => (
                <article
                  key={project.name}
                  className="grid overflow-hidden rounded-[1.6rem] border border-black/10 bg-white lg:grid-cols-[1.08fr_0.92fr]"
                >
                  <div className={`relative min-h-[320px] lg:min-h-[500px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <p className="section-eyebrow">{project.type}</p>
                    <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{project.name}</h3>
                    <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">{project.summary}</p>
                    <div className="mt-auto pt-12">
                      <p className="border-t border-black/10 pt-5 text-sm font-semibold text-black/65">
                        {project.delivery}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <SectionIntro {...content.whyIntro} />
              <div className="mt-10 hidden lg:block">
                <div className="flex size-40 items-center justify-center rounded-full bg-[#1847e8] text-white">
                  <ArrowDownRight aria-hidden="true" className="size-14" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
              {content.reasons.map((reason, index) => {
                const Icon = reasonIcons[index];
                return (
                  <article key={reason.title} className="min-h-64 bg-[#f8f7f3] p-7 sm:p-8">
                    <Icon aria-hidden="true" className="size-6 text-[#1847e8]" />
                    <h3 className="mt-12 text-xl font-semibold tracking-tight">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/58">{reason.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-[#e9e7e0]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionIntro {...content.processIntro} />
            <ol className="mt-12 border-t border-black/15">
              {content.process.map((step) => (
                <li key={step.number} className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-start sm:gap-8 lg:py-9">
                  <span className="font-mono text-xs font-semibold text-[#1847e8]">{step.number}</span>
                  <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">{step.title}</h3>
                  <p className="max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

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
