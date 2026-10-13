export const locales = ["et", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "et";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lehesepp.ee";

/** Route paths per locale. Estonian lives at the root, English under /en. */
export const routes = {
  home: { et: "/", en: "/en" },
  privacy: { et: "/privaatsus", en: "/en/privacy" },
} as const;

export type RouteKey = keyof typeof routes;

/** Absolute URL as served by the static host (folder URLs end with "/"), so nothing redirects. */
export function absoluteUrl(path: string) {
  return `${siteUrl}${path.endsWith("/") ? path : `${path}/`}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "et" ? "en" : "et";
}
