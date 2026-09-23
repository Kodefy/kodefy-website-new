import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { aboutPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function AboutTeam({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale].team;

  return (
    <section className="bg-white py-20 text-black sm:py-28 lg:py-36">
      <div className="mx-auto max-w-240 px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
          <RevealHeadline revealBy="character" text={content.title} />
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {content.members.map((member, index) => (
            <article key={member.name} className="flex h-full flex-col">
              <FrameReveal
                src={member.imageSrc}
                alt={member.imageAlt}
                revealFrom={index === 0 ? "bottom" : "top"}
                className="aspect-4/5 w-full"
              />
              <h3 className="mt-6 text-2xl leading-tight font-medium tracking-tight lg:text-3xl">
                <RevealHeadline revealBy="character" text={member.name} />
              </h3>
              <FadeInText
                className="mt-2 text-base font-medium text-black"
                text={member.role}
                delay={0.1 + index * 0.12}
              />
              <FadeInText
                className="mt-4 max-w-md text-base leading-7 text-muted-foreground"
                text={member.body}
                delay={0.2 + index * 0.12}
              />
              <div aria-hidden="true" className="mt-auto pt-8 border-b border-black/15" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
