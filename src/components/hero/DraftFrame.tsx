"use client";

import { useId, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/i18n";
import type { DemoTypeKey } from "@/i18n/dictionaries/et";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { SampleSite } from "@/components/samples/Samples";

type Demo = Dictionary["hero"]["demo"];

const typeKeys: DemoTypeKey[] = ["cafe", "salon", "auto", "build", "general"];
const swap = { duration: 0.32, ease: [0.23, 1, 0.32, 1] as const };

export function DraftFrame({ demo, initialType = "cafe" }: { demo: Demo; initialType?: DemoTypeKey }) {
  const [type, setType] = useState<DemoTypeKey>(initialType);
  const [name, setName] = useState("");
  const [warm, setWarm] = useState(false);
  const reduce = useReducedMotion();
  const inputId = useId();
  const groupId = useId();

  const t = demo.types[type];
  const title = name.trim() || t.sample;

  return (
    <div role="group" aria-label={demo.region} className="relative w-full">
      <p className="font-display text-xl font-bold leading-snug tracking-[-0.015em] text-ink sm:text-2xl text-balance">{demo.intro}</p>
      <div className="mt-5 grid gap-5">
        <div className="grid content-start gap-2">
          <label htmlFor={inputId} className="flex items-center gap-2.5 text-base font-semibold text-ink">
            <StepNumber n={1} />
            {demo.inputLabel}
          </label>
          <input
            id={inputId}
            type="text"
            value={name}
            maxLength={40}
            autoComplete="off"
            placeholder={demo.inputPlaceholder}
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-full rounded-[var(--radius-frame)] border border-line-strong bg-paper px-3.5 text-base text-ink placeholder:text-ink-2 transition-[border-color] duration-150 hover:border-ink focus-visible:border-ink focus-visible:outline-offset-2"
          />
        </div>
        {/* The other samples' typefaces load as soon as someone reaches for the type buttons. */}
        <fieldset className="min-w-0" onPointerEnter={() => setWarm(true)} onFocus={() => setWarm(true)}>
          <legend className="mb-2 flex items-center gap-2.5 text-base font-semibold text-ink">
            <StepNumber n={2} />
            {demo.typesLabel}
          </legend>
          <div className="flex flex-wrap gap-2">
            {typeKeys.map((key) => (
              <label key={key} className="press relative cursor-pointer">
                <input
                  type="radio"
                  name={groupId}
                  value={key}
                  checked={type === key}
                  onChange={() => setType(key)}
                  className="peer sr-only"
                />
                <span className="flex h-11 items-center rounded-[var(--radius-frame)] border border-line-strong px-3.5 text-sm font-semibold text-ink transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--focus)] [@media(hover:hover)]:hover:border-ink">
                  {demo.types[key].label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="relative mt-6 h-[480px] overflow-hidden rounded-[var(--radius-frame)] border border-line-strong sm:h-[410px]">
          <AnimatePresence initial={false}>
            <m.div
              key={type}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
              transition={reduce ? { duration: 0.15 } : swap}
            >
              <SampleSite type={type} name={title} t={t} priority={type === initialType} />
            </m.div>
          </AnimatePresence>
      </div>
      <p className="mt-4 flex items-start gap-2.5 text-base leading-snug text-ink">
        <InfoIcon size={22} weight="bold" aria-hidden="true" className="mt-px shrink-0 text-leaf-ink" />
        {demo.note}
      </p>

      {warm && (
        <span aria-hidden="true" className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
          <span className="font-[family-name:var(--font-salon)]">a</span>
          <span className="font-[family-name:var(--font-salon)] italic">a</span>
          <span className="font-[family-name:var(--font-auto)] font-extrabold">a</span>
          <span className="font-[family-name:var(--font-build)] font-extrabold">a</span>
        </span>
      )}
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-leaf text-sm font-bold text-on-leaf">
      {n}
    </span>
  );
}
