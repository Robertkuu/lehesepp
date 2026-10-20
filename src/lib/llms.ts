// /llms.txt and /llms-full.txt: the site's facts in Markdown for AI assistants.
// Built from the same dictionaries, prices and industry pages as the site, so they never drift.

import { absoluteUrl, routes, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { formatPrice, packages, prices, type PackageKey } from "@/content/pricing";
import { industries, industryPath } from "@/content/industries";
import { site } from "@/lib/site";

const order: PackageKey[] = ["basic", "pro"];

const text = {
  et: {
    lang: "Eesti keeles",
    packages: "Paketid ja hinnad",
    process: "Kuidas see käib",
    faq: "Korduma kippuvad küsimused",
    industries: "Valdkondade lehed",
    contact: "Kontakt",
    email: "E-post",
    phone: "Telefon",
    founder: "Asutaja",
    area: "Teeninduspiirkond: kogu Eesti",
    notIncluded: "Ei tee: e-poode. Domeeni ja majutuse aastatasu ei kuulu paketi hinna sisse.",
  },
  en: {
    lang: "In English",
    packages: "Packages and prices",
    process: "How it works",
    faq: "Frequently asked questions",
    industries: "Industry pages",
    contact: "Contact",
    email: "Email",
    phone: "Phone",
    founder: "Founder",
    area: "Service area: all of Estonia",
    notIncluded: "Not offered: online shops. The yearly domain and hosting fee is not part of the package price.",
  },
} as const;

function packageLines(locale: Locale, full: boolean) {
  return order.flatMap((key) => {
    const pkg = packages[locale][key];
    const price = prices[key];
    const priceText = price === null ? pkg.priceLabel : `${pkg.priceLabel} ${formatPrice(price)}`;
    const head = `- **${pkg.name}** (${priceText}): ${pkg.description}`;
    return full ? [head, ...pkg.features.map((f) => `  - ${f}`)] : [head];
  });
}

function section(locale: Locale, full: boolean) {
  const d = getDictionary(locale);
  const t = text[locale];
  const home = absoluteUrl(routes.home[locale]);
  const lines = [
    `## ${t.lang}`,
    "",
    d.hero.sub,
    "",
    `### ${t.packages}`,
    "",
    ...packageLines(locale, full),
    "",
    `${d.pricing.free} ${d.pricing.payLater}`,
    t.notIncluded,
    "",
    `### ${t.process}`,
    "",
    `${d.process.time}.`,
    ...d.process.steps.map((s, i) => `${i + 1}. **${s.title}**${full ? `: ${s.body}` : ""}`),
    "",
  ];
  if (full) {
    lines.push(`### ${t.faq}`, "", ...d.faq.items.flatMap((f) => [`**${f.q}**`, f.a, ""]));
  }
  if (locale === "et") {
    lines.push(`### ${t.industries}`, "", ...industries.map((i) => `- [${i.metaTitle}](${absoluteUrl(industryPath(i.slug))}): ${i.lead}`), "");
  }
  lines.push(
    `### ${t.contact}`,
    "",
    `- ${t.email}: ${site.email}`,
    `- ${t.phone}: ${site.phoneDisplay}`,
    `- ${t.founder}: ${site.founder}`,
    `- ${t.area}`,
    `- ${d.contact.reply}: ${home}#kontakt`,
    "",
  );
  return lines;
}

export function llmsText(full: boolean) {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${getDictionary("et").meta.description}`,
    `> ${getDictionary("en").meta.description}`,
    "",
    `- Eesti: ${absoluteUrl(routes.home.et)}`,
    `- English: ${absoluteUrl(routes.home.en)}`,
    ...(full ? [] : [`- Full version / täisversioon: ${siteUrl}/llms-full.txt`]),
    "",
    ...section("et", full),
    ...section("en", full),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
