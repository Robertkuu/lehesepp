import type { Dictionary } from "@/i18n";
import type { DemoTypeKey } from "@/i18n/dictionaries/et";
import { SampleSite } from "@/components/samples/Samples";
import { MountNear } from "@/components/motion/MountNear";

const shown: DemoTypeKey[] = ["cafe", "salon", "auto", "build"];

export function Samples({ dict }: { dict: Dictionary }) {
  const s = dict.samples;
  const types = dict.hero.demo.types;
  return (
    <section id="naidised" aria-labelledby="naidised-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <h2 id="naidised-title" className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {s.title}
      </h2>
      <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{s.sub}</p>
      <ul className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-8">
        {shown.map((key) => (
          <li key={key}>
            <figure>
              {/* Each sample loads its own typeface and photo, so it mounts only near the viewport. */}
              <div role="img" aria-label={`${s.badge}: ${types[key].label}`}>
                <MountNear className="relative h-[480px] overflow-hidden rounded-[var(--radius-frame)] border border-line-strong">
                  <SampleSite type={key} name={types[key].sample} t={types[key]} />
                </MountNear>
              </div>
              <figcaption className="mt-3 flex items-center gap-3 text-lg font-semibold">
                <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-sm font-semibold text-ink-2">{s.badge}</span>
                {types[key].label}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
