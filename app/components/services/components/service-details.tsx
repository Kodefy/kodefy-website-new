import { ArrowUpRight } from "lucide-react";

import { DriftPreview } from "@/components/site/drift-preview";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { SlideFadeIn } from "@/components/site/slide-fade-in";
import { FillButton } from "@/components/ui/fill-button";
import { business, servicesPageContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

const serviceRouteIds: Record<string, RouteId> = {
  "website-development": "webDevelopment",
  seo: "seo",
  analytics: "analytics",
};

export function ServiceDetails({ locale }: { locale: Locale }) {
  const details = servicesPageContent[locale].details;
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan layanan saya."
      : "Hi Kodefy, I'd like to discuss my service needs.",
  )}`;

  return (
    <section id="service-details" className="bg-white text-black">
      {details.map((service, serviceIndex) => {
        const serviceRouteId = serviceRouteIds[service.slug];
        const isDark = serviceIndex === 0;
        const rowsOnRight = serviceIndex % 2 === 0;
        const gridColumns = isDark
          ? "lg:grid-cols-[0.75fr_0.8fr_0.6fr]"
          : rowsOnRight
            ? "lg:grid-cols-[1fr_0.7fr_0.6fr]"
            : "lg:grid-cols-[0.6fr_0.7fr_1fr]";
        const rowBorderExtension = rowsOnRight
          ? "lg:after:right-[-100vw] lg:after:left-0"
          : "lg:after:right-0 lg:after:left-[-100vw]";

        const rows = (
          <ul
            className={`mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none ${
              rowsOnRight ? "" : "order-3 lg:order-none"
            }`}
          >
            {service.labels.map((label, labelIndex) => (
              <li
                key={label}
                className={`relative py-5 text-xl font-medium tracking-tight sm:text-2xl after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px last:after:hidden ${
                  isDark ? "after:bg-white/20" : "after:bg-black/15"
                } ${rowBorderExtension}`}
              >
                <SlideFadeIn
                  className="w-full"
                  delay={labelIndex * 0.1}
                  desktopDirection={rowsOnRight ? "right" : "left"}
                  mobileDirection={labelIndex % 2 === 0 ? "left" : "right"}
                >
                  <DriftPreview
                    imageSrc={service.imageSrc}
                    imageAlt=""
                    previewWidth={224}
                    previewHeight={280}
                    zIndex={5}
                    className={`group flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                      isDark
                        ? "focus-visible:outline-white"
                        : "focus-visible:outline-black"
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`flex items-center gap-3 text-sm font-normal transition-colors duration-200 ${
                        isDark
                          ? "text-white/45 group-hover:text-white"
                          : "text-black/45 group-hover:text-black"
                      }`}
                    >
                      {String(labelIndex + 1).padStart(2, "0")}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </DriftPreview>
                </SlideFadeIn>
              </li>
            ))}
          </ul>
        );

        const copy = (
          <div
            className={`w-full ${isDark ? "max-w-xl" : "max-w-2xl"} ${
              rowsOnRight ? "" : "order-1 lg:order-none"
            }`}
          >
            <h2
              id={`${service.slug}-heading`}
              className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
            >
              <RevealHeadline revealBy="character" text={service.title} />
            </h2>
            <FadeInText
              className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-white/70" : "text-muted-foreground"
              }`}
              text={service.body}
              delay={0.15}
            />
            <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.3} stagger={0.1}>
              <FillButton
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="solid"
              >
                {locale === "id" ? "Diskusikan layanan ini" : "Discuss this service"}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </FillButton>
              {serviceRouteId && (
                <FillButton href={getRoutePath(serviceRouteId, locale)} variant="outline">
                  {locale === "id" ? "Lihat detail layanan" : "View service details"}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </FillButton>
              )}
            </FadeIn>
          </div>
        );

        return (
          <article
            id={service.slug}
            key={service.slug}
            aria-labelledby={`${service.slug}-heading`}
            data-fill-button-surface={isDark ? "dark" : undefined}
            className={`relative isolate overflow-hidden ${
              isDark ? "bg-black text-white" : ""
            }`}
          >
            {!isDark && (
              <div
                aria-hidden="true"
                className={`absolute inset-y-0 hidden w-2/5 bg-zinc-100 lg:block ${
                  rowsOnRight ? "right-0" : "left-0"
                }`}
              />
            )}
            <div
              className={`relative z-10 mx-auto grid max-w-360 gap-10 px-6 py-16 sm:px-8 ${gridColumns} lg:items-center lg:gap-16 lg:px-12 lg:py-24`}
            >
              {rowsOnRight ? (
                <>
                  {copy}
                  <FrameReveal
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    backgroundClassName={isDark ? "bg-white" : undefined}
                    className="mx-auto w-full max-w-md"
                  />
                  {rows}
                </>
              ) : (
                <>
                  {rows}
                  <FrameReveal
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    backgroundClassName={isDark ? "bg-white" : undefined}
                    className="order-2 mx-auto w-full max-w-md lg:order-none"
                  />
                  {copy}
                </>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
