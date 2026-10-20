import { llmsText } from "@/lib/llms";

// Written to out/llms.txt by the static export.
export const dynamic = "force-static";

export function GET() {
  return llmsText(false);
}
