import { ArrowUpRight } from "lucide-react";

import { DriftPreview } from "@/components/site/drift-preview";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { SlideFadeIn } from "@/components/site/slide-fade-in";
import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import { getRoutePath, type Locale } from "@/lib/routes";

const imageSrc =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85";

const servicePreviewImages = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
];

export function Expectations({ locale }: { locale: Locale }) {
  const content = homeContent[locale].expectations;
  const serviceDetailSlugs = ["website-development", "seo", "analytics"];
  const servicesPath = getRoutePath("services", locale);

  return (
    <section
      aria-labelledby="expectations-heading"
      className="relative overflow-hidden bg-white text-black"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-1/2 bg-zinc-100 lg:block"
      />
      <div className="relative z-10 mx-auto grid max-w-360 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.6fr_0.8fr_0.75fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <ul className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
          {content.labels.map((label, index) => (
            <li
              key={label}
              className="relative py-5 text-xl font-medium tracking-tight sm:text-2xl after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-black/15 last:after:hidden lg:after:left-[-100vw]"
            >
              <SlideFadeIn
                className="w-full"
                delay={index * 0.1}
                desktopDirection="left"
                mobileDirection={index % 2 === 0 ? "left" : "right"}
              >
                <DriftPreview
                  href={`${servicesPath}#${serviceDetailSlugs[index]}`}
                  imageSrc={servicePreviewImages[index]}
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

        <FrameReveal
          src={imageSrc}
          alt={
            locale === "id"
              ? "Laptop menampilkan data analitik"
              : "Laptop showing analytics data"
          }
          className="mx-auto w-full max-w-md"
        />

        <div>
          <h2
            id="expectations-heading"
            className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />
          <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.3} stagger={0.1}>
            <FillButton href="#contact" variant="solid">
              {content.primary}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
            <FillButton href={getRoutePath("portfolio", locale)} variant="outline">
              {content.secondary}
            </FillButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
