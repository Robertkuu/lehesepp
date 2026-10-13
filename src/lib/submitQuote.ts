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

/**
 * TODO: connect the form to a real endpoint before launch.
 *
 * Option A, Formspree: create a form at formspree.io and replace the body with
 *   const res = await fetch("https://formspree.io/f/<FORM_ID>", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw new Error("Formspree rejected the request");
 *
 * Option B, Resend: add a route handler at src/app/api/quote/route.ts that calls
 *   resend.emails.send({ from, to, subject, text }) with RESEND_API_KEY from the
 *   environment, and POST to "/api/quote" here.
 */
export async function submitQuote(data: QuoteRequest): Promise<void> {
  if (process.env.NODE_ENV !== "production") console.info("[quote form] TODO: send", data);
  await new Promise((resolve) => setTimeout(resolve, 900));
}
