import { ArrowDownIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { DraftFrame } from "@/components/hero/DraftFrame";

export function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-10 lg:pb-28 lg:pt-14">
      <h1
        id="hero-title"
        className="font-display text-[clamp(2.15rem,8.2vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-ink"
      >
        <span className="block">{h.titleA}</span>
        <span className="block text-leaf-ink">{h.titleB}</span>
      </h1>

      <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-8 lg:pt-8">
          <p className="max-w-[34ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{h.sub}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#kontakt">
              {h.cta}
              <ArrowRightIcon size={18} weight="bold" aria-hidden="true" className="transition-transform duration-200 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#protsess" variant="secondary">
              {h.secondary}
              <ArrowDownIcon size={18} weight="bold" aria-hidden="true" className="transition-transform duration-200 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/btn:translate-y-0.5" />
            </ButtonLink>
          </div>
        </div>
        <div>
          <DraftFrame demo={h.demo} />
        </div>
      </div>
    </section>
  );
}
