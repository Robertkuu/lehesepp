"use client";

import type { ReactNode } from "react";
import { LazyMotion } from "motion/react";

// Animation features (including layout animations) load after first paint.
const loadFeatures = () => import("./features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
