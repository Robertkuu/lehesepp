import { site } from "@/lib/site";

export type QuoteRequest = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  currentSite: string;
  needs: string[];
  message: string;
  locale: string;
};

/** Sends the quote request to Formspree, which forwards it to the inbox set in the Formspree dashboard. */
export async function submitQuote(data: QuoteRequest): Promise<void> {
  if (!site.formspreeId) throw new Error("Formspree form ID is not set in src/lib/site.ts");
  const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Päring: ${data.businessName}`,
      // Formspree uses the "email" field as the reply-to address.
      email: data.email,
      ettevõte: data.businessName,
      nimi: data.contactName,
      telefon: data.phone,
      tegevusala: data.businessType,
      praegune_leht: data.currentSite,
      vajadused: data.needs.join(", "),
      sõnum: data.message,
      keel: data.locale,
    }),
  });
  if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
}
