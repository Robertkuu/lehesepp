import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { formatPrice, fromPrice } from "@/content/pricing";

export const ogSize = { width: 1200, height: 630 };

export async function renderOg(locale: Locale) {
  const dict = getDictionary(locale);
  const font = await readFile(join(process.cwd(), "src/assets/bricolage-800.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f1f3ee", padding: "64px 72px", fontFamily: "Bricolage" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 34, height: 34, background: "#34b85a", borderRadius: "0 34px 0 34px" }} />
          <div style={{ fontSize: 44, color: "#0e1510", letterSpacing: "-0.03em" }}>lehesepp</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 0.98, letterSpacing: "-0.035em" }}>
          <span style={{ color: "#0e1510" }}>{dict.hero.title}</span>
          <span style={{ color: "#17703a" }}>{`${dict.hero.from} ${formatPrice(fromPrice)}`}</span>
        </div>
        <div style={{ display: "flex", height: 14, background: "#34b85a", borderRadius: 3, width: 220 }} />
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Bricolage", data: font, weight: 800, style: "normal" }] },
  );
}
