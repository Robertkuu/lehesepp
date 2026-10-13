// Prospect previews shown at /eelvaade/<slug>. These pages are noindex and not linked
// from anywhere: send the link directly to the business owner.
//
// To add one, copy an entry and change the values:
//   slug:     the URL part, lowercase with hyphens (lehesepp.ee/eelvaade/<slug>)
//   business: the business name as it should appear in the greeting
//   demoUrl:  where the preview site is deployed (e.g. a Vercel preview URL)
//   locale:   "et" or "en", the language of the intro text
//   embed:    false if the demo host forbids iframes (then only the button is shown)

export type ProspectPreview = {
  slug: string;
  business: string;
  demoUrl: string;
  locale: "et" | "en";
  embed?: boolean;
  note?: string;
};

export const previews: ProspectPreview[] = [
  {
    // TODO: example entry, replace with a real prospect.
    slug: "kohvik-moisa",
    business: "Kohvik Mõisa",
    demoUrl: "https://example.com",
    locale: "et",
    embed: true,
  },
];

export function getPreview(slug: string) {
  return previews.find((p) => p.slug === slug);
}
