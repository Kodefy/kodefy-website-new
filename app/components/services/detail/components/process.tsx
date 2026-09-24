import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { SlideFadeIn } from "@/components/site/slide-fade-in";
import { FillButton } from "@/components/ui/fill-button";
import type { Locale } from "@/lib/routes";

export type ServiceProcessContent = {
  title: string;
  primaryCta: string;
  phoneCta: string;
  steps: { number: string; title: string; body: string }[];
};

export function ServiceProcess({
  locale,
  content,
  whatsappHref,
  sectionId = "service-process",
}: {
  locale: Locale;
  content: ServiceProcessContent;
  whatsappHref: string;
  sectionId?: string;
}) {

  return (
    <section aria-labelledby={`${sectionId}-heading`} className="bg-white text-black">
      <div className="mx-auto grid max-w-360 gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.62fr)] lg:gap-20 lg:px-12 lg:py-0">
        <div className="py-0 lg:py-28">
          <h2
            id={`${sectionId}-heading`}
            className="max-w-3xl text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>

          <ol className="mt-14 border-t border-black/15 lg:mt-20">
            {content.steps.map((step, index) => (
              <SlideFadeIn
                key={step.number}
                as="li"
                className="grid gap-5 border-b border-black/15 py-10 sm:grid-cols-[10rem_1fr] sm:gap-10 lg:py-14"
                delay={index * 0.1}
                desktopDirection="left"
                mobileDirection={index % 2 === 0 ? "left" : "right"}
              >
                <FadeInText
                  className="pt-1 text-sm text-black/45"
                  text={`${locale === "id" ? "Langkah" : "Step"} ${step.number}`}
                  delay={0.1}
                />
                <div className="max-w-xl">
                  <h3 className="text-3xl leading-none font-light tracking-tight sm:text-4xl">
                    <RevealHeadline revealBy="character" text={step.title} />
                  </h3>
                  <FadeInText
                    className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                    text={step.body}
                    delay={0.15}
                  />
                </div>
              </SlideFadeIn>
            ))}
          </ol>
        </div>

        <aside className="flex flex-col lg:sticky lg:top-12 lg:self-start lg:min-h-[calc(100svh-6rem)] lg:py-28">
          <FadeIn className="flex flex-wrap gap-3 lg:justify-end" delay={0.2} stagger={0.1}>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
              {content.primaryCta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="outline">
              {content.phoneCta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>

          <div className="mt-12 flex flex-1 items-center justify-center lg:mt-0">
            <FadeIn
              className="relative aspect-4/5 w-full max-w-lg lg:max-w-145 lg:translate-y-[clamp(4rem,8vh,8rem)]"
              delay={0.25}
            >
              <Image
                src="/assets/mockups/kodefy-phone-mockup.webp"
                alt={
                  locale === "id"
                    ? "Tampilan website Kodefy pada mockup ponsel"
                    : "Kodefy website shown on a phone mockup"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-contain object-top-left"
              />
            </FadeIn>
          </div>
        </aside>
      </div>
    </section>
  );
}
