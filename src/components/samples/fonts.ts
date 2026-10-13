import localFont from "next/font/local";
import { Archivo, Big_Shoulders, Bodoni_Moda } from "next/font/google";

// Faces for the sample sites inside the demos. Each business gets its own voice.
// preload is off: a face downloads only when its sample is on screen. Latin covers
// õ ä ö ü; š and ž in a typed-in name fall back to the system face.
// The café face is on screen from the first view, so it is self-hosted and trimmed
// (Cormorant Garamond 600, Latin-1 plus Š š Ž ž, 16 KB).
const cafe = localFont({
  src: "../../app/fonts-files/cormorant.woff2",
  weight: "600",
  variable: "--font-cafe",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

const salon = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-salon",
  display: "swap",
  preload: false,
});

const auto = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-auto",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const build = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-build",
  display: "swap",
  preload: false,
});

export const sampleFontVars = [cafe, salon, auto, build].map((f) => f.variable).join(" ");
