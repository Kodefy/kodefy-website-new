import { Eye, Handshake, UsersRound } from "lucide-react";

import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { aboutPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function AboutValues({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale].values;
  const icons = [Handshake, Eye, UsersRound];

  return (
    <section className="bg-white py-20 text-black sm:py-28 lg:py-36">
      <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-12">
        <h2 className="mx-auto max-w-3xl text-center text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
          <RevealHeadline revealBy="character" text={content.title} />
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:items-start md:gap-6 lg:mt-24 lg:gap-10">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`flex min-h-72 flex-col items-center text-center lg:min-h-80 ${index === 1 ? "md:-translate-y-16" : ""}`}
            >
              {(() => {
                const Icon = icons[index];

                return <Icon aria-hidden="true" className="size-9 stroke-[1.25]" />;
              })()}
              <FadeInText
                className="mt-6 text-2xl leading-tight font-medium tracking-tight lg:text-3xl"
                text={item.title}
                delay={index * 0.1}
              />
              <div className="mt-8 w-full border-b border-black/15 pb-7">
                <FadeInText
                  className="mx-auto max-w-sm text-base leading-7 text-muted-foreground"
                  text={item.body}
                  delay={0.15 + index * 0.1}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
