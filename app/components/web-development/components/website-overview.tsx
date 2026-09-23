import { ArrowUpRight } from "lucide-react";

import { DriftPreview } from "@/components/site/drift-preview";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { SlideFadeIn } from "@/components/site/slide-fade-in";
import { FillButton } from "@/components/ui/fill-button";
import { business, servicesPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function WebsiteOverview({ locale }: { locale: Locale }) {
  const service = servicesPageContent[locale].details[0];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan proyek website saya."
      : "Hi Kodefy, I'd like to discuss my website project.",
  )}`;

  return (
    <section aria-labelledby="website-overview-heading" className="bg-white text-black">
      <div className="mx-auto grid max-w-360 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.75fr_0.8fr_0.6fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="w-full max-w-xl">
          <h2
            id="website-overview-heading"
            className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RevealHeadline revealBy="character" text={service.title} />
          </h2>
          <FadeInText
            className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={service.body}
            delay={0.15}
          />
          <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.3} stagger={0.1}>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
              {locale === "id" ? "Diskusikan layanan ini" : "Discuss this service"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>

        <FrameReveal
          src={service.imageSrc}
          alt={service.imageAlt}
          backgroundClassName="bg-black"
          className="mx-auto w-full max-w-md"
        />

        <ul className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
          {service.labels.map((label, index) => (
            <li
              key={label}
              className="relative py-5 text-xl font-medium tracking-tight sm:text-2xl after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-black/15 last:after:hidden lg:after:right-[-100vw]"
            >
              <SlideFadeIn
                className="w-full"
                delay={index * 0.1}
                desktopDirection="right"
                mobileDirection={index % 2 === 0 ? "left" : "right"}
              >
                <DriftPreview
                  imageSrc={service.imageSrc}
                  imageAlt=""
                  previewWidth={224}
                  previewHeight={280}
                  zIndex={5}
                  className="group flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  <span>{label}</span>
                  <span className="flex items-center gap-3 text-sm font-normal text-black/45 transition-colors duration-200 group-hover:text-black">
                    {String(index + 1).padStart(2, "0")}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </DriftPreview>
              </SlideFadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
