// Business facts shown on the site and in structured data.

export const site = {
  name: "Lehesepp",
  founder: "Robert",
  email: "robert@lehesepp.ee",
  // International format, no spaces.
  phone: "+37258557713",
  phoneDisplay: "+372 5855 7713",
  areaServed: "Estonia",
} as const;

export const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, "")}`;
export const phoneUrl = `tel:${site.phone}`;
export const emailUrl = `mailto:${site.email}`;
