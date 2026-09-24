import { ServiceFaq } from "@/app/components/services/detail/components/faq";
import { ServiceHero } from "@/app/components/services/detail/components/hero";
import { ServiceOverview } from "@/app/components/services/detail/components/overview";
import { ServiceProcess } from "@/app/components/services/detail/components/process";
import { ServiceSelectedWork } from "@/app/components/services/detail/components/selected-work";
import { ServiceSpiral } from "@/app/components/services/detail/components/spiral-section";
import { ServiceTrustStrip } from "@/app/components/services/detail/components/trust-strip";
import { Footer } from "@/components/site/footer";
import { business, seoServicePageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function SeoPage({ locale }: { locale: Locale }) {
  const content = seoServicePageContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan SEO bisnis saya."
      : "Hi Kodefy, I'd like to discuss my business's SEO needs.",
  )}`;

  return (
    <>
      <main id="main-content">
        <ServiceHero
          locale={locale}
          content={content.hero}
          whatsappHref={whatsappHref}
        />
        <ServiceTrustStrip content={content.trust} sectionId="seo-trust" />
        <ServiceOverview
          content={content.overview}
          whatsappHref={whatsappHref}
          sectionId="seo-overview"
        />
        <ServiceSelectedWork
          content={content.selectedWork}
          projects={content.selectedWork.projects}
          whatsappHref={whatsappHref}
          sectionId="seo-proof"
        />
        <ServiceSpiral
          content={content.spiral}
          projects={content.selectedWork.projects}
          whatsappHref={whatsappHref}
          sectionId="seo-spiral"
        />
        <ServiceProcess
          locale={locale}
          content={content.process}
          whatsappHref={whatsappHref}
          sectionId="seo-process"
        />
        <ServiceFaq content={content.faq} locale={locale} sectionId="seo-faq" />
      </main>
      <Footer locale={locale} routeId="seo" />
    </>
  );
}
