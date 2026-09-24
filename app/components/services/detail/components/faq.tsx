"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import type { Locale } from "@/lib/routes";

export type ServiceFaqContent = {
  title: string;
  items: { question: string; answer: string }[];
};

export function ServiceFaq({
  content,
  locale,
  sectionId = "service-faq",
}: {
  content?: ServiceFaqContent;
  locale: Locale;
  sectionId?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!content || content.items.length === 0) return null;

  return (
    <section aria-labelledby={`${sectionId}-heading`} className="bg-white text-black">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <h2 id={`${sectionId}-heading`} className="mx-auto max-w-2xl text-center text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl">
          <RevealHeadline revealBy="character" text={content.title} />
        </h2>
        <div className="mx-auto mt-14 max-w-6xl border-t border-black/15 lg:mt-20">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${sectionId}-panel-${index}`;

            return (
              <article key={item.question} className="border-b border-black/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 text-left hover:cursor-pointer sm:py-7"
                >
                  <FadeInText className="text-xl leading-tight font-light tracking-tight sm:text-2xl" text={item.question} delay={index * 0.04} />
                  <FadeIn className="shrink-0" delay={0.1 + index * 0.04}>
                    <Plus aria-hidden="true" className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                  </FadeIn>
                </button>
                <div id={panelId} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <FadeInText className="max-w-2xl pb-7 text-base leading-7 text-muted-foreground sm:ml-auto sm:text-lg sm:leading-8" text={item.answer} delay={0.15} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
