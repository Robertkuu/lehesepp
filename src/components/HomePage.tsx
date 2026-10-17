import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Samples } from "@/components/sections/Samples";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  // Industry pages exist in Estonian only.
  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} dict={dict} />
      <main id="sisu">
        <Hero dict={dict} />
        <Process dict={dict} />
        <Pricing dict={dict} locale={locale} />
        <Samples dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
