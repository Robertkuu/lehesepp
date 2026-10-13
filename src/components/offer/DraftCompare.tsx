"use client";

import { useRef } from "react";
import { ArrowsLeftRightIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { CafeWireframe, SampleSite, type SampleTexts } from "@/components/samples/Samples";
import { m, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";

/** The same café site twice: as a wireframe draft and finished. Scroll wipes
 *  the draft away; the visitor can drag (or arrow-key) the seam themselves.
 *  Touch drags only start on the seam, so scrolling past on a phone never moves it. */
export function DraftCompare({ sample, draftLabel, doneLabel }: { sample: SampleTexts; draftLabel: string; doneLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const touched = useRef(false);
  const drag = useRef<number | null>(null);
  const reduce = useReducedMotion();
  const pos = useMotionValue(reduce ? 50 : 90);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 45%"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (touched.current || reduce) return;
    pos.set(90 - v * 54);
  });

  // Keep the keyboard input on the seam, wherever scroll or a drag put it.
  useMotionValueEvent(pos, "change", (p) => {
    if (input.current) input.current.value = String(Math.round(p));
  });

  const seek = (clientX: number) => {
    const r = frame.current!.getBoundingClientRect();
    touched.current = true;
    pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const r = frame.current!.getBoundingClientRect();
    const seam = r.left + (r.width * pos.get()) / 100;
    // A mouse can grab anywhere; a finger has to land on the seam.
    if (e.pointerType !== "mouse" && Math.abs(e.clientX - seam) > 32) return;
    drag.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
    seek(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current === e.pointerId) seek(e.clientX);
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current === e.pointerId) drag.current = null;
  };

  const clip = useTransform(pos, (p) => `inset(0 0 0 ${p}%)`);
  // The seam layer spans the frame, so translateX(%) is relative to the frame width: GPU-only, no layout.
  const seamX = useTransform(pos, (p) => `translateX(${p}%)`);

  return (
    <div ref={ref} className="relative select-none">
      <div
        ref={frame}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="compare-frame relative cursor-ew-resize overflow-hidden rounded-[var(--radius-frame)] border border-on-leaf/25 shadow-[0_24px_60px_-28px_rgb(10_40_20/0.55)]"
      >
        <div className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/7.5]">
          <CafeWireframe />
        </div>
        <m.div className="absolute inset-0" style={{ clipPath: clip }} aria-hidden="true">
          <SampleSite type="cafe" name={sample.sample} t={sample} />
        </m.div>

        {/* Seam */}
        <m.div className="pointer-events-none absolute inset-0" style={{ transform: seamX }} aria-hidden="true">
          <div className="absolute inset-y-0 -left-px w-0.5 bg-on-leaf" />
          <div className="absolute left-0 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-on-leaf text-leaf shadow-[0_6px_18px_-6px_rgb(0_0_0/0.5)]">
            <ArrowsLeftRightIcon size={20} weight="bold" aria-hidden="true" />
          </div>
        </m.div>


        {/* Keyboard only: pointers are handled on the frame. */}
        <input
          ref={input}
          type="range"
          min={0}
          max={100}
          step={1}
          defaultValue={reduce ? 50 : 90}
          aria-label={`${draftLabel} / ${doneLabel}`}
          onInput={(e) => {
            touched.current = true;
            pos.set(Number((e.target as HTMLInputElement).value));
          }}
          className="compare-range pointer-events-none absolute inset-0 h-full w-full opacity-0"
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-sm font-semibold" aria-hidden="true">
        <span className="flex items-center gap-1.5">
          <ArrowLeftIcon size={16} weight="bold" />
          {draftLabel}
        </span>
        <span className="flex items-center gap-1.5">
          {doneLabel}
          <ArrowRightIcon size={16} weight="bold" />
        </span>
      </div>
    </div>
  );
}
