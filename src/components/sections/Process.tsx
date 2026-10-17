import { ClockIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { ProcessLine } from "@/components/process/ProcessLine";

export function Process({ dict }: { dict: Dictionary }) {
  const p = dict.process;
  return (
    <section id="protsess" aria-labelledby="protsess-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <h2 id="protsess-title" className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {p.title}
      </h2>
      <p className="mt-6 flex w-fit items-center gap-2.5 rounded-[var(--radius-frame)] bg-leaf px-3.5 py-2 text-base font-semibold text-on-leaf">
        <ClockIcon size={20} weight="bold" aria-hidden="true" />
        {p.time}
      </p>
      <ProcessLine steps={p.steps} />
    </section>
  );
}
