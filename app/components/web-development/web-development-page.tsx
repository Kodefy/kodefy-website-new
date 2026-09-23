import { Hero } from "@/app/components/web-development/components/hero";
import { TrustStrip } from "@/app/components/web-development/components/trust-strip";
import { WebsiteOverview } from "@/app/components/web-development/components/website-overview";
import { SelectedWork } from "@/app/components/web-development/components/selected-work";
import { WebsiteTestimonials } from "@/app/components/web-development/components/testimonials";
import { SpiralSection } from "@/app/components/web-development/components/spiral-section";
import { WebsiteProcess } from "@/app/components/web-development/components/website-process";
import { WebsiteFaq } from "@/app/components/web-development/components/faq";
import { Footer } from "@/components/site/footer";
import type { Locale } from "@/lib/routes";

export function WebDevelopmentPage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <TrustStrip locale={locale} />
        <WebsiteOverview locale={locale} />
        <SelectedWork locale={locale} />
        <WebsiteTestimonials locale={locale} />
        <SpiralSection locale={locale} />
        <WebsiteProcess locale={locale} />
        <WebsiteFaq locale={locale} />
      </main>
      <Footer locale={locale} routeId="webDevelopment" />
    </>
  );
}
