import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";

export function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  return (
    <section id="kkk" aria-labelledby="kkk-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <h2 id="kkk-title" className="font-display text-[clamp(2.25rem,5.4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance lg:sticky lg:top-28 lg:self-start">
          {f.title}
        </h2>
        <div className="border-t border-line-strong">
          {f.items.map((item) => (
            <details key={item.q} name="kkk" className="faq group border-b border-line-strong">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-display text-xl font-bold leading-snug tracking-[-0.015em] transition-colors duration-150 hover:text-leaf-ink sm:text-2xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon
                  size={22}
                  weight="bold"
                  aria-hidden="true"
                  className="mt-1 shrink-0 transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[60ch] pb-7 pr-10 text-base leading-relaxed text-ink-2 sm:text-lg text-pretty">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
