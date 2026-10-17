import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { getDictionary } from "@/i18n";
import { absoluteUrl, routes, siteUrl } from "@/i18n/config";
import { industries, industryPath, type Industry } from "@/content/industries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { DraftFrame } from "@/components/hero/DraftFrame";
import { InView } from "@/components/motion/InView";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { formatPrice, fromPrice } from "@/content/pricing";

function IndustryJsonLd({ industry }: { industry: Industry }) {
  const url = absoluteUrl(industryPath(industry.slug));
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: industry.metaTitle,
        description: industry.metaDescription,
        url,
        serviceType: "Kodulehe tegemine",
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "Country", name: "Estonia" },
        inLanguage: "et",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lehesepp", item: absoluteUrl(routes.home.et) },
          { "@type": "ListItem", position: 2, name: industry.title, item: url },
        ],
      }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function IndustryPage({ industry }: { industry: Industry }) {
  const dict = getDictionary("et");
  const others = industries.filter((i) => i.slug !== industry.slug);
  return (
    <>
      <IndustryJsonLd industry={industry} />
      <Header locale="et" dict={dict} route={null} localContact />
      <main id="sisu">
        <section aria-labelledby="hero-title" className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-10 lg:pb-28 lg:pt-14">
          <nav aria-label="Asukoht" className="text-sm text-ink-2">
            <Link href={routes.home.et} className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink">
              Lehesepp
            </Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{industry.label}</span>
          </nav>
          <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="flex flex-col gap-8">
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.15rem,6.4vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-ink text-balance"
              >
                {industry.title}
              </h1>
              <p className="max-w-[40ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{industry.lead}</p>
              <p className="text-lg font-semibold text-leaf-ink">
                {dict.hero.from} {formatPrice(fromPrice)} · {dict.pricing.payLater}
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#hinnad">
                  {dict.hero.cta}
                  <ArrowDownIcon size={18} weight="bold" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="#kontakt" variant="secondary">
                  {dict.nav.cta}
                  <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
            <div>
              <DraftFrame demo={dict.hero.demo} initialType={industry.demo} />
            </div>
          </div>
        </section>

        <section aria-labelledby="sisaldab-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
          <h2 id="sisaldab-title" className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
            Mida leht sisaldab
          </h2>
          <InView as="ul" className="index-list mt-12 lg:mt-16">
            {industry.features.map((f, i) => (
              <li key={f.title} className="index-row relative grid gap-3 py-7 sm:py-9 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10" style={{ "--i": i } as CSSProperties}>
                <span className="index-rule" aria-hidden="true" />
                <h3 className="index-text flex items-center gap-4 font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.03em]">
                  <CheckIcon size={28} weight="bold" aria-hidden="true" className="shrink-0 text-leaf-ink" />
                  {f.title}
                </h3>
                <p className="index-text max-w-[46ch] text-base leading-relaxed text-ink-2 sm:text-lg md:pt-1.5 text-pretty">{f.body}</p>
              </li>
            ))}
          </InView>
        </section>

        <Process dict={dict} />
        <Pricing dict={dict} locale="et" />
        <Contact dict={dict} locale="et" />

        <nav aria-labelledby="valdkonnad-title" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
          <h2 id="valdkonnad-title" className="text-sm font-medium text-ink-2">
            Kodulehed ka teistele valdkondadele
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={industryPath(o.slug)}
                  className="press inline-flex h-11 items-center rounded-[var(--radius-frame)] border border-line-strong px-4 text-sm font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  {o.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer dict={dict} locale="et" route={null} />
    </>
  );
}
