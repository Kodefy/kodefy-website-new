"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import { FillButton } from "@/components/ui/fill-button";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import type { Locale } from "@/lib/routes";

const placeholders = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Ipsum",
    role: "Placeholder testimonial",
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Dolor Sit",
    role: "Placeholder testimonial",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    name: "Amet Consectetur",
    role: "Placeholder testimonial",
  },
] as const;

export function Testimonials({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = placeholders[activeIndex];
  const isIndonesian = locale === "id";

  const previous = () =>
    setActiveIndex(
      (index) => (index - 1 + placeholders.length) % placeholders.length,
    );
  const next = () =>
    setActiveIndex((index) => (index + 1) % placeholders.length);

  return (
    <section className="relative isolate overflow-hidden bg-zinc-100 text-black">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[42%] bg-white lg:block"
      />
      <div className="relative mx-auto grid max-w-360 gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-md text-5xl leading-none font-light tracking-tight sm:text-6xl">
            <RevealHeadline
              revealBy="character"
              text={
                isIndonesian ? "Apa kata klien kami." : "What our clients say."
              }
            />
          </h2>
          <FadeInText
            className="mt-6 max-w-sm text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={
              isIndonesian
                ? "Tempat sementara untuk pengalaman dan masukan dari klien Kodefy."
                : "A temporary space for feedback and experiences from Kodefy clients."
            }
            delay={0.15}
          />
          <FadeIn className="mt-8" delay={0.3}>
            <FillButton href="#contact" variant="solid">
              {isIndonesian ? "Diskusikan proyek Anda" : "Discuss your project"}
              <ArrowRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>

        <div className="relative flex min-h-116 flex-col justify-center px-0 sm:px-16 lg:px-20">
          <button
            type="button"
            aria-label={
              isIndonesian ? "Testimonial sebelumnya" : "Previous testimonial"
            }
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
                <FadeInText
                  key={`initial-${activeIndex}`}
                  className="flex size-11 items-center justify-center rounded-full bg-black text-xs font-medium text-white"
                  text={testimonial.name.slice(0, 1)}
                  delay={0.25}
                />
                <FadeInText
                  key={`identity-${activeIndex}`}
                  className="text-sm sm:text-base"
                  text={`${testimonial.name}, ${testimonial.role}`}
                  delay={0.3}
                >
                  {testimonial.name},{" "}
                  <span className="text-black/60">{testimonial.role}</span>
                </FadeInText>
              </div>
            </div>
          </article>

          <button
            type="button"
            aria-label={
              isIndonesian ? "Testimonial berikutnya" : "Next testimonial"
            }
            onClick={next}
            className="absolute top-1/2 right-0 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:cursor-pointer hover:bg-black hover:text-white sm:flex"
          >
            <ArrowRight aria-hidden="true" className="size-5" />
          </button>

          <div className="mt-8 flex gap-3 sm:hidden">
            <button
              type="button"
              aria-label={
                isIndonesian ? "Testimonial sebelumnya" : "Previous testimonial"
              }
              onClick={previous}
              className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label={
                isIndonesian ? "Testimonial berikutnya" : "Next testimonial"
              }
              onClick={next}
              className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer"
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
