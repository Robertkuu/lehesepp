// Business facts shown on the site and in structured data.

export const site = {
  name: "Lehesepp",
  // Founder shown in structured data and llms.txt.
  founder: "Robert Kuura",
  // Legal entity that owns Lehesepp (Estonian Business Register). Also the data controller.
  company: { name: "ORANGUTAN INVESTEERINGUD OÜ", regCode: "14697200" },
  // TODO: city/region and public profiles (Facebook, LinkedIn) for sameAs.
  sameAs: ["https://www.inforegister.ee/14697200-ORANGUTAN-INVESTEERINGUD-OU/"] as string[],
  email: "robert@lehesepp.ee",
  // Second contact, shown next to `email` in the contact section and footer only.
  // Privacy policy and structured data keep `email` (the data controller).
  email2: "henri@lehesepp.ee",
  // International format, no spaces.
  phone: "+37258557713",
  phoneDisplay: "+372 5855 7713",
  areaServed: "Estonia",
  // Formspree form ID (the part after formspree.io/f/). Public by design: it is visible in the
  // page source of every Formspree form. Empty = the form shows its error message.
  formspreeId: "xljgpnpk",
  // Google Ads conversion tracking. Loaded only after the visitor accepts cookies.
  // id: "AW-…" from Google Ads > Goals > Conversions > the action > Tag setup.
  // Empty id = no tag and no cookie banner.
  googleAds: { id: "", conversionLabel: "" },
  // Visit statistics with Umami Cloud (cookieless, so no consent banner is needed).
  // websiteId: from cloud.umami.is > Settings > Websites > the site > Edit. Empty = no script.
  umami: { websiteId: "f8a1c9c4-b95b-45ad-b8f7-f58f516e0630" },
} as const;

export const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, "")}`;
export const phoneUrl = `tel:${site.phone}`;
export const emailUrl = `mailto:${site.email}`;
