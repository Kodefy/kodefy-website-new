import { ArrowUpRight } from "lucide-react";

import DriftWall from "@/components/DriftWall";
import { FadeIn } from "@/components/site/fade-in";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { Spotlight } from "@/components/ui/spotlight";
import { business, webDevelopmentPageContent } from "@/content/site";
import { getRoutePath, type Locale } from "@/lib/routes";

const driftWallItems = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80",
].map((image) => ({ image, title: "Website", href: undefined }));

export function Hero({ locale }: { locale: Locale }) {
  const content = webDevelopmentPageContent[locale].hero;
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan proyek website saya."
      : "Hi Kodefy, I'd like to discuss my website project.",
  )}`;

  return (
    <section className="relative isolate grid h-svh bg-black lg:grid-cols-2">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-black lg:hidden">
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
            <RevealHeadline characterStagger={0.01} revealBy="character" text={content.title} />
          </h1>

          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {content.body}
            </p>
          </div>

          <FadeIn className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.3} stagger={0.1}>
            <FillButton href={whatsappHref} target="_blank" rel="noreferrer" variant="solid">
              {content.primaryCta}
              <ArrowUpRight aria-hidden="true" />
            </FillButton>
            <FillButton href={getRoutePath("services", locale)}>
              {content.secondaryCta}
            </FillButton>
          </FadeIn>
        </div>
      </div>

      <div className="hidden overflow-hidden bg-black lg:block">
        <DriftWall
          items={driftWallItems}
          columns={3}
          tileWidth={320}
          tileHeight={200}
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
