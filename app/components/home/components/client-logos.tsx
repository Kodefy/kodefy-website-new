"use client";

import { LogoLoop } from "@/components/site/logo-loop";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { clients, homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function ClientLogos({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <section aria-labelledby="client-logos-heading" className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-16">
        <h2
          id="client-logos-heading"
          className="max-w-52 text-xl leading-tight font-medium tracking-tight text-black"
        >
          <RevealHeadline revealBy="character" text={content.trust.label} />
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
            ariaLabel={content.trust.logosLabel}
            style={{ filter: "grayscale(1) contrast(1.25)" }}
          />
        </div>
      </div>
    </section>
  );
}
