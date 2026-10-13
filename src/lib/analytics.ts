import { site } from "@/lib/site";

// Umami: cookieless visit statistics. Page views are counted by the script itself.

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

export const analyticsEnabled = Boolean(site.umami.websiteId);

/** Records a named event, e.g. a sent quote request. No-op without the script. */
export function trackEvent(event: string, data?: Record<string, string>) {
  window.umami?.track(event, data);
}
