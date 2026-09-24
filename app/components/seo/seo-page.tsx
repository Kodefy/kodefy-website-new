import { ServiceHero } from "@/app/components/services/detail/components/hero";
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
      </main>
      <Footer locale={locale} routeId="seo" />
    </>
  );
}
