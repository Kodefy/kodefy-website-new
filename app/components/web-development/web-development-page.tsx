import { ServiceFaq } from "@/app/components/services/detail/components/faq";
import { ServiceHero } from "@/app/components/services/detail/components/hero";
import { ServiceOverview } from "@/app/components/services/detail/components/overview";
import { ServiceProcess } from "@/app/components/services/detail/components/process";
import { ServiceSelectedWork } from "@/app/components/services/detail/components/selected-work";
import { ServiceSpiral } from "@/app/components/services/detail/components/spiral-section";
import { ServiceTestimonials } from "@/app/components/services/detail/components/testimonials";
import { ServiceTrustStrip } from "@/app/components/services/detail/components/trust-strip";
import { Footer } from "@/components/site/footer";
import {
  business,
  homeContent,
  servicesPageContent,
  webDevelopmentPageContent,
} from "@/content/site";
import type { Locale } from "@/lib/routes";

export function WebDevelopmentPage({ locale }: { locale: Locale }) {
  const content = webDevelopmentPageContent[locale];
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(
    locale === "id"
      ? "Halo Kodefy, saya ingin mendiskusikan proyek website saya."
      : "Hi Kodefy, I'd like to discuss my website project.",
  )}`;
  const overview = servicesPageContent[locale].details[0];

  return (
    <>
      <main id="main-content">
        <ServiceHero
          locale={locale}
          content={content.hero}
          whatsappHref={whatsappHref}
        />
        <ServiceTrustStrip
          content={content.trust}
          sectionId="web-development-trust"
        />
        <ServiceOverview
          content={{
            ...overview,
            cta:
              locale === "id"
                ? "Diskusikan layanan ini"
                : "Discuss this service",
          }}
          whatsappHref={whatsappHref}
          sectionId="web-development-overview"
        />
        <ServiceSelectedWork
          content={content.selectedWork}
          projects={homeContent[locale].projects}
          whatsappHref={whatsappHref}
          sectionId="web-development-work"
        />
        <ServiceTestimonials
          content={content.testimonials}
          locale={locale}
          sectionId="web-development-testimonials"
        />
        <ServiceSpiral
          content={content.spiral}
          projects={homeContent[locale].projects}
          whatsappHref={whatsappHref}
          sectionId="web-development-spiral"
        />
        <ServiceProcess
          locale={locale}
          content={content.process}
          whatsappHref={whatsappHref}
          sectionId="web-development-process"
        />
        <ServiceFaq
          content={content.faq}
          locale={locale}
          sectionId="web-development-faq"
        />
      </main>
      <Footer locale={locale} routeId="webDevelopment" />
    </>
  );
}
