import type { ReactNode } from "react";
import type { Viewport } from "next";
import { bricolage, schibsted } from "@/app/fonts";
import { sampleFontVars } from "@/components/samples/fonts";
import type { Locale } from "@/i18n/config";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c110e" },
  ],
};

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${bricolage.variable} ${schibsted.variable} ${sampleFontVars}`}>
      <body className="min-h-dvh">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
