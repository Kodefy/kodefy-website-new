import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { aboutPageContent, business } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function AboutStory({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale].story;
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan proyek saya."
      : "Hi Kodefy, I'd like to discuss my project.",
  )}`;

  return (
    <section className="bg-white text-black">
      <div className="mx-auto grid max-w-360 gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-lg">
          <h2 className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 whitespace-pre-line text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />
          <FadeIn className="mt-8" delay={0.3}>
            <FillButton
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="solid"
            >
              {content.cta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>

        <FrameReveal
          src={content.imageSrc}
          alt={content.imageAlt}
          className="h-96 w-full lg:h-136"
        />
      </div>
    </section>
  );
}
