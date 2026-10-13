import type { CSSProperties } from "react";
import { BrowserIcon, ArrowsClockwiseIcon, WrenchIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { InView } from "@/components/motion/InView";

const icons = { new: BrowserIcon, redesign: ArrowsClockwiseIcon, care: WrenchIcon, google: MapPinIcon } as const;

export function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;
  return (
    <section id="teenused" aria-labelledby="teenused-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <h2 id="teenused-title" className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {s.title}
      </h2>
      <InView as="ul" className="index-list mt-12 lg:mt-16">
        {s.items.map((item, i) => {
          const Icon = icons[item.key as keyof typeof icons];
          return (
            <li key={item.key} className="index-row relative grid gap-3 py-7 sm:py-9 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10" style={{ "--i": i } as CSSProperties}>
              <span className="index-rule" aria-hidden="true" />
              <h3 className="index-text flex items-center gap-4 font-display text-[clamp(1.6rem,3.6vw,2.75rem)] font-bold leading-[1.02] tracking-[-0.03em]">
                <Icon size={30} weight="duotone" aria-hidden="true" className="shrink-0 text-leaf-ink" />
                {item.title}
              </h3>
              <p className="index-text max-w-[46ch] text-base leading-relaxed text-ink-2 sm:text-lg md:pt-1.5 text-pretty">{item.body}</p>
            </li>
          );
        })}
      </InView>
    </section>
  );
}
