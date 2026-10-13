import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as (keyof typeof routes)[]).flatMap((key) =>
    (["et", "en"] as const).map((locale) => ({
      url: `${siteUrl}${routes[key][locale] === "/" ? "" : routes[key][locale]}`,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.3,
      alternates: {
        languages: {
          et: `${siteUrl}${routes[key].et === "/" ? "" : routes[key].et}`,
          en: `${siteUrl}${routes[key].en}`,
        },
      },
    })),
  );
}
