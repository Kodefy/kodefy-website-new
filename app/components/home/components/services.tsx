import { ArrowUpRight } from "lucide-react";

import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

const serviceMarks = [
  { src: "/next.svg", alt: "Next.js" },
  {
    src: "https://www.gstatic.com/images/branding/product/1x/search_console_64dp.png",
    alt: "Google Search Console",
  },
  {
    src: "https://www.gstatic.com/images/branding/product/1x/analytics_64dp.png",
    alt: "Google Analytics",
  },
];

export function Services({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <section id="services" className="scroll-mt-24 bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-start lg:gap-24">
          <div>
            <h2 className="max-w-3xl text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-7xl">
              {content.servicesIntro.title}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <FillButton
                href="#contact"
                variant="solid"
                className="border-black bg-black text-white before:bg-white hover:text-black focus-visible:outline-black"
              >
                {content.cta.primary}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </FillButton>
              <FillButton
                href="#pricing"
                className="border-black/30 text-black before:bg-black hover:text-white focus-visible:outline-black"
              >
                {locale === "id" ? "Lihat harga" : "See pricing"}
              </FillButton>
            </div>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8 lg:pt-2">
            {content.servicesIntro.body}
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {content.services.map((service, index) => {
            const mark = serviceMarks[index];

            return (
              <article
                key={service.title}
                className={`border-t border-black/15 pt-5 ${
                  index === 0 ? "lg:mt-24" : index === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <img
                    src={mark.src}
                    alt={mark.alt}
                    className={index === 0 ? "h-8 w-auto" : "size-10 object-contain"}
                  />
                  <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-12 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-black/65">{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
