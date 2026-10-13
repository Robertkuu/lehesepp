import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (Object.keys(routes) as (keyof typeof routes)[]).flatMap((key) =>
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
}
