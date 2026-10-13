import Image from "next/image";
import { ChatCircleDotsIcon, MapTrifoldIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { InView } from "@/components/motion/InView";

const factIcons = [ChatCircleDotsIcon, MapTrifoldIcon, LightningIcon];

export function About({ dict }: { dict: Dictionary }) {
  const a = dict.about;
  return (
    <section id="minust" aria-labelledby="about-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <InView className="about-photo-wrap w-full max-w-[300px] md:max-w-[460px]">
          <div className="about-photo relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-frame)] bg-paper-3">
            <Image src="/robert.webp" alt={a.photoAlt} fill sizes="(min-width: 768px) 460px, 300px" className="object-cover" />
          </div>
        </InView>
        <div>
          <h2 id="about-title" className="font-display text-[clamp(2.25rem,5.4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance">
            {a.title}
          </h2>
          <div className="mt-6 grid max-w-[54ch] gap-4 text-lg leading-relaxed text-ink-2 sm:text-xl">
            {a.body.map((p) => (
              <p key={p} className="text-pretty">{p}</p>
            ))}
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {a.facts.map((f, i) => {
              const Icon = factIcons[i];
              return (
                <li key={f} className="flex items-center gap-3 text-base font-semibold sm:flex-col sm:items-start">
                  <Icon size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-leaf-ink" />
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
