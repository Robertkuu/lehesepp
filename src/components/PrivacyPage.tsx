import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/config";
import { routes } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function fill(text: string) {
  return text
    .replaceAll("{founder}", site.founder)
    .replaceAll("{name}", site.name)
    .replaceAll("{email}", site.email);
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const p = dict.privacy;
  return (
    <>
      <Header locale={locale} dict={dict} route="privacy" />
      <main id="sisu" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-24">
        <Link href={routes.home[locale]} className="press inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink">
          <ArrowLeftIcon size={16} weight="bold" aria-hidden="true" />
          {p.back}
        </Link>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.038em]">{p.title}</h1>
        <p className="mt-4 text-sm text-ink-2">{p.updated}</p>
        <div className="mt-12 grid max-w-[68ch] gap-10">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{s.h}</h2>
              {s.p.map((para) => (
                <p key={para} className="mt-3 text-base leading-relaxed text-ink-2 sm:text-lg text-pretty">
                  {fill(para)}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer dict={dict} locale={locale} route="privacy" />
    </>
  );
}
