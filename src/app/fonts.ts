import localFont from "next/font/local";

// Self-hosted, subset to Latin-1 plus the Estonian extras (Š š Ž ž), € and typographic
// punctuation. One small file per family instead of four Google subsets.
// Schibsted Grotesk carries all text and UI (weights 400-600).
// Bricolage Grotesque is pinned to opsz 96 and wdth 88 (weights 700-800 stay variable).
// Sources and the exact subsetting steps: docs/fonts.md
export const bricolage = localFont({
  src: "./fonts-files/bricolage.woff2",
  weight: "700 800",
  variable: "--font-bricolage",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const schibsted = localFont({
  src: "./fonts-files/schibsted.woff2",
  weight: "400 600",
  variable: "--font-text",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});
