"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { FrameReveal } from "@/components/site/frame-reveal";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { webDevelopmentPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function WebsiteTestimonials({ locale }: { locale: Locale }) {
  const content = webDevelopmentPageContent[locale].testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const items = content?.items ?? [];

  useEffect(() => {
    if (items.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  if (!content || items.length === 0) return null;

  const testimonial = items[activeIndex];
  const previous = () =>
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  const next = () =>
    setActiveIndex((index) => (index + 1) % items.length);

  return (
    <section aria-labelledby="web-development-testimonials-heading" className="bg-zinc-100 text-black">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <h2
          id="web-development-testimonials-heading"
          className="mx-auto max-w-2xl text-center text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"
        >
          <RevealHeadline revealBy="character" text={content.title} />
        </h2>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <FrameReveal
            src={content.imageSrc}
            alt={content.imageAlt}
            revealFrom="bottom"
            backgroundClassName="bg-black"
            className="aspect-video w-full lg:self-center lg:origin-right lg:scale-160"
          />

          <div className="relative flex min-h-116 flex-col justify-center px-0 sm:px-16 lg:px-20">
            <button
              type="button"
              aria-label={locale === "id" ? "Testimonial sebelumnya" : "Previous testimonial"}
              onClick={previous}
              className="absolute top-1/2 left-0 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:cursor-pointer hover:bg-black hover:text-white sm:flex"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>

            <article aria-live="polite" className="w-full">
              <blockquote className="text-3xl leading-tight font-light tracking-tight sm:text-4xl lg:text-5xl">
                <RevealHeadline
                  characterStagger={0.01}
                  key={`quote-${activeIndex}`}
                  revealBy="character"
                  text={`“${testimonial.quote}”`}
                />
              </blockquote>
              <FadeInText
                key={`body-${activeIndex}`}
                className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                text={testimonial.body}
                delay={0.15}
              />
              <div className="mt-10 border-t border-black/15 pt-6">
                <div className="flex items-center gap-4">
                  <FadeIn
                    key={`initial-${activeIndex}`}
                    className="flex size-11 items-center justify-center rounded-full bg-black text-xs font-medium text-white"
                    delay={0.25}
                  >
                    {testimonial.name.slice(0, 1)}
                  </FadeIn>
                  <FadeInText
                    key={`identity-${activeIndex}`}
                    className="text-sm sm:text-base"
                    text={`${testimonial.name}, ${testimonial.role}`}
                    delay={0.3}
                  />
                </div>
              </div>
            </article>

            <button
              type="button"
              aria-label={locale === "id" ? "Testimonial berikutnya" : "Next testimonial"}
              onClick={next}
              className="absolute top-1/2 right-0 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:cursor-pointer hover:bg-black hover:text-white sm:flex"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>

            <div className="mt-8 flex gap-3 sm:hidden">
              <button type="button" aria-label={locale === "id" ? "Testimonial sebelumnya" : "Previous testimonial"} onClick={previous} className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer">
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>
              <button type="button" aria-label={locale === "id" ? "Testimonial berikutnya" : "Next testimonial"} onClick={next} className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer">
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
