import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { routes, otherLocale, type Locale } from "@/i18n/config";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";

/** route: the page's key in `routes`, or null for a page without a translation (e.g. industry pages).
 *  localContact: the page has its own #kontakt section. */
export function Header({
  locale,
  dict,
  route = "home",
  localContact = false,
}: {
  locale: Locale;
  dict: Dictionary;
  route?: keyof typeof routes | null;
  localContact?: boolean;
}) {
  const home = routes.home[locale];
  const anchor = (id: string) => (route === "home" ? `#${id}` : `${home}#${id}`);
  const links = [
    { href: anchor("hinnad"), label: dict.nav.pricing },
    { href: anchor("naidised"), label: dict.nav.samples },
    { href: anchor("protsess"), label: dict.nav.process },
    { href: anchor("kkk"), label: dict.nav.faq },
  ];
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md supports-[not(backdrop-filter:blur(1px))]:bg-paper">
      <a
        href="#sisu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-40 focus:rounded-[var(--radius-frame)] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        {dict.nav.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href={home} aria-label={dict.nav.home} className="press -m-2 rounded-[var(--radius-frame)] p-2 text-lg text-ink">
          <Logo />
        </Link>
        <nav aria-label={dict.nav.label} className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link rounded-[var(--radius-frame)] px-3 py-2 text-sm font-medium text-ink-2 transition-colors duration-150 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={routes[route ?? "home"][other]}
            hrefLang={other}
            lang={other}
            className="press flex h-10 min-w-10 items-center justify-center rounded-[var(--radius-frame)] px-2 text-sm font-semibold text-ink-2 transition-colors duration-150 hover:bg-paper-2 hover:text-ink"
          >
            <span>{dict.nav.languageShort}</span>
            <span className="sr-only">, {dict.nav.language}</span>
          </Link>
          <ButtonLink href={localContact ? "#kontakt" : anchor("kontakt")} size="sm">
            {dict.nav.cta}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
