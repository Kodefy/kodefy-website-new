import { ArrowUpRight } from "lucide-react";

import { FillButton } from "@/components/ui/fill-button";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

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

const serviceRouteIds = ["webDevelopment", "seo", "analytics"] as const satisfies readonly RouteId[];

export function Services({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <section id="services" className="scroll-mt-24 bg-white text-black">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-start lg:gap-24">
          <div>
            <h2 className="max-w-3xl text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-7xl">
              <RevealHeadline
                revealBy="character"
                text={content.servicesIntro.title}
              />
            </h2>
            <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.3} stagger={0.1}>
              <FillButton href={getRoutePath("services", locale)} variant="solid">
                {locale === "id" ? "Lihat layanan kami" : "Explore our services"}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </FillButton>
            </FadeIn>
          </div>

          <FadeInText
            className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pt-2"
            text={content.servicesIntro.body}
            delay={0.15}
          />
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {content.services.map((service, index) => {
            const mark = serviceMarks[index];

            return (
              <a
                key={service.title}
                href={getRoutePath(serviceRouteIds[index], locale)}
                aria-label={service.title}
                className={`group block border-t border-black/15 pt-5 hover:cursor-pointer ${
                  index === 0 ? "lg:mt-24" : index === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <img
                    src={mark.src}
                    alt={mark.alt}
                    className={
                      index === 0 ? "h-8 w-auto" : "size-10 object-contain"
                    }
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-12 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                  <RevealHeadline revealBy="character" text={service.title} />
                </h3>
                <FadeInText
                  className="mt-4 max-w-sm text-base leading-7 text-muted-foreground"
                  text={service.body}
                  delay={0.15}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
