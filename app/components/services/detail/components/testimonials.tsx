"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import type { Locale } from "@/lib/routes";

export type ServiceTestimonialsContent = { title: string; items: { quote: string; body: string; name: string; role: string; imageSrc: string; imageAlt: string }[] };

export function ServiceTestimonials({ content, locale, sectionId = "service-testimonials" }: { content?: ServiceTestimonialsContent; locale: Locale; sectionId?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [version, setVersion] = useState(0);
  const [timerReset, setTimerReset] = useState(0);
  const items = content?.items ?? [];
  useEffect(() => { if (items.length < 2) return; const timer = window.setInterval(() => { setActiveIndex((index) => (index + 1) % items.length); setVersion((value) => value + 1); }, 5000); return () => window.clearInterval(timer); }, [items.length, timerReset]);
  if (!content || !items.length) return null;
  const item = items[activeIndex];
  const change = (direction: -1 | 1) => { setActiveIndex((index) => (index + direction + items.length) % items.length); setVersion((value) => value + 1); setTimerReset((value) => value + 1); };
  const previousLabel = locale === "id" ? "Testimonial sebelumnya" : "Previous testimonial";
  const nextLabel = locale === "id" ? "Testimonial berikutnya" : "Next testimonial";
  return <section aria-labelledby={`${sectionId}-heading`} className="bg-zinc-100 text-black"><div className="mx-auto max-w-360 px-6 py-20 sm:px-8 lg:px-12 lg:py-28"><h2 id={`${sectionId}-heading`} className="mx-auto max-w-2xl text-center text-4xl leading-none font-light tracking-tight sm:text-5xl lg:text-6xl"><RevealHeadline revealBy="character" text={content.title} /></h2><div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><div className="relative aspect-video w-full overflow-hidden bg-black lg:self-center lg:origin-right lg:scale-160"><AnimatePresence mode="sync"><motion.img key={`testimonial-${version}`} src={item.imageSrc} alt={item.imageAlt} initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.04, y: "6%" }} animate={{ clipPath: "inset(0 0 0 0)", scale: 1, y: "0%" }} exit={{ opacity: 0.999 }} transition={{ duration: 1, ease: [0.16, 0.95, 0.22, 1] }} className="absolute inset-0 h-full w-full object-cover" /></AnimatePresence></div><div className="relative flex min-h-116 flex-col justify-center px-0 sm:px-16 lg:px-20"><button type="button" aria-label={previousLabel} onClick={() => change(-1)} className="absolute top-1/2 left-0 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:cursor-pointer hover:bg-black hover:text-white sm:flex"><ArrowLeft aria-hidden="true" className="size-5" /></button><article aria-live="polite" className="w-full"><blockquote className="text-3xl leading-tight font-light tracking-tight sm:text-4xl lg:text-5xl"><RevealHeadline characterStagger={0.01} key={`quote-${version}`} revealBy="character" text={`“${item.quote}”`} /></blockquote><FadeInText key={`body-${version}`} className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" text={item.body} delay={0.15} /><div className="mt-10 border-t border-black/15 pt-6"><div className="flex items-center gap-4"><FadeIn key={`initial-${version}`} className="flex size-11 items-center justify-center rounded-full bg-black text-xs font-medium text-white" delay={0.25}>{item.name.slice(0, 1)}</FadeIn><FadeInText key={`identity-${version}`} className="text-sm sm:text-base" text={`${item.name}, ${item.role}`} delay={0.3} /></div></div></article><button type="button" aria-label={nextLabel} onClick={() => change(1)} className="absolute top-1/2 right-0 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:cursor-pointer hover:bg-black hover:text-white sm:flex"><ArrowRight aria-hidden="true" className="size-5" /></button><div className="mt-8 flex gap-3 sm:hidden"><button type="button" aria-label={previousLabel} onClick={() => change(-1)} className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer"><ArrowLeft aria-hidden="true" className="size-4" /></button><button type="button" aria-label={nextLabel} onClick={() => change(1)} className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:cursor-pointer"><ArrowRight aria-hidden="true" className="size-4" /></button></div></div></div></div></section>;
}
