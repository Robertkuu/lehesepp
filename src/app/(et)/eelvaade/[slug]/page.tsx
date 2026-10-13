import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, PhoneIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { previews, getPreview } from "@/content/previews";
import { getDictionary } from "@/i18n";
import { routes } from "@/i18n/config";
import { emailUrl, phoneUrl } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { buttonClass } from "@/components/ui/Button";

export function generateStaticParams() {
  return previews.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/eelvaade/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPreview(slug);
  const dict = getDictionary(p?.locale ?? "et");
  return {
    title: p ? `${dict.preview.greeting.replace("{business}", p.business)} | Lehesepp` : "Lehesepp",
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  };
}

export default async function PreviewPage({ params }: PageProps<"/eelvaade/[slug]">) {
  const { slug } = await params;
  const p = getPreview(slug);
  if (!p) notFound();
  const dict = getDictionary(p.locale);
  const t = dict.preview;
  const name = (s: string) => s.replaceAll("{business}", p.business);

  return (
    <div lang={p.locale} className="min-h-dvh">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center px-4 sm:px-6 lg:px-10">
        <Link href={routes.home[p.locale]} className="press -m-2 rounded-[var(--radius-frame)] p-2 text-lg">
          <Logo />
        </Link>
      </header>
      <main className="mx-auto max-w-[1400px] px-4 pb-20 pt-8 sm:px-6 lg:px-10 lg:pt-14">
        <h1 className="font-display text-[clamp(2.4rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.038em] text-balance">
          {name(t.greeting)}
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{t.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "md")}>
            {t.open}
            <ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" />
          </a>
          <p className="text-base font-semibold text-leaf-ink">{t.pay}</p>
        </div>

        {p.embed !== false && (
          <div className="draft-frame relative mt-14">
            <span className="crop crop-tl" aria-hidden="true" />
            <span className="crop crop-tr" aria-hidden="true" />
            <span className="crop crop-bl" aria-hidden="true" />
            <span className="crop crop-br" aria-hidden="true" />
            <iframe
              src={p.demoUrl}
              title={name(t.frameTitle)}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              referrerPolicy="no-referrer"
              className="block h-[78dvh] min-h-[520px] w-full rounded-[var(--radius-frame)] border border-line-strong bg-paper-2"
            />
          </div>
        )}

        <section className="mt-16 grid gap-6 border-t border-line-strong pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{t.next}</h2>
            <p className="mt-3 max-w-[48ch] text-lg text-ink-2">{t.nextBody}</p>
            <p className="mt-6 text-sm font-medium text-ink-2">{t.from}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={phoneUrl} className={buttonClass("primary", "md")}>
              <PhoneIcon size={18} weight="bold" aria-hidden="true" />
              {t.call}
            </a>
            <a href={emailUrl} className={buttonClass("secondary", "md")}>
              <EnvelopeSimpleIcon size={18} weight="bold" aria-hidden="true" />
              {t.write}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
