import { llmsText } from "@/lib/llms";

// Written to out/llms-full.txt by the static export.
export const dynamic = "force-static";

export function GET() {
  return llmsText(true);
}
