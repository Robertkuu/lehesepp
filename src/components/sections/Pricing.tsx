import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { ButtonLink } from "@/components/ui/Button";
import { formatPrice, packages, prices, type PackageKey } from "@/content/pricing";

const order: PackageKey[] = ["basic", "pro"];

export function Pricing({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.pricing;
  return (
    <section id="hinnad" aria-labelledby="hinnad-title" className="bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 id="hinnad-title" className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
          {p.title}
        </h2>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{p.sub}</p>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {order.map((key) => {
            const pkg = packages[locale][key];
            const price = prices[key];
            const featured = Boolean(pkg.badge);
            return (
              <li
                key={key}
                className={`relative flex flex-col rounded-[var(--radius-frame)] bg-paper p-7 sm:p-10 lg:p-12 ${featured ? "border-2 border-leaf" : "border border-line-strong"}`}
              >
                {pkg.badge && (
                  <span className="absolute -top-4 left-7 rounded-full bg-leaf px-4 py-1.5 text-base font-bold text-on-leaf sm:left-10 lg:left-12">{pkg.badge}</span>
                )}
                <h3 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{pkg.name}</h3>
                <p className="mt-3 max-w-[40ch] text-lg leading-relaxed text-ink-2 text-pretty">{pkg.description}</p>
                {price === null ? (
                  <p className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">{pkg.priceLabel}</p>
                ) : (
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-xl text-ink-2">{pkg.priceLabel}</span>
                    <span className="font-display text-6xl font-extrabold tracking-[-0.03em] sm:text-7xl">{formatPrice(price)}</span>
                  </p>
                )}
                <ul className="mt-8 grid gap-4 border-t border-line pt-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-lg leading-snug">
                      <CheckIcon size={22} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-leaf-ink" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="min-h-10 flex-1" />
                <ButtonLink href="#kontakt" variant={featured ? "primary" : "secondary"} className="h-14 w-full text-lg">
                  {pkg.cta}
                  <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
                </ButtonLink>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-xl font-semibold text-ink">
          {p.free} {p.payLater}
        </p>
      </div>
    </section>
  );
}
