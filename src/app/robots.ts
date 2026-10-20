import type { MetadataRoute } from "next";
import { siteUrl } from "@/i18n/config";

export const dynamic = "force-static";

// Named AI crawlers get an explicit allow so the policy is unambiguous to each of them.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    // Prospect previews are kept out of search with a noindex meta tag (GitHub Pages cannot send headers), not robots.txt,
    // so crawlers can actually see the noindex.
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
      // Removed headshot; disallow is how Google drops an image from Images results.
      { userAgent: "Googlebot-Image", disallow: ["/robert.webp", "/robert-avatar.jpg"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
