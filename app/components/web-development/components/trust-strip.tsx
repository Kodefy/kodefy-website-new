"use client";

import { LogoLoop } from "@/components/site/logo-loop";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { clients, webDevelopmentPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function TrustStrip({ locale }: { locale: Locale }) {
  const content = webDevelopmentPageContent[locale].trust;

  return (
    <section aria-labelledby="web-development-trust-heading" className="bg-white">
      <div className="mx-auto flex max-w-360 flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-16">
        <h2
          id="web-development-trust-heading"
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
