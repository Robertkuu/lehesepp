import { PrivacyPage } from "@/components/PrivacyPage";
import { pageMetadata } from "@/lib/metadata";
import { en } from "@/i18n/dictionaries/en";

export const metadata = pageMetadata("en", "privacy", en.privacy.title, en.privacy.description);

export default function Page() {
  return <PrivacyPage locale="en" />;
}
