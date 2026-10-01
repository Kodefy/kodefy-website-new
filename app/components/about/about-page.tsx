import { Hero } from "@/app/components/about/components/hero";
import { AboutOverview } from "@/app/components/about/components/about-overview";
import { AboutStory } from "@/app/components/about/components/about-story";
import { AboutValues } from "@/app/components/about/components/about-values";
import { RemoteCollaboration } from "@/app/components/about/components/remote-collaboration";
import { WhyChooseUs } from "@/app/components/about/components/why-choose-us";
import type { Locale } from "@/lib/routes";

export function AboutPage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <AboutOverview locale={locale} />
        <AboutStory locale={locale} />
        <WhyChooseUs locale={locale} />
        <AboutValues locale={locale} />
        <RemoteCollaboration locale={locale} />
        {/* Team portraits are hidden until approved photos are available. */}
      </main>
    </>
  );
}
