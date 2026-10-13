import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const base =
  "press group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-frame)] font-semibold";
const variants: Record<Variant, string> = {
  primary: "bg-leaf text-on-leaf hover:bg-leaf-hover",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-paper-2",
};
const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[15px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <a className={`${buttonClass(variant, size)} ${className}`} {...props}>
      {children}
    </a>
  );
}
