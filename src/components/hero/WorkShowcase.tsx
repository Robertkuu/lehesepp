import Image from "next/image";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";

// Three real client sites, overlapped like open browser windows.
export function WorkShowcase({ dict, href = "#naidised" }: { dict: Dictionary; href?: string }) {
  const [front, back, middle] = dict.samples.work;
  return (
    <a href={href} className="group block" aria-label={`${dict.samples.title}: ${front.name}, ${middle.name}, ${back.name}`}>
      <div className="relative aspect-[3/2]">
        <Shot w={back} className="absolute right-0 top-0 w-[76%] opacity-80" />
        <div className="absolute left-[12%] top-[13.5%] w-[76%] transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5">
          <Shot w={middle} className="shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]" />
        </div>
        <div className="absolute bottom-0 left-0 w-[76%] transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-1">
          <Shot w={front} priority className="shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]" />
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 text-base font-semibold text-ink-2 transition-colors duration-150 group-hover:text-ink">
        {front.name} · {middle.name} · {back.name}
        <ArrowDownIcon size={16} weight="bold" aria-hidden="true" className="shrink-0" />
      </p>
    </a>
  );
}

function Shot({ w, priority, className = "" }: { w: Dictionary["samples"]["work"][number]; priority?: boolean; className?: string }) {
  return (
    <div className={`relative aspect-[1280/820] overflow-hidden rounded-[var(--radius-frame)] border border-line-strong bg-paper ${className}`}>
      <Image src={w.img} alt="" fill sizes="(min-width: 1024px) 50vw, 90vw" priority={priority} className="object-cover object-top" />
    </div>
  );
}
