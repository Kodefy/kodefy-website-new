import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { business, homeContent, webDevelopmentPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function SelectedWork({ locale }: { locale: Locale }) {
  const content = webDevelopmentPageContent[locale].selectedWork;
  const projects = homeContent[locale].projects;
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan proyek website saya."
      : "Hi Kodefy, I'd like to discuss my website project.",
  )}`;

  return (
    <section aria-labelledby="web-development-work-heading" className="bg-white text-black">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.75fr)] lg:items-center lg:gap-20">
          <h2
            id="web-development-work-heading"
            className="max-w-2xl text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>

          <FadeIn className="flex flex-wrap gap-3 lg:justify-end" delay={0.2} stagger={0.1}>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
              {content.primaryCta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="outline">
              {content.phoneCta}
            </FillButton>
          </FadeIn>
        </div>

        <FadeInText
          className="mx-auto mt-10 max-w-4xl text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          text={content.body}
          delay={0.15}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-14 lg:items-start">
          {projects.map((project, index) => (
            <FrameReveal
              key={project.name}
              src={project.image}
              alt={project.alt}
              backgroundClassName="bg-black"
              revealFrom={index === 1 ? "top" : "bottom"}
              className={`w-full ${
                index === 0
                  ? "aspect-[4/5]"
                  : index === 1
                    ? "aspect-[3/5] sm:mt-8"
                    : "aspect-[4/5] sm:mt-16"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
