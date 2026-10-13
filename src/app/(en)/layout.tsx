import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ogImages } from "@/lib/metadata";
import { RootShell } from "@/components/RootShell";
import { siteUrl } from "@/i18n/config";

export { viewport } from "@/components/RootShell";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), openGraph: { images: ogImages("en") } };

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
