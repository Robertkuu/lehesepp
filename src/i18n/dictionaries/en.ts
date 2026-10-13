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
    services: "Services",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get a quote",
    skip: "Skip to content",
    language: "Eesti keeles",
    languageShort: "ET",
  },
  hero: {
    titleA: "Websites for businesses in Estonia.",
    titleB: "See the finished site before you pay.",
    sub: "Websites for every kind of business, from cafés and salons to construction and service companies. A working preview comes first, then you decide.",
    cta: "Get a quote",
    secondary: "Process",
    demo: {
      region: "Sample: a website preview with your business name",
      inputLabel: "Your business name",
      inputPlaceholder: "For example Kohvik Mõisa",
      typesLabel: "Business type",
      note: "Sample sites. The preview for your business is free of charge.",
      draftLabel: "draft",
      types: {
        cafe: {
          label: "Café",
          sample: "Kohvik Mõisa",
          tagline: "Fresh coffee and pastries baked on site every morning.",
          nav: ["Menu", "About", "Contact"],
          cta: "Book a table",
          info: "Open daily 8-18",
          listLabel: "In the counter today",
          list: ["Cardamom bun", "Rhubarb cake", "Curd pie"],
        },
        salon: {
          label: "Hair salon",
          sample: "Salong Liis",
          tagline: "Cuts, colour and care in a calm setting.",
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
          info: "Mon-Fri 8-18",
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
          listLabel: "Why us",
          list: ["15 years of experience", "200+ happy clients", "Reply within 24 hours"],
        },
      },
    },
  },
  services: {
    title: "Services",
    items: [
      {
        key: "new",
        title: "A new website",
        body: "For businesses without a website, or whose online presence is limited to social media. The site explains clearly what you offer and how to reach you.",
      },
      {
        key: "redesign",
        title: "Website redesign",
        body: "For sites that are slow, difficult to use on a phone or outdated. I keep the content that works and rebuild the rest.",
      },
      {
        key: "care",
        title: "Monthly care plan",
        body: "Hosting, software updates, backups and minor content changes for one monthly fee.",
      },
      {
        key: "google",
        title: "Google visibility",
        body: "Setting up and maintaining your Google Business profile, map listing and the search engine fundamentals.",
      },
    ],
  },
  offer: {
    titleA: "A preview before any commitment.",
    titleB: "You pay only if the site is right.",
    body: "You do not have to commit on the basis of a sketch or a promise. I build your new website and send you a link. If the result does not meet your expectations, there is no obligation.",
    draft: "Draft",
    done: "Finished",
    facts: ["No deposit", "The preview is a working site", "You decide after the preview"],
  },
  process: {
    title: "Process",
    steps: [
      {
        title: "Free consultation",
        body: "A short call or meeting to understand your business and its customers.",
      },
      {
        title: "Preview",
        body: "I build the new website as a working preview. You receive a link and can review it on your phone.",
      },
      {
        title: "Feedback",
        body: "We review the preview together and I make the necessary changes.",
      },
      {
        title: "Launch",
        body: "I connect the domain, set up Google services and hand over access. The invoice follows the launch.",
      },
    ],
  },
  why: {
    title: "Why Lehesepp",
    fast: {
      title: "Fast loading",
      body: "Pages load quickly even on a slow mobile connection. Speed affects both the visitor experience and visibility on Google.",
      measured: "On your device, this page loaded in",
      unit: "seconds",
      measuring: "measuring…",
    },
    mobile: {
      title: "Designed for phones",
      body: "Most visitors arrive on a phone, so every page is designed for the small screen first.",
    },
    person: {
      title: "Direct contact",
      body: "Throughout the project you work with one person, who also does the work.",
      call: "Call",
      role: "Founder of Lehesepp",
      reply: "Replies within 24 hours",
      email: "Email",
      whatsapp: "WhatsApp",
    },
    overhead: {
      title: "No agency overhead",
      body: "Your budget goes into the website, not into project management or office space.",
      agencyLabel: "Agency",
      agency: ["Project manager", "Account manager", "Designer", "Developer"],
      meLabel: "Lehesepp",
      me: "One contact from start to finish",
    },
  },
  about: {
    title: "Robert, founder of Lehesepp",
    body: [
      "I am a web developer building websites for businesses in Estonia, using the same technology large companies use for theirs.",
      "I carry each project from start to finish myself and reply to every enquiry within 24 hours.",
    ],
    facts: ["Reply within 24 hours", "Serving all of Estonia", "Modern technology"],
    photoAlt: "Robert, founder of Lehesepp",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a website cost?",
        a: "Every project is different, so each business receives its own quote. The quote is free and carries no obligation. Because the preview is ready before payment, you only pay for a result you have seen.",
      },
      {
        // TODO: confirm timeline.
        q: "How long does it take?",
        a: "The preview is usually ready within one to two weeks. After your feedback, the site normally goes live within a week. The quote includes the exact timeline.",
      },
      {
        q: "What about the domain and hosting?",
        a: "If you already have a domain, we use it. If not, I help you choose and register one. I arrange the hosting, and the domain is always registered in your name.",
      },
      {
        q: "Will my business appear on Google?",
        a: "The site is built to meet Google's technical requirements: titles, descriptions, speed and location data. I also create or update your Google Business profile so the business appears on the map. No one can guarantee a ranking, but the foundations will be solid.",
      },
      {
        q: "What happens after launch?",
        a: "You can manage the site yourself or join the monthly care plan, which covers hosting, updates, backups and minor changes.",
      },
    ],
  },
  contact: {
    title: "Get a quote",
    sub: "Briefly describe your business and what you need. The quote is free and carries no obligation.",
    reply: "Reply within 24 hours",
    direct: "Direct contact",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    form: {
      businessName: "Business name",
      contactName: "Your name",
      email: "Email",
      phone: "Phone",
      businessType: "Business type",
      businessTypePlaceholder: "Choose a type",
      businessTypes: ["Food and drink", "Beauty and health", "Construction and repair", "Automotive", "Retail", "Services", "Other"],
      currentSite: "Current website",
      optional: "optional",
      currentSitePlaceholder: "www.mybusiness.ee",
      needs: "What do you need?",
      needsOptions: ["A new website", "Website redesign", "Monthly care plan", "Google visibility"],
      message: "Message",
      messagePlaceholder: "Briefly describe what you would like to achieve.",
      submit: "Send request",
      sending: "Sending…",
      consentA: "Your details are used only to prepare a quote.",
      consentLink: "Privacy policy",
      errors: {
        required: "This field is required.",
        email: "Please check the email address.",
        needs: "Choose at least one.",
        submit: "The request could not be sent. Please try again or email me directly.",
      },
      success: {
        title: "Thank you. Your request has been received.",
        body: "I will reply within 24 hours. For urgent matters, please call.",
        again: "Send another request",
      },
    },
  },
  footer: {
    tagline: "Websites for businesses in Estonia.",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    contact: "Contact",
    language: "Language",
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: 13 October 2026",
    back: "Back to home",
    sections: [
      {
        h: "Data controller",
        p: [
          "The controller of personal data is {founder} ({name}). For questions about data protection, write to {email}.",
        ],
      },
      {
        h: "Data collected",
        p: [
          "When you submit the quote form, I receive your business name, your name, email address, phone number, business type, current website address and message. When you write or call directly, I receive the information you choose to share.",
          "This site uses no tracking cookies and no advertising networks.",
        ],
      },
      {
        h: "Purpose of processing",
        p: [
          "Data is used only to respond to your enquiry, prepare a quote and, if we work together, perform the contract. The legal basis is pre-contractual steps and the contract (GDPR Art. 6(1)(b)).",
          "Data is never sold or shared with third parties for marketing purposes.",
        ],
      },
      {
        h: "Processors",
        p: [
          "The site is hosted on GitHub Pages (GitHub, Inc.), which logs visitors' IP addresses for security purposes. Form requests are delivered through the email service Formspree (Formspree, Inc.). These providers process data only on my instructions.",
        ],
      },
      {
        h: "Retention",
        p: [
          "Enquiries are kept for up to 12 months if no work follows. Under a contract, data is kept for as long as the law requires (for example 7 years for accounting records).",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You have the right to access the data held about you, request its correction or deletion, and restrict its processing. Write to {email}. If you believe your rights have been violated, you may contact the Estonian Data Protection Inspectorate (www.aki.ee).",
        ],
      },
    ],
  },
  preview: {
    greeting: "Hello, {business}.",
    intro: "I have prepared a preview of your new website. It can also be viewed on a phone.",
    open: "Open the preview",
    frameTitle: "Preview of the {business} website",
    pay: "You pay only if the site is right.",
    next: "Does the preview meet your expectations?",
    nextBody: "Call or write. I will make the necessary changes and we can launch the site.",
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
