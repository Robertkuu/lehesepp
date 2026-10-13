import { siteUrl, routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/lib/site";

export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    description: dict.meta.description,
    url: `${siteUrl}${routes.home[locale] === "/" ? "" : routes.home[locale]}`,
    email: site.email,
    telephone: site.phone,
    image: `${siteUrl}/opengraph-image`,
    founder: { "@type": "Person", name: site.founder },
    areaServed: { "@type": "Country", name: "Estonia" },
    address: { "@type": "PostalAddress", addressCountry: "EE" },
    knowsLanguage: ["et", "en"],
    priceRange: "Project-based quote",
    makesOffer: dict.services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
