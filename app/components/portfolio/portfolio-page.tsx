import { Hero } from "@/app/components/portfolio/components/hero";
import { PortfolioList } from "@/app/components/portfolio/components/portfolio-list";
import type { Locale } from "@/lib/routes";

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <PortfolioList locale={locale} />
      </main>
    </>
  );
}
