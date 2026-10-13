import type { MetadataRoute } from "next";
import { siteUrl } from "@/i18n/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Prospect previews are kept out of search with noindex (meta + header), not robots.txt,
    // so crawlers can actually see the noindex.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
