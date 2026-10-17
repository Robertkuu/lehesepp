import { site } from "@/lib/site";

export type QuoteRequest = {
  name: string;
  /** Phone number or email address, as the visitor typed it. */
  contact: string;
  message: string;
  locale: string;
};

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Sends the quote request to Formspree, which forwards it to the inbox set in the Formspree dashboard. */
export async function submitQuote(data: QuoteRequest): Promise<void> {
  if (!site.formspreeId) throw new Error("Formspree form ID is not set in src/lib/site.ts");
  const isEmail = EMAIL.test(data.contact);
  const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Päring: ${data.name}`,
      // Formspree uses the "email" field as the reply-to address, so send it only when it is one.
      ...(isEmail ? { email: data.contact } : { telefon: data.contact }),
      nimi: data.name,
      sõnum: data.message,
      keel: data.locale,
    }),
  });
  if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
}
