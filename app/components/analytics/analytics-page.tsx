import { ServiceFaq } from "@/app/components/services/detail/components/faq";
import { ServiceHero } from "@/app/components/services/detail/components/hero";
import { ServiceOverview } from "@/app/components/services/detail/components/overview";
import { ServiceProcess } from "@/app/components/services/detail/components/process";
import { ServiceSelectedWork } from "@/app/components/services/detail/components/selected-work";
import { ServiceSpiral } from "@/app/components/services/detail/components/spiral-section";
import { ServiceTrustStrip } from "@/app/components/services/detail/components/trust-strip";
import { Footer } from "@/components/site/footer";
import { analyticsServicePageContent, business } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function AnalyticsPage({ locale }: { locale: Locale }) {
  const content = analyticsServicePageContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan kebutuhan analitik website saya."
      : "Hi Kodefy, I'd like to discuss my website analytics needs.",
  )}`;

  return (
    <>
      <main id="main-content">
        <ServiceHero
          locale={locale}
          content={content.hero}
          whatsappHref={whatsappHref}
          secondaryHref="#analytics-overview"
        />
        <ServiceTrustStrip content={content.trust} sectionId="analytics-trust" />
        <ServiceOverview
          content={content.overview}
          whatsappHref={whatsappHref}
          sectionId="analytics-overview"
        />
        <ServiceSelectedWork
          content={content.selectedWork}
          projects={content.selectedWork.projects}
          whatsappHref={whatsappHref}
          sectionId="analytics-proof"
        />
        <ServiceSpiral
          content={content.spiral}
          projects={content.spiral.projects}
          whatsappHref={whatsappHref}
          sectionId="analytics-spiral"
        />
        <ServiceProcess
          locale={locale}
          content={content.process}
          whatsappHref={whatsappHref}
          sectionId="analytics-process"
        />
        <ServiceFaq content={content.faq} locale={locale} sectionId="analytics-faq" />
      </main>
      <Footer locale={locale} routeId="analytics" />
    </>
  );
}
