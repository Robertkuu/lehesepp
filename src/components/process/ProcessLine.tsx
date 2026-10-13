"use client";

import { useRef, useState } from "react";
import { m, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

type Step = { title: string; body: string };

/** Four steps on one unbroken line. A single marker travels the line as the
 *  section scrolls past; steps it has reached switch from pencil to ink. */
export function ProcessLine({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const [reached, setReached] = useState(reduce ? steps.length : 1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    const n = Math.min(steps.length, Math.floor(v * (steps.length - 1) + 0.15) + 1);
    setReached((r) => (r === n ? r : n));
  });

  // Marker position along the line: horizontal on desktop, vertical on phones (CSS picks the axis).
  const fill = useTransform(progress, (v) => (reduce ? 1 : v));

  return (
    <div className="process relative mt-12 pl-10 lg:mt-16 lg:pl-0 lg:pt-12">
      <div className="process-track" aria-hidden="true">
        <m.div className="process-fill" style={{ "--fill": fill } as React.CSSProperties} />
      </div>
      <ol ref={ref} className="grid gap-10 lg:grid-cols-4 lg:gap-8">
      {steps.map((step, i) => {
        const on = i < reached;
        return (
          <li key={step.title} className="relative" data-on={on}>
            <span className="process-node" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] transition-colors duration-300 sm:text-[1.75rem]">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-ink-2 text-pretty">{step.body}</p>
          </li>
        );
      })}
      </ol>
    </div>
  );
}
