import { ContactForm } from "@/app/components/contact/components/contact-form";
import { Hero } from "@/app/components/contact/components/hero";
import type { Locale } from "@/lib/routes";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <ContactForm locale={locale} />
      </main>
    </>
  );
}
