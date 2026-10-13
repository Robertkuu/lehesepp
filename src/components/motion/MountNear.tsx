"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Renders children only once the slot gets near the viewport, so content far down
 *  the page (and the typefaces it uses) does not compete with the first view. */
export function MountNear({ children, className, margin = "400px" }: { children: ReactNode; className?: string; margin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return (
    <div ref={ref} className={className}>
      {near ? children : null}
    </div>
  );
}
