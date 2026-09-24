import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { homeContent, portfolioPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function PortfolioList({ locale }: { locale: Locale }) {
  const content = portfolioPageContent[locale].list;
  const projects = homeContent[locale].projects;

  return (
    <section id="portfolio-list" className="bg-white text-black">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <article key={project.name}>
              <FrameReveal
                src={project.image}
                alt={project.alt}
                delayMs={index * 100}
                revealFrom={index % 2 === 0 ? "left" : "right"}
                className="h-52 w-full sm:h-64 lg:h-72"
              />

              <div className="grid gap-6 border-b border-black/15 py-7 sm:grid-cols-2 lg:grid-cols-[1fr_0.35fr_0.35fr] lg:gap-12 lg:py-9">
                <h3 className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                  <RevealHeadline revealBy="character" text={project.name} />
                </h3>

                <div>
                  <FadeInText
                    className="text-sm text-muted-foreground"
                    text={content.typeLabel}
                    delay={0.1}
                  />
                  <FadeInText
                    className="mt-2 text-base leading-6"
                    text={project.type}
                    delay={0.16}
                  />
                </div>

                <div>
                  <FadeInText
                    className="text-sm text-muted-foreground"
                    text={content.deliveryLabel}
                    delay={0.2}
                  />
                  <FadeInText
                    className="mt-2 text-base leading-6"
                    text={project.delivery}
                    delay={0.26}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
