import { Hero } from "@/app/components/portfolio/components/hero";
import { PortfolioList } from "@/app/components/portfolio/components/portfolio-list";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import type { Locale } from "@/lib/routes";

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header locale={locale} routeId="portfolio" />
      <main id="main-content">
        <Hero locale={locale} />
        <PortfolioList locale={locale} />
      </main>
      <Footer locale={locale} routeId="portfolio" />
    </>
  );
}
