import type { Dictionary } from "./et";

export const en: Dictionary = {
  meta: {
    title: "Website design for businesses in Estonia | Lehesepp",
    description:
      "Website design for businesses across Estonia. A fast, mobile-friendly site, and you see a free working preview before you pay.",
    ogAlt: "Lehesepp: websites for businesses in Estonia",
  },
  nav: {
    label: "Main menu",
    home: "Lehesepp home",
    process: "How it works",
    pricing: "Prices",
    samples: "Examples",
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
    sub: "We build websites for businesses in every field, small and large. You see a preview first, and only then do you decide.",
    cta: "See prices",
    secondary: "See examples",
    points: ["Ready in 1–2 weeks", "You pay only when you like the site"],
    demo: {
      region: "Try it: a sample website for your business",
      intro: "Type your business name and see what your website could look like",
      inputLabel: "Name",
      inputPlaceholder: "For example Kohvik Mõisa",
      typesLabel: "Field",
      note: "This is a sample. We make a real preview for your business free of charge.",
      types: {
        cafe: {
          label: "Café",
          sample: "Kohvik Mõisa",
          tagline: "Fresh coffee and pastries baked on site every morning.",
          nav: ["Menu", "About", "Contact"],
          cta: "Book a table",
          info: "Open daily 8–18",
          listLabel: "In the counter today",
          list: ["Cardamom bun", "Rhubarb cake", "Curd pie"],
        },
        salon: {
          label: "Hair salon",
          sample: "Salong Liis",
          tagline: "Cuts, colouring and care in a calm atmosphere.",
          nav: ["Services", "About", "Contact"],
          cta: "Book a time",
          info: "Kalamaja, Tallinn",
          listLabel: "Available today",
          list: ["10:00", "12:30", "15:00", "17:30"],
        },
        auto: {
          label: "Car service",
          sample: "Autoremont Kaasik",
          tagline: "Servicing, repairs and tyre changes in one place.",
          nav: ["Services", "Tyres", "Contact"],
          cta: "Book a service",
          info: "Mon–Fri 8–18",
          listLabel: "Services",
          list: ["Scheduled service", "Diagnostics", "Tyre change"],
        },
        build: {
          label: "Builder",
          sample: "Rehe Ehitus",
          tagline: "Roofs, facades and interiors, delivered turnkey.",
          nav: ["Projects", "Services", "Contact"],
          cta: "Describe your project",
          info: "Free site survey",
          listLabel: "Services",
          list: ["Roofing", "Facades", "Interiors"],
        },
        general: {
          label: "Other",
          sample: "Saar & Partners",
          tagline: "Clear, reliable service that saves you time.",
          nav: ["Services", "About", "Contact"],
          cta: "Get in touch",
          info: "Tallinn and Tartu",
          listLabel: "Why choose us",
          list: ["15 years of experience", "200+ happy clients", "Reply within 24 hours"],
        },
      },
    },
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
    title: "Examples",
    sub: "This is what your website could look like. These are examples, not real businesses.",
    badge: "Example",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much time does it take?",
        a: "Usually 1–2 weeks from our first chat to the moment your website is online for everyone to see.",
      },
      {
        q: "What do you need to do yourself?",
        a: "Very little. Tell us about your business and send your logo or photos if you have them. We write the texts and find any missing photos. At the end you look over the finished site and tell us if it is right.",
      },
      {
        q: "Can you change the text yourself?",
        a: "Yes. The easiest way is to email or call us, and we make the change for you. If you want to edit the texts yourself, say so at the start, and we will build the site so you can.",
      },
      {
        q: "What happens after the site is finished?",
        a: "The website is yours. You can leave it as it is or choose website care. With care, we make sure the site keeps working and make small changes for you.",
      },
      {
        q: "What are a domain and hosting?",
        a: "The domain is your website's address, for example kohvikmoisa.ee. Hosting is the place where your website lives on the internet, so people can open it at any time. Both cost a small yearly fee. We help you choose them and set everything up for you.",
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
    tagline: "Websites for businesses in Estonia.",
    industries: "Industries",
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
