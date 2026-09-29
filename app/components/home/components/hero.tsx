import { ArrowUpRight } from "lucide-react";

import DriftWall from "@/components/DriftWall";
import { FadeIn } from "@/components/site/fade-in";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { Spotlight } from "@/components/ui/spotlight";
import { sharedHeroDriftWallItems } from "@/content/shared-assets";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale } from "@/lib/routes";

export function Hero({ locale }: { locale: Locale }) {
  const home = homeContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan digital bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's digital needs.",
  )}`;

  return (
    <section className="relative isolate grid h-svh bg-black lg:grid-cols-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden bg-black lg:hidden"
      >
        <Spotlight
          className="-top-0 -right-24 sm:-top-4 sm:-right-20"
          direction="right"
          fill="white"
        />
      </div>
      <div
        data-fill-button-surface="dark"
        className="relative z-10 flex max-h-screen items-start bg-transparent px-6 pt-24 pb-6 text-white sm:items-center sm:px-10 sm:py-16 lg:bg-black lg:px-12 xl:px-16 xl:py-24"
      >
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl leading-none font-light tracking-tight text-white sm:text-6xl xl:text-7xl">
            <RevealHeadline
              characterStagger={0.01}
              revealBy="character"
              text={[home.hero.title, home.hero.highlightedTitle].join(" ")}
            />
          </h1>

          <div className="mt-8 flex items-end justify-between gap-8 border-t border-white/20 pt-6">
            <div>
              <p
                className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
              >
                {home.hero.body}
              </p>
            </div>
          </div>

          <FadeIn className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.3} stagger={0.1}>
            <FillButton
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="solid"
            >
              {home.cta.primary}
              <ArrowUpRight aria-hidden="true" />
            </FillButton>
            <FillButton href={getRoutePath("portfolio", locale)}>
              {home.cta.secondary}
              <ArrowUpRight aria-hidden="true" />
            </FillButton>
          </FadeIn>
        </div>
      </div>

      <div className="hidden overflow-hidden bg-black lg:block">
        <DriftWall
          items={sharedHeroDriftWallItems}
          columns={3}
          tileWidth={320}
          tileHeight={180}
          gap={14}
          tilt={25}
          turn={-20}
          perspective={1100}
          depth={80}
          speed={30}
          variance={0.5}
          parallax={1}
          lift={50}
          fade={0.5}
          dim={1}
          overlayColor="#000"
          style={{}}
        />
      </div>
    </section>
  );
}
