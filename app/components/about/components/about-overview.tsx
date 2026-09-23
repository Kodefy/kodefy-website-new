import { ClientLogos } from "@/app/components/home/components/client-logos";
import CountUp from "@/components/CountUp";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

const images = {
  primary: {
    src: "/assets/projects/qijian-technology.webp",
    alt: "Qijian Technology website project",
  },
  secondary: {
    src: "/assets/projects/sukses-pamerindo.webp",
    alt: "Sukses Pamerindo Utama website project",
  },
};

export function AboutOverview({ locale }: { locale: Locale }) {
  const metrics = homeContent[locale].metrics;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white text-black">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-3/5 bg-black"
        />
        <div className="relative mx-auto grid max-w-360 gap-7 px-6 sm:px-8 lg:grid-cols-[0.32fr_1fr] lg:items-end lg:gap-7 lg:px-12 lg:pt-28">
          <FrameReveal
            src={images.secondary.src}
            alt={images.secondary.alt}
            backgroundClassName="bg-white mix-blend-difference"
            className="mx-auto hidden h-80 w-full max-w-md lg:block lg:h-136 lg:max-w-none"
          />

          <div>
            <FrameReveal
              src={images.primary.src}
              alt={images.primary.alt}
              backgroundClassName="bg-white mix-blend-difference"
              revealFrom="top"
              className="h-80 w-full lg:h-136"
            />

            <div className="grid grid-cols-3 gap-5 pt-8 sm:gap-8 lg:gap-12 lg:pt-10">
              {metrics.map((metric, index) => (
                <div key={metric.label}>
                  {index === 0 ? (
                    <FadeInText
                      className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
                      text={metric.value}
                      delay={0}
                    />
                  ) : (
                    <FadeIn
                      className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
                      delay={index * 0.1}
                    >
                      <CountUp
                        from={0}
                        to={Number.parseInt(metric.value, 10)}
                        duration={1.8}
                      />
                      {metric.value.endsWith("+") ? "+" : null}
                    </FadeIn>
                  )}
                  <FadeInText
                    className="mt-3 text-sm leading-5 text-muted-foreground sm:text-base"
                    text={metric.label}
                    delay={0.15 + index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientLogos locale={locale} />
    </>
  );
}
