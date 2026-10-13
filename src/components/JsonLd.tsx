import { absoluteUrl, siteUrl, routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/lib/site";

export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const url = absoluteUrl(routes.home[locale]);
  const business = `${siteUrl}/#business`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": business,
        name: site.name,
        description: dict.meta.description,
        url,
        email: site.email,
        telephone: site.phone,
        image: `${siteUrl}/og/${locale}.png`,
        logo: `${siteUrl}/og/${locale}.png`,
        founder: { "@type": "Person", name: site.founder },
        areaServed: { "@type": "Country", name: "Estonia" },
        address: { "@type": "PostalAddress", addressCountry: "EE" },
        knowsLanguage: ["et", "en"],
        priceRange: "Project-based quote",
        makesOffer: dict.services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: absoluteUrl("/"),
        name: site.name,
        inLanguage: ["et", "en"],
        publisher: { "@id": business },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: dict.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
