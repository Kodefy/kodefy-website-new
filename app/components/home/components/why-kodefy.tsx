import { ArrowUpRight } from "lucide-react";

import { FrameReveal } from "@/components/site/frame-reveal";
import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { FillButton } from "@/components/ui/fill-button";
import { homeContent } from "@/content/site";
import { getRoutePath, type Locale } from "@/lib/routes";

const mosaicImages = [
  {
    src: "/assets/projects/lievee.webp",
    alt: "Lievee website project",
  },
  {
    src: "/assets/projects/qijian-technology.webp",
    alt: "Qijian Technology website project",
  },
  {
    src: "/assets/projects/sukses-pamerindo.webp",
    alt: "Sukses Pamerindo Utama website project",
  },
  {
    src: "/assets/projects/qijian-technology.webp",
    alt: "Qijian Technology website project detail",
  },
] as const;

export function WhyKodefy({ locale }: { locale: Locale }) {
  const content = homeContent[locale].whyIntro;

  return (
    <section data-fill-button-surface="dark" className="bg-black text-white lg:max-h-screen lg:overflow-hidden lg:h-dvh">
      <div className="mx-auto grid max-w-360 gap-10 px-6 py-20 sm:px-8 lg:min-h-dvh lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-12 lg:py-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[mosaicImages.slice(0, 2), mosaicImages.slice(2)].map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col gap-3 sm:gap-5 ${columnIndex === 1 ? "lg:mt-24" : ""}`}
            >
              {column.map((image, index) => (
                <div key={`${image.src}-${index}`} className="relative aspect-square overflow-hidden">
                  <FrameReveal
                    src={image.src}
                    alt={image.alt}
                    className="size-full aspect-auto"
                    backgroundClassName="bg-white"
                    delayMs={(index * 2 + columnIndex) * 250}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-xl lg:justify-self-end">
          <h2 className="text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-7xl">
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />
          <FadeInText
            className="mt-6 text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
            text={
              locale === "id"
                ? "Baik Anda menjalankan bisnis jasa, company profile, maupun katalog produk, kami membangun fondasi digital yang menyatukan website, pencarian Google, dan analitik ke dalam langkah yang terarah."
                : "Whether you run a service business, company profile, or product catalogue, we build a digital foundation that brings your website, Google search, and analytics into one focused direction."
            }
            delay={0.25}
          />
          <FadeIn className="mt-8 flex flex-wrap gap-3" delay={0.4} stagger={0.1}>
            <FillButton
              href={getRoutePath("contact", locale)}
              variant="solid"
            >
              {locale === "id" ? "Diskusikan proyek Anda" : "Discuss your project"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
            <FillButton href={getRoutePath("webDevelopment", locale)} variant="outline">
              {locale === "id" ? "Lihat layanan" : "Explore services"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </FillButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
