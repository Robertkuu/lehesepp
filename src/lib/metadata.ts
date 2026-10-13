import type { Metadata } from "next";
import { routes, siteUrl, type Locale, type RouteKey } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { ogSize } from "@/lib/og";

/** Share image with a real .png path, so static hosts send it as image/png. */
export function ogImages(locale: Locale) {
  return [{ url: `/og/${locale}.png`, ...ogSize, alt: getDictionary(locale).meta.ogAlt }];
}

export function pageMetadata(locale: Locale, route: RouteKey, title?: string): Metadata {
  const dict = getDictionary(locale);
  const path = routes[route][locale];
  return {
    metadataBase: new URL(siteUrl),
    title: title ? `${title} | Lehesepp` : dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: {
        et: routes[route].et,
        en: routes[route].en,
        "x-default": routes[route].et,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Lehesepp",
      locale: locale === "et" ? "et_EE" : "en_GB",
      alternateLocale: locale === "et" ? "en_GB" : "et_EE",
      url: path,
      title: title ?? dict.meta.title,
      description: dict.meta.description,
      images: ogImages(locale),
    },
    twitter: { card: "summary_large_image", images: ogImages(locale) },
  };
}
