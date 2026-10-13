"use client";

import { useEffect, useState } from "react";

/** Shows how long this very page took to load on the visitor's device.
 *  Real measurement from the Navigation Timing API, never a made-up number. */
export function LoadTime({ locale, measuring, unit }: { locale: string; measuring: string; unit: string }) {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const read = () => {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const end = nav && nav.loadEventEnd > 0 ? nav.loadEventEnd : nav?.domContentLoadedEventEnd;
      if (end && end > 0) setSeconds(end / 1000);
    };
    if (document.readyState === "complete") read();
    else window.addEventListener("load", () => setTimeout(read, 0), { once: true });
  }, []);

  const fmt = new Intl.NumberFormat(locale === "et" ? "et-EE" : "en-GB", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <p className="flex items-baseline gap-2" aria-live="polite">
      <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em] tabular-nums">
        {seconds === null ? "…" : fmt.format(Math.max(0.1, seconds))}
      </span>
      <span className="text-base font-medium text-ink-2">{seconds === null ? measuring : unit}</span>
    </p>
  );
}
