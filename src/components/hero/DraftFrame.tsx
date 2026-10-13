"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/i18n";
import type { DemoTypeKey } from "@/i18n/dictionaries/et";
import { SampleSite } from "@/components/samples/Samples";

type Demo = Dictionary["hero"]["demo"];

const typeKeys: DemoTypeKey[] = ["cafe", "salon", "auto", "build", "general"];
const swap = { duration: 0.32, ease: [0.23, 1, 0.32, 1] as const };

export function DraftFrame({ demo }: { demo: Demo }) {
  const [type, setType] = useState<DemoTypeKey>("cafe");
  const [name, setName] = useState("");
  // The wireframe intro plays once, on the first sample only.
  const [intro, setIntro] = useState(true);
  const [warm, setWarm] = useState(false);
  const reduce = useReducedMotion();
  const inputId = useId();
  const groupId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setIntro(false), 1700);
    return () => window.clearTimeout(t);
  }, []);

  // Live dimension line: the frame reports its own real width, like a drawing.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const t = demo.types[type];
  const title = name.trim() || t.sample;

  return (
    <div role="group" aria-label={demo.region} className="relative w-full">
      <div className="grid gap-4">
        <div className="grid gap-1.5">
          <label htmlFor={inputId} className="text-sm font-medium text-ink">
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
            className="h-11 w-full rounded-[var(--radius-frame)] border border-line-strong bg-paper px-3 text-base text-ink placeholder:text-ink-2 transition-[border-color] duration-150 hover:border-ink focus-visible:border-ink focus-visible:outline-offset-2"
          />
        </div>
        {/* The other samples' typefaces load as soon as someone reaches for the type buttons. */}
        <fieldset className="min-w-0" onPointerEnter={() => setWarm(true)} onFocus={() => setWarm(true)}>
          <legend className="sr-only">{demo.typesLabel}</legend>
          <div className="flex flex-wrap gap-1.5">
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
                <span className="flex h-11 items-center rounded-[var(--radius-frame)] border border-line-strong px-3 text-sm font-medium text-ink-2 transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--focus)] [@media(hover:hover)]:hover:text-ink [@media(hover:hover)]:peer-checked:hover:text-paper">
                  {demo.types[key].label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Drafting marks: a dimension line that measures the frame for real. */}
      <div className="mt-6 flex items-center gap-2 text-[11px] font-medium tabular-nums text-ink-2" aria-hidden="true">
        <span className="h-2.5 w-px bg-line-strong" />
        <span className="h-px flex-1 bg-line-strong" />
        <span>{width ? `${width} px` : " "}</span>
        <span className="h-px flex-1 bg-line-strong" />
        <span className="h-2.5 w-px bg-line-strong" />
      </div>

      <div ref={frameRef} className="draft-frame relative mt-2">
        <span className="crop crop-tl" aria-hidden="true" />
        <span className="crop crop-tr" aria-hidden="true" />
        <span className="crop crop-bl" aria-hidden="true" />
        <span className="crop crop-br" aria-hidden="true" />

        <div className="relative h-[480px] overflow-hidden rounded-[var(--radius-frame)] border border-line-strong sm:h-[410px]">
          <AnimatePresence initial={false}>
            <m.div
              key={type}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
              transition={reduce ? { duration: 0.15 } : swap}
            >
              <SampleSite type={type} name={title} t={t} intro={intro && type === "cafe" && !reduce} priority={type === "cafe"} />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-2">{demo.note}</p>

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
