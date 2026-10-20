import { PrivacyPage } from "@/components/PrivacyPage";
import { pageMetadata } from "@/lib/metadata";
import { et } from "@/i18n/dictionaries/et";

export const metadata = pageMetadata("et", "privacy", et.privacy.title, et.privacy.description);

export default function Page() {
  return <PrivacyPage locale="et" />;
}
