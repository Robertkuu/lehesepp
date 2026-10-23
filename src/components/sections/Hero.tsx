import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { WorkShowcase } from "@/components/hero/WorkShowcase";
import { formatPrice, fromPrice } from "@/content/pricing";

export function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-10 lg:pb-28 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-7">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.2rem,7vw,4.25rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink text-balance"
          >
            {h.title} <span className="whitespace-nowrap text-leaf-ink">{h.from} {formatPrice(fromPrice)}</span>
          </h1>
          <p className="max-w-[38ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{h.sub}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#kontakt">
              {h.cta}
              <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#hinnad" variant="secondary">
              {h.secondary}
            </ButtonLink>
          </div>
          <ul className="grid gap-2 text-base font-medium text-ink">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <CheckIcon size={20} weight="bold" aria-hidden="true" className="shrink-0 text-leaf-ink" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <WorkShowcase dict={dict} />
      </div>
    </section>
  );
}
