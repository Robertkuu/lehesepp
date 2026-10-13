import { renderOg } from "@/lib/og";

// Social share image, written to out/og/et.png by the static export.
export const dynamic = "force-static";

export function GET() {
  return renderOg("et");
}
