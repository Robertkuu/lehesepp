import { site } from "@/lib/site";

// Google Ads tag, loaded only after consent (basic Consent Mode: nothing is sent before "accept").

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type Consent = "granted" | "denied";

const KEY = "lehesepp-consent";
export const CONSENT_OPEN_EVENT = "lehesepp:consent-open";

export const adsEnabled = Boolean(site.googleAds.id);

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, consent);
  } catch {}
  if (consent === "granted") loadAds();
  else revokeAds();
}

let loaded = false;
// The visitor's current choice in this tab; a later "reject" must stop conversions too.
let granted = false;

export function loadAds() {
  if (!adsEnabled) return;
  granted = true;
  if (loaded) {
    // Accepted again after a reject in the same tab: the tag is already on the page.
    window.gtag?.("consent", "update", { ad_storage: "granted", ad_user_data: "granted" });
    return;
  }
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "denied", analytics_storage: "denied" });
  window.gtag("js", new Date());
  window.gtag("config", site.googleAds.id);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(site.googleAds.id)}`;
  document.head.appendChild(s);
}

function revokeAds() {
  granted = false;
  window.gtag?.("consent", "update", { ad_storage: "denied", ad_user_data: "denied" });
  // Remove the Google Ads cookies already set on this domain.
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_gcl")) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}`;
  }
}

/** Counts a sent quote request as a Google Ads conversion (no-op without consent). */
export function trackLead() {
  if (!granted || !site.googleAds.conversionLabel) return;
  window.gtag?.("event", "conversion", { send_to: `${site.googleAds.id}/${site.googleAds.conversionLabel}` });
}
