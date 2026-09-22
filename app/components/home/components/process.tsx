import Image from "next/image";

import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function Process({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <section id="process" className="scroll-mt-24 bg-white text-black">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-12 lg:py-28">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <h2 className="max-w-md text-5xl leading-none font-light tracking-tight sm:text-6xl">
            {content.processIntro.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            {content.processIntro.body}
          </p>
          <div className="relative mt-2 aspect-[4/5] w-full max-w-lg lg:max-w-[580px]">
            <Image
              src="/assets/mockups/kodefy-phone-mockup.webp"
              alt={locale === "id" ? "Mockup tampilan website Kodefy di ponsel" : "Kodefy website shown on a phone mockup"}
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-contain object-left-top"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-start lg:justify-end">
            <FillButton href="#contact" variant="outline">
              {locale === "id" ? "Pelajari lebih lanjut" : "Learn more"}
            </FillButton>
          </div>

          <ol className="mt-14 lg:mt-20">
            {content.process.map((step) => (
              <li key={step.number} className="grid gap-5 border-t border-black/15 py-10 sm:grid-cols-[10rem_1fr] sm:gap-10 lg:py-16">
                <p className="pt-1 text-sm text-black/40">
                  {locale === "id" ? "Langkah" : "Step"} {step.number}
                </p>
                <div className="max-w-xl">
                  <h3 className="text-3xl leading-none font-light tracking-tight sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
