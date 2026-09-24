import { Hero } from "@/app/components/services/components/hero";
import { ServiceDetails } from "@/app/components/services/components/service-details";
import { ServicesOverview } from "@/app/components/services/components/services-overview";
import type { Locale } from "@/lib/routes";

export function ServicesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <ServicesOverview locale={locale} />
        <ServiceDetails locale={locale} />
      </main>
    </>
  );
}
