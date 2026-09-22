import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import DriftWall from "@/components/DriftWall";
import { Button } from "@/components/ui/button";
import { business, homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

const driftWallItems = [
  { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80", title: "Studio" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80", title: "Workspace" },
  { image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80", title: "Collaboration" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80", title: "Analytics" },
  { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=700&q=80", title: "Design" },
  { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80", title: "Planning" },
  { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80", title: "Development" },
  { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80", title: "Team" },
  { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80", title: "Office" },
  { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80", title: "Focus" },
  { image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80", title: "Workshop" },
  { image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80", title: "Desk" },
].map((item) => ({ ...item, href: undefined }));

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
