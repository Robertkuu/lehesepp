import type { Dictionary } from "./et";
import { formatPrice, fromPrice } from "@/content/pricing";

const from = formatPrice(fromPrice);

export const en: Dictionary = {
  meta: {
    title: "Website design for businesses in Estonia | Lehesepp",
    description:
      `Lehesepp builds websites for small businesses in Estonia from ${from}: texts, photos and design included, ready in 1–2 weeks. You pay only when you like the site.`,
    ogAlt: "Lehesepp: websites for businesses in Estonia",
    serviceType: "Website design",
  },
  nav: {
    label: "Main menu",
    home: "Lehesepp home",
    process: "How it works",
    pricing: "Prices",
    samples: "Our work",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get a quote",
    skip: "Skip to content",
    language: "Eesti keeles",
    languageShort: "ET",
  },
  hero: {
    title: "A website for your business",
    from: "from",
    sub: "Lehesepp builds websites for small businesses in Estonia. Texts, photos and design are included, and the site is ready in 1–2 weeks. You see a preview first, and only then do you decide.",
    cta: "Get a quote",
    secondary: "See prices",
    points: ["Ready in 1–2 weeks", "You pay only when you like the site"],
  },
  process: {
    title: "How does it work?",
    time: "Ready in 1–2 weeks",
    steps: [
      {
        title: "We talk about what you need",
        body: "A short chat on the phone or in person. You tell us what your business does and what you want from the website.",
      },
      {
        title: "We build your website",
        body: "We write the texts, pick the photos and build the site. We send you a link so you can look at it on your phone too.",
      },
      {
        title: "You approve it and it goes live",
        body: "When everything is right, we put the website online. Only then do you get the invoice.",
      },
    ],
  },
  pricing: {
    title: "Prices",
    sub: "Two packages. Everything you need is included.",
    free: "The quote is free.",
    payLater: "You pay only when you like the site.",
  },
  samples: {
    title: "Our work",
    work: [
      {
        name: "Silver Rehvid",
        url: "https://silverrehvid.ee",
        img: "/work/silverrehvid.jpg",
        text: "Tyre workshop in Viimsi. Customers see the price for their wheel size on the home page and call with one tap. The site is in Estonian and English.",
      },
      {
        name: "Plushy",
        url: "https://plushy.ee",
        img: "/work/plushy.jpg",
        text: "Online shop for Gua Sha stones and headbands. A new look and a faster purchase: add to cart straight from the home page, with the buy button always in reach on mobile.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a website cost?",
        a: `Basic starts at ${from}. The Pro price depends on what you need, such as booking or several languages. The quote is free.`,
      },
      {
        q: "Do I have to pay up front?",
        a: "No. You get the invoice only when you like the finished site.",
      },
      {
        q: "How much time does it take?",
        a: "Usually 1–2 weeks.",
      },
      {
        q: "What do you need to do yourself?",
        a: "Tell us about your business and send your logo or photos if you have them. We write the texts.",
      },
      {
        q: "Can the website be changed later?",
        a: "Yes, and you can do it yourself. The site comes with a simple editor where you change texts, prices and photos without any coding. If you would rather not, call us and we will do it.",
      },
      {
        // TODO: confirm domain + hosting are billed separately and add the typical yearly cost.
        q: "What are a domain and hosting?",
        a: "The domain is your site's address, hosting is where it lives. Both have a small separate yearly fee. We set them up for you.",
      },
    ],
  },
  contact: {
    title: "Get a quote",
    sub: "Write a few lines about your business. The quote is free and carries no obligation.",
    reply: "We reply within 24 hours",
    direct: "Or contact us directly",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    form: {
      name: "Your name",
      contact: "Phone or email",
      contactHint: "We will contact you this way.",
      message: "What do you need?",
      messagePlaceholder: "For example: a café in Tartu that needs a website with the menu and opening hours.",
      submit: "Get a free quote",
      sending: "Sending…",
      consentA: "We use your details only to prepare the quote.",
      consentLink: "Privacy policy",
      errors: {
        required: "This field is required.",
        contact: "Enter a phone number or an email address.",
        submit: "Sending failed. Please try again or call us.",
      },
      success: {
        title: "Thank you! Your request has reached us.",
        body: "We reply within 24 hours. For anything urgent, give us a call.",
        again: "Send another request",
      },
    },
  },
  footer: {
    tagline: "Websites for small businesses in Estonia.",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    contact: "Contact",
    language: "Language",
    cookies: "Cookie settings",
  },
  consent: {
    title: "Cookies",
    body: "We use Google Ads cookies to measure whether ads lead to enquiries. They are not loaded without your consent.",
    accept: "Accept",
    reject: "Decline",
    privacy: "Privacy policy",
  },
  privacy: {
    title: "Privacy policy",
    description: "What data Lehesepp collects through the quote form and visit statistics, what it is used for and how long it is kept.",
    updated: "Last updated: 13 October 2026",
    back: "Back to home",
    sections: [
      {
        h: "Data controller",
        p: [
          "The controller of personal data is Robert Kuura ({name}). For questions about data protection, write to {email}.",
        ],
      },
      {
        h: "Data collected",
        p: [
          "When you submit the quote form, we receive your name, your phone number or email address and your message. When you write or call us directly, we receive the information you choose to share.",
          "Visit statistics are collected with Umami, which uses no cookies and does not store IP addresses. The statistics show only totals, such as how many times a page was viewed and where visitors came from, and cannot identify an individual person.",
          "If you give consent, the site uses Google Ads cookies to measure whether a visitor who came from an ad sent an enquiry. Without consent these cookies are not loaded. You can withdraw consent at any time with the “Cookie settings” link in the footer.",
        ],
      },
      {
        h: "Purpose of processing",
        p: [
          "Data is used only to respond to your enquiry, prepare a quote and, if we work together, perform the contract. The legal basis is pre-contractual steps and the contract (GDPR Art. 6(1)(b)).",
          "The legal basis for ad measurement is your consent (GDPR Art. 6(1)(a)).",
          "The legal basis for visit statistics is our legitimate interest in knowing how the site is used (GDPR Art. 6(1)(f)).",
          "Data is never sold or shared with third parties for marketing purposes.",
        ],
      },
      {
        h: "Processors",
        p: [
          "The site is hosted on GitHub Pages (GitHub, Inc.), which logs visitors' IP addresses for security purposes. Form requests are delivered through the email service Formspree (Formspree, Inc.). Visit statistics are processed by Umami Software, Inc. With your consent, ad measurement data is processed by Google Ireland Limited. These providers process data only on our instructions.",
        ],
      },
      {
        h: "Retention",
        p: [
          "Enquiries are kept for up to 12 months if no work follows. Once a contract is signed, data is kept for as long as the law requires (for example 7 years for accounting records).",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You have the right to access the data held about you, request its correction or deletion, and restrict its processing. To do so, write to {email}. If you believe your rights have been violated, you may contact the Estonian Data Protection Inspectorate (www.aki.ee).",
        ],
      },
    ],
  },
  preview: {
    greeting: "Hello, {business}.",
    intro: "We have prepared a preview of your new website. It can also be viewed on a phone.",
    open: "Open the preview",
    frameTitle: "Preview of the {business} website",
    pay: "You pay only if the site is right.",
    next: "Does the preview meet your expectations?",
    nextBody: "Call or write to us. We will make the necessary changes and launch the site.",
    call: "Call",
    write: "Write",
    from: "Robert, Lehesepp",
  },
  notFound: {
    title: "Page not found",
    body: "The link may be incorrect or the page has moved.",
    back: "Back to home",
  },
};
