import { ArrowUpRight } from "lucide-react";

import { AccordionGallery } from "@/components/site/accordion-gallery";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function SuccessStories({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const featuredProject = content.projects[0];
  const galleryItems = content.projects.slice(1).map((project) => ({
    image: project.image,
    alt: project.alt,
    label: project.name,
  }));

  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-zinc-100 text-black"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/3 bg-white"
      />
      <div className="relative mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <article className="relative aspect-[4/5] overflow-hidden">
            <FrameReveal
              src={featuredProject.image}
              alt={featuredProject.alt}
              className="size-full aspect-auto"
            />
            <p className="absolute right-6 bottom-6 left-6 z-30 text-4xl leading-none font-light tracking-tight text-white sm:text-5xl">
              {featuredProject.name}
            </p>
          </article>

          <div className="flex flex-col justify-center py-2 lg:py-10">
            <h2 className="max-w-2xl text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-7xl">
              <RevealHeadline
                revealBy="character"
                text={content.workIntro.title}
              />
            </h2>
            <FadeInText
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              text={content.workIntro.body}
              delay={0.15}
            />
            <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.3} stagger={0.1}>
              <FillButton href="#contact" variant="solid">
                {locale === "id"
                  ? "Diskusikan proyek Anda"
                  : "Discuss your project"}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </FillButton>
              <FillButton href="#work-gallery" variant="outline">
                {locale === "id" ? "Lihat karya" : "Browse portfolio"}
              </FillButton>
            </FadeIn>
            <div className="mt-10 flex items-center justify-between border-t border-black/15 pt-6">
              <FadeInText
                className="text-sm font-medium"
                text={
                  locale === "id"
                    ? "Ikuti karya kami di:"
                    : "Follow our work on:"
                }
                delay={0.4}
              />
              <div className="flex items-center gap-5">
                {["facebook", "instagram", "linkedin", "threads", "tiktok"].map(
                  (social, index) => (
                    <FadeIn key={social} delay={0.45 + index * 0.08}>
                      <button
                        type="button"
                        aria-label={social}
                        className="transition-opacity duration-200 hover:cursor-pointer hover:opacity-60"
                      >
                        <img
                          src={`/assets/social/${social}.svg`}
                          alt=""
                          aria-hidden="true"
                          className="size-4"
                        />
                      </button>
                    </FadeIn>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div id="work-gallery" className="mt-8 lg:mt-12">
          <FadeIn delay={0.1}>
            <AccordionGallery
              items={galleryItems}
              defaultIndex={0}
              height={420}
              gap={16}
              radius={0}
              expandRatio={0.9}
              grayscale={false}
              overlayColor="#000000"
              accentColor="#ffffff"
              textColor="#ffffff"
              tilt={0}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
