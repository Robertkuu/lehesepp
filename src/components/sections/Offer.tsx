import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { DraftCompare } from "@/components/offer/DraftCompare";

export function Offer({ dict }: { dict: Dictionary }) {
  const o = dict.offer;
  const cafe = dict.hero.demo.types.cafe;
  return (
    <section id="eelvaade" aria-labelledby="offer-title" className="bg-leaf text-on-leaf">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <h2 id="offer-title" className="font-display text-[clamp(2.4rem,7.4vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.038em] text-balance">
          <span className="block">{o.titleA}</span>
          <span className="block">{o.titleB}</span>
        </h2>
        <div className="mt-12 lg:mt-16">
          <DraftCompare sample={cafe} draftLabel={o.draft} doneLabel={o.done} />
        </div>
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <p className="max-w-[48ch] text-lg leading-relaxed text-on-leaf-2 sm:text-xl text-pretty">{o.body}</p>
          <ul className="grid content-start gap-4 sm:grid-cols-3 sm:gap-6">
            {o.facts.map((f) => (
              <li key={f} className="flex items-start gap-3 border-t border-on-leaf/30 pt-4 text-base font-semibold leading-snug">
                <CheckIcon size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
