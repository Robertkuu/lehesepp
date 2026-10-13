import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { routes, otherLocale, type Locale, type RouteKey } from "@/i18n/config";
import { ConsentSettingsLink } from "@/components/ConsentBanner";
import { site, emailUrl, phoneUrl } from "@/lib/site";

export function Footer({ dict, locale, route = "home" }: { dict: Dictionary; locale: Locale; route?: RouteKey }) {
  const f = dict.footer;
  const other = otherLocale(locale);
  const year = 2026;
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-6 pt-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div className="grid content-start gap-2">
          <p className="font-display text-xl font-bold tracking-[-0.02em]">{site.name}</p>
          <p className="text-sm text-ink-2">{f.tagline}</p>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <p className="font-semibold">{f.contact}</p>
          <a href={emailUrl} className="w-fit text-ink-2 transition-colors hover:text-ink">
            {site.email}
          </a>
          <a href={phoneUrl} className="w-fit text-ink-2 tabular-nums transition-colors hover:text-ink">
            {site.phoneDisplay}
          </a>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <Link href={routes.privacy[locale]} className="w-fit text-ink-2 transition-colors hover:text-ink">
            {f.privacy}
          </Link>
          <ConsentSettingsLink label={f.cookies} />
        </div>
        <div className="grid content-start gap-2 text-sm">
          <p className="font-semibold">{f.language}</p>
          <p className="flex gap-3">
            <span aria-current="true" className="font-semibold text-ink">
              {locale === "et" ? "Eesti" : "English"}
            </span>
            <Link href={routes[route][other]} hrefLang={other} lang={other} className="text-ink-2 underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink">
              {other === "et" ? "Eesti" : "English"}
            </Link>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <p className="border-t border-line py-5 text-xs text-ink-2">
          © {year} {site.name}. {f.rights}
        </p>
        <div className="@container">
          <p aria-hidden="true" className="footer-mark select-none whitespace-nowrap font-display font-extrabold text-leaf">
            lehesepp
          </p>
        </div>
      </div>
    </footer>
  );
}
