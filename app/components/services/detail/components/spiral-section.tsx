import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

import InfiniteSpiralBase from "@/components/InfiniteSpiral";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import type { ServiceProject } from "./selected-work";

type SpiralItem = { id: string; src: string; alt: string; label: string };
type InfiniteSpiralProps = {
  items: SpiralItem[];
  animationMode?: "auto" | "scroll" | "drag" | "all";
  direction?: "up" | "down";
  imageFit?: "cover" | "contain";
  grayscale?: number;
  speed?: number;
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardsPerTurn?: number;
  rotation?: number;
  cardTilt?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeFade?: number;
  edgeBlur?: number;
  pauseOnHover?: boolean;
};
const InfiniteSpiral = InfiniteSpiralBase as ComponentType<InfiniteSpiralProps>;

export type ServiceSpiralVisual = {
  cardHeight?: number;
  cardWidth?: number;
  centerScale?: number;
  radius?: number;
  speed?: number;
  verticalSpacing?: number;
};

export type ServiceSpiralContent = {
  title: string;
  body: string;
  cta: string;
  visual?: ServiceSpiralVisual;
};

export function ServiceSpiral({
  content,
  projects,
  whatsappHref,
  sectionId = "service-spiral",
}: {
  content: ServiceSpiralContent;
  projects: ServiceProject[];
  whatsappHref: string;
  sectionId?: string;
}) {
  const items = projects.map((project, index) => {
    return {
      id: `${project.name}-${index + 1}`,
      src: project.image,
      alt: project.alt,
      label: project.name,
    };
  });
  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      data-fill-button-surface="dark"
      className="bg-black text-white"
    >
      <div className="mx-auto grid max-w-360 gap-12 px-6 py-20 sm:px-8 lg:min-h-svh lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-0">
        <div className="max-w-xl">
          <h2
            id={`${sectionId}-heading`}
            className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />
          <FadeIn className="mt-8" delay={0.3}>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
              {content.cta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>

        <FadeIn className="h-105 sm:h-120 lg:h-svh" delay={0.15}>
          <InfiniteSpiral
            items={items}
            animationMode="auto"
            direction="up"
            imageFit="cover"
            grayscale={0}
            speed={content.visual?.speed ?? 0.3}
            radius={content.visual?.radius ?? 150}
            cardWidth={content.visual?.cardWidth ?? 160}
            cardHeight={content.visual?.cardHeight ?? 100}
            verticalSpacing={content.visual?.verticalSpacing ?? 80}
            perspective={500}
            cardsPerTurn={items.length}
            rotation={0}
            cardTilt={0}
            cardRadius={0}
            centerScale={content.visual?.centerScale ?? 1.2}
            edgeFade={0.8}
            edgeBlur={6}
            pauseOnHover={false}
          />
        </FadeIn>
      </div>
    </section>
  );
}
