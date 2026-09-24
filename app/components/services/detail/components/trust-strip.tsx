"use client";

import { LogoLoop } from "@/components/site/logo-loop";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { clients } from "@/content/site";

export type ServiceTrustContent = { label: string; logosLabel: string };

export function ServiceTrustStrip({
  content,
  sectionId = "service-trust",
}: {
  content: ServiceTrustContent;
  sectionId?: string;
}) {
  return (
    <section aria-labelledby={`${sectionId}-heading`} className="bg-white">
      <div className="mx-auto flex max-w-360 flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-16">
        <h2
          id={`${sectionId}-heading`}
          className="max-w-52 text-xl leading-tight font-medium tracking-tight text-black"
        >
          <RevealHeadline revealBy="character" text={content.label} />
        </h2>

        <div className="min-w-0 flex-1 overflow-hidden">
          <LogoLoop
            logos={clients}
            speed={32}
            direction="left"
            logoHeight={42}
            gap={56}
            fadeOut
            fadeOutColor="#ffffff"
            pauseOnHover={false}
            ariaLabel={content.logosLabel}
            style={{ filter: "grayscale(1) contrast(1.25)" }}
          />
        </div>
      </div>
    </section>
  );
}
