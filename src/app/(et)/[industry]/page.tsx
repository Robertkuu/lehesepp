import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry, industryPath } from "@/content/industries";
import { IndustryPage } from "@/components/IndustryPage";
import { ogImages } from "@/lib/metadata";
import { siteUrl } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[industry]">): Promise<Metadata> {
  const i = getIndustry((await params).industry);
  if (!i) return {};
  const path = industryPath(i.slug);
  return {
    metadataBase: new URL(siteUrl),
    title: `${i.metaTitle} | Lehesepp`,
    description: i.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Lehesepp",
      locale: "et_EE",
      url: path,
      title: i.metaTitle,
      description: i.metaDescription,
      images: ogImages("et"),
    },
    twitter: { card: "summary_large_image", images: ogImages("et") },
  };
}

export default async function Page({ params }: PageProps<"/[industry]">) {
  const i = getIndustry((await params).industry);
  if (!i) notFound();
  return <IndustryPage industry={i} />;
}
