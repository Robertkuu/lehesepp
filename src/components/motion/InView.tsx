"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";

/**
 * Marks an element with data-inview="true" once it scrolls into view.
 * The actual motion lives in CSS so it runs off the main thread and
 * collapses cleanly under prefers-reduced-motion.
 */
export function InView<T extends ElementType = "div">({
  as,
  children,
  threshold = 0.25,
  ...props
}: { as?: T; children: ReactNode; threshold?: number } & Omit<ComponentPropsWithoutRef<T>, "as" | "children">) {
  const ref = useRef<HTMLElement>(null);
  // Content is visible by default (SSR, no JS). Only once we know an element
  // is below the fold do we hide it, so it can enter when scrolled to.
  const [state, setState] = useState<"idle" | "hidden" | "seen">("idle");
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("seen");
          io.disconnect();
        } else {
          setState((s) => (s === "idle" ? "hidden" : s));
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} data-inview={state === "idle" ? undefined : state} {...props}>
      {children}
    </Tag>
  );
}
