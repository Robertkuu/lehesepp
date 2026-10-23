import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/i18n/config";
import { industries, industryPath } from "@/content/industries";

export const dynamic = "force-static";

// shortcut: every page gets the build date, even unchanged ones; switch to per-page dates if Google starts ignoring it.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = (Object.keys(routes) as (keyof typeof routes)[]).flatMap((key) =>
    (["et", "en"] as const).map((locale) => ({
      url: absoluteUrl(routes[key][locale]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.3,
      alternates: {
        languages: {
          et: absoluteUrl(routes[key].et),
          en: absoluteUrl(routes[key].en),
          "x-default": absoluteUrl(routes[key].et),
        },
      },
    })),
  );
  // Estonian-only industry pages.
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: absoluteUrl(industryPath(i.slug)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...pages, ...industryPages];
}
