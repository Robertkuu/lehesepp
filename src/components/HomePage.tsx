import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Offer } from "@/components/sections/Offer";
import { Process } from "@/components/sections/Process";
import { Why } from "@/components/sections/Why";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";
import { industries, industryPath } from "@/content/industries";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  // Industry pages exist in Estonian only.
  const industryLinks = locale === "et" ? industries.map((i) => ({ href: industryPath(i.slug), label: i.label })) : [];
  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} dict={dict} />
      <main id="sisu">
        <Hero dict={dict} />
        <Services dict={dict} links={industryLinks} />
        <Offer dict={dict} />
        <Process dict={dict} />
        <Why dict={dict} locale={locale} />
        <About dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
