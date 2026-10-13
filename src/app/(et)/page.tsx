import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("et", "home");

export default function Page() {
  return <HomePage locale="et" />;
}
