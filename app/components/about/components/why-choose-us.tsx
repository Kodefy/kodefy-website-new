import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { aboutPageContent } from "@/content/site";
import { getRoutePath, type Locale } from "@/lib/routes";

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale].whyChooseUs;

  return (
    <section className="relative isolate overflow-hidden bg-white text-black">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-2/5 bg-zinc-100 lg:block"
      />
      <div className="relative mx-auto grid max-w-360 gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <FrameReveal
          src={content.imageSrc}
          alt={content.imageAlt}
          className="h-80 w-full lg:h-136"
        />

        <div className="max-w-xl">
          <h2 className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />
          <FadeIn className="mt-8" delay={0.3}>
            <FillButton href={getRoutePath("services", locale)} variant="outline">
              {content.cta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
