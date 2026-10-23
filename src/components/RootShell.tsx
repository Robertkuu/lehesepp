import type { ReactNode } from "react";
import type { Viewport } from "next";
import Script from "next/script";
import { bricolage, schibsted } from "@/app/fonts";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ConsentBanner } from "@/components/ConsentBanner";
import { getDictionary } from "@/i18n";
import { routes, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c110e" },
  ],
};

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${bricolage.variable} ${schibsted.variable}`}>
      <body className="min-h-dvh">
        <MotionProvider>{children}</MotionProvider>
        <ConsentBanner t={getDictionary(locale).consent} privacyHref={routes.privacy[locale]} />
        {site.umami.websiteId && (
          <Script src="https://cloud.umami.is/script.js" data-website-id={site.umami.websiteId} strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
