import { ContactForm } from "@/app/components/contact/components/contact-form";
import { Hero } from "@/app/components/contact/components/hero";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import type { Locale } from "@/lib/routes";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header locale={locale} routeId="contact" />
      <main id="main-content">
        <Hero locale={locale} />
        <ContactForm locale={locale} />
      </main>
      <Footer locale={locale} routeId="contact" />
    </>
  );
}
