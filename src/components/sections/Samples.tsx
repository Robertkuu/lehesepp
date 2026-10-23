import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";

export function Samples({ dict }: { dict: Dictionary }) {
  const s = dict.samples;
  return (
    <section id="naidised" aria-labelledby="naidised-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <h2 id="naidised-title" className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {s.title}
      </h2>
      <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{s.sub}</p>
      <ul className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-8">
        {s.work.map((w) => (
          <li key={w.url}>
            <a href={w.url} target="_blank" rel="noopener" className="group block">
              <div className="relative aspect-[1280/820] overflow-hidden rounded-[var(--radius-frame)] border border-line-strong">
                <Image
                  src={w.img}
                  alt={w.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 flex items-center gap-2 text-lg font-semibold">
                {w.name}
                <span className="text-ink-2">{w.url.replace("https://", "")}</span>
                <ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" className="text-ink-2 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
            </a>
            <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink-2 text-pretty">{w.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
