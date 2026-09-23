import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import WorldMap from "@/components/ui/world-map";
import { aboutPageContent, business } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function RemoteCollaboration({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale].remoteCollaboration;
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin berdiskusi lebih lanjut."
      : "Hello Kodefy, I would like to discuss further.",
  )}`;

  return (
    <section
      data-fill-button-surface="dark"
      className="bg-black py-20 text-white sm:py-28 lg:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="px-6 sm:px-8 lg:px-0">
          <WorldMap
            lineColor="#fff"
            theme="dark"
          dots={[
            {
              start: { lat: -6.3, lng: 106.65, label: "Tangerang" },
              end: { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
            },
            {
              start: { lat: -6.3, lng: 106.65, label: "Tangerang" },
              end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
            },
            {
              start: { lat: -6.3, lng: 106.65, label: "Tangerang" },
              end: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
            },
            {
              start: { lat: -6.3, lng: 106.65, label: "Tangerang" },
              end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
            },
            {
              start: { lat: -6.3, lng: 106.65, label: "Tangerang" },
              end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
            },
          ]}
            lineHoldDuration={5}
          />
        </div>

        <div className="max-w-xl px-6 sm:px-8 lg:px-20">
          <h2 className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>

          <div className="mt-12 divide-y divide-white/20 border-y border-white/20">
            <div className="py-6">
              <FadeInText
                className="text-sm text-white/70"
                text={content.emailLabel}
              />
              <div className="mt-2 text-lg font-medium">
                <FadeIn delay={0.1}>
                  <a className="hover:underline" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </FadeIn>
              </div>
            </div>
            <div className="py-6">
              <FadeInText
                className="text-sm text-white/70"
                text={content.phoneLabel}
                delay={0.1}
              />
              <div className="mt-2 text-lg font-medium">
                <FadeIn delay={0.2}>
                  <a className="hover:underline" href={`tel:${business.phoneInternational}`}>
                    {business.phoneDisplay}
                  </a>
                </FadeIn>
              </div>
              <FadeIn className="mt-6" delay={0.3}>
                <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
                  {content.whatsappCta}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </FillButton>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
