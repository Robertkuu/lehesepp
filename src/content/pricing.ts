// Packages and prices: edit here, the whole site follows.
// price: a number in euros, or null for "depends on your needs".
// Every price must end in 99 (499, 799, 1299). The build stops if one does not.

import type { Locale } from "@/i18n/config";

export type PackageKey = "basic" | "pro";

export const prices: Record<PackageKey, number | null> = {
  basic: 499,
  pro: null,
};

for (const [key, price] of Object.entries(prices)) {
  if (price !== null && price % 100 !== 99) throw new Error(`pricing.ts: price "${key}" is ${price} €, it must end in 99`);
}

/** Lowest fixed price, shown in the hero as "alates …". */
export const fromPrice = Math.min(...Object.values(prices).filter((p): p is number => p !== null));

export const formatPrice = (price: number) => `${price} €`;

type PackageText = {
  name: string;
  /** One line: who the package is for. */
  description: string;
  /** "from" before the price; on a package without a price, the text shown instead. */
  priceLabel: string;
  badge?: string;
  features: string[];
  cta: string;
};

export const packages: Record<Locale, Record<PackageKey, PackageText>> = {
  et: {
    basic: {
      name: "Põhipakett",
      description: "Kõik, mida väike ettevõte kodulehelt vajab, et kliendid Teid üles leiaksid ja ühendust võtaksid.",
      priceLabel: "alates",
      badge: "Enim valitud",
      features: [
        "Kuni 5 lehte",
        "Kontaktivorm",
        "Galerii",
        "Kaart Teie asukohaga",
        "Sotsiaalmeedia lingid",
        "Töötab hästi telefonis",
        "Google'is leitav",
        "Logo ja visuaalne ilme",
        "Tekstide kirjutamine ja fotod",
      ],
      cta: "Vali Põhipakett",
    },
    pro: {
      name: "Pro",
      description: "Kui kliendid peavad saama ise aega broneerida või leht peab olema mitmes keeles.",
      priceLabel: "Hind oleneb vajadusest",
      features: [
        "Kõik, mis on Põhipaketis",
        "Broneerimissüsteem: kliendid broneerivad aja ise",
        "Mitu keelt",
        "Kodulehe hooldus",
      ],
      cta: "Küsi pakkumist",
    },
  },
  en: {
    basic: {
      name: "Basic",
      description: "Everything a business needs from a website so customers find you and get in touch.",
      priceLabel: "from",
      badge: "Most popular",
      features: [
        "Up to 5 pages",
        "Contact form",
        "Photo gallery",
        "Map with your location",
        "Social media links",
        "Works well on phones",
        "Easy to find on Google",
        "Logo and visual style",
        "Texts and photos written and chosen for you",
      ],
      cta: "Choose Basic",
    },
    pro: {
      name: "Pro",
      description: "When customers should book a time themselves or the site needs several languages.",
      priceLabel: "Price depends on your needs",
      features: [
        "Everything in Basic",
        "Booking system: customers book a time themselves",
        "Several languages",
        "Website care and updates",
      ],
      cta: "Get a quote",
    },
  },
};
