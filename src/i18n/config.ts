export const locales = ["et", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "et";

// TODO: replace with the production domain once it is registered.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lehesepp.ee";

/** Route paths per locale. Estonian lives at the root, English under /en. */
export const routes = {
  home: { et: "/", en: "/en" },
  privacy: { et: "/privaatsus", en: "/en/privacy" },
} as const;

export type RouteKey = keyof typeof routes;

export function otherLocale(locale: Locale): Locale {
  return locale === "et" ? "en" : "et";
}
