import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business, homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function Hero({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  return (
    <section className="grid h-dvh bg-black lg:grid-cols-2">
      <div className="flex items-center bg-black px-6 py-12 text-white sm:px-10 lg:px-12 xl:px-16">
        <div className="w-full max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-widest text-white/50 uppercase before:h-px before:w-7 before:bg-white/40">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-8 text-5xl leading-none font-medium tracking-tight text-white sm:text-6xl xl:text-7xl">
            {content.hero.title}{" "}
            <span className="block">{content.hero.highlightedTitle}</span>
          </h1>

          <div className="mt-8 flex items-end justify-between gap-8 border-t border-white/20 pt-6">
            <div>
              <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {content.hero.body}
              </p>
              <p className="mt-5 text-xs font-medium tracking-wide text-white/50">
                {content.hero.note}
              </p>
            </div>
            <ArrowDownRight
              aria-hidden="true"
              className="hidden size-9 text-white/50 sm:block"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full bg-white px-6 text-base text-black hover:bg-neutral-200"
              nativeButton={false}
              render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
            >
              {content.cta.primary}
              <ArrowUpRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white hover:text-black"
              nativeButton={false}
              render={<a href="#work" />}
            >
              {content.cta.secondary}
            </Button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="hidden bg-neutral-400 lg:block" />
    </section>
  );
}
