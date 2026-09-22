import { ArrowUpRight } from "lucide-react";

import { FrameReveal } from "@/components/site/frame-reveal";
import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

const imageSrc =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85";

export function Expectations({ locale }: { locale: Locale }) {
  const content = homeContent[locale].expectations;

  return (
    <section aria-labelledby="expectations-heading" className="bg-white text-black">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.6fr_0.8fr_0.75fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <ul className="border-y border-black/15">
          {content.labels.map((label) => (
            <li key={label} className="py-5 text-xl font-medium tracking-tight sm:text-2xl">
              {label}
            </li>
          ))}
        </ul>

        <FrameReveal
          src={imageSrc}
          alt={locale === "id" ? "Laptop menampilkan data analitik" : "Laptop showing analytics data"}
          className="mx-auto w-full max-w-md"
        />

        <div>
          <h2 id="expectations-heading" className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            {content.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FillButton
              href="#contact"
              variant="solid"
              className="border-black bg-black text-white before:bg-white hover:text-black focus-visible:outline-black"
            >
              {content.primary}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
            <FillButton
              href="#work"
              className="border-black/30 text-black before:bg-black hover:text-white focus-visible:outline-black"
            >
              {content.secondary}
            </FillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
