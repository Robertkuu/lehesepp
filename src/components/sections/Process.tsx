import type { Dictionary } from "@/i18n";
import { ProcessLine } from "@/components/process/ProcessLine";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="protsess" aria-labelledby="protsess-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <h2 id="protsess-title" className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {dict.process.title}
      </h2>
      <ProcessLine steps={dict.process.steps} />
    </section>
  );
}
