import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import type { DemoTypeKey } from "@/i18n/dictionaries/et";

// Sample websites shown inside the demos. Each is a small, real layout with its own
// typeface, palette and composition, built with container queries so the same
// component works in the hero frame, the offer comparison and the phone mockup.

export type SampleTexts = Dictionary["hero"]["demo"]["types"][DemoTypeKey];

type Props = { name: string; t: SampleTexts; intro?: boolean; priority?: boolean };

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** On first load the hero draws each block as a wireframe, then fills it in. */
function draft(intro: boolean | undefined, i: number) {
  return intro ? { className: "draft-block", style: { "--i": i } as CSSProperties } : { className: "", style: undefined };
}

const imgSizes = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 90vw";

export function SampleSite({ type, ...props }: Props & { type: DemoTypeKey }) {
  switch (type) {
    case "cafe":
      return <Cafe {...props} />;
    case "salon":
      return <Salon {...props} />;
    case "auto":
      return <Auto {...props} />;
    case "build":
      return <Build {...props} />;
    case "general":
      return <General {...props} />;
  }
}

function Cafe({ name, t, intro, priority }: Props) {
  const d = (i: number) => draft(intro, i);
  return (
    <div className="@container h-full" style={{ "--s-bg": "#f3ece2", "--s-muted": "#8a7462" } as CSSProperties}>
      <div className="flex h-full flex-col bg-[#f3ece2] p-5 text-[#2a1a10] @xl:p-7">
        <header className={cx(d(0).className, "flex items-baseline justify-between gap-4")} style={d(0).style}>
          <span className="truncate font-[family-name:var(--font-cafe)] text-lg font-semibold">{name}</span>
          <nav className="hidden gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6e5646] @sm:flex">
            {t.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
        </header>
        <div className="mt-4 grid min-h-0 flex-1 grid-rows-[auto_minmax(120px,1fr)] gap-5 @xl:mt-6 @xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] @xl:grid-rows-1 @xl:gap-8">
          <div className="flex min-h-0 flex-col justify-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8c3b22]">{t.info}</p>
            <p
              className={cx(d(2).className, "mt-2 line-clamp-2 break-words font-[family-name:var(--font-cafe)] text-[clamp(2.1rem,10cqw,4.6rem)] font-semibold leading-[0.92] pb-[0.12em]")}
              style={d(2).style}
            >
              {name}
            </p>
            <p className={cx(d(3).className, "mt-3 max-w-[30ch] text-[13px] leading-relaxed text-[#5c4636]")} style={d(3).style}>
              {t.tagline}
            </p>
            <div className={cx(d(4).className, "mt-5 flex items-center gap-4")} style={d(4).style}>
              <span className="rounded-full bg-[#8c3b22] px-4 py-2 text-xs font-medium tracking-wide text-[#fbf5ee]">{t.cta}</span>
              <span className="border-b border-[#2a1a10]/40 pb-0.5 text-xs">{t.nav[0]}</span>
            </div>
          </div>
          <div className="relative min-h-0">
            <div className="absolute inset-0 overflow-hidden rounded-[6px]">
              <Image src="/demo/cafe.jpg" alt="" fill sizes={imgSizes} quality={70} loading={priority ? "eager" : "lazy"} className="object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 w-[150px] rounded-[6px] bg-[#fbf7f1] p-3 shadow-[0_12px_30px_-14px_rgb(42_26_16/0.55)] @xl:-left-6 @xl:bottom-5 @xl:w-[170px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8c3b22]">{t.listLabel}</p>
              <ul className="mt-1.5 grid gap-0.5 font-[family-name:var(--font-cafe)] text-[15px] leading-snug">
                {t.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Salon({ name, t, intro }: Props) {
  const d = (i: number) => draft(intro, i);
  return (
    <div className="@container h-full" style={{ "--s-bg": "#f2e8e5", "--s-muted": "#7b6168" } as CSSProperties}>
      <div className="flex h-full flex-col bg-[#f2e8e5] p-5 text-[#2b1d22] @xl:p-7">
        <header className={cx(d(0).className, "flex items-center justify-between gap-4")} style={d(0).style}>
          <span className="truncate font-[family-name:var(--font-salon)] text-lg italic">{name}</span>
          <nav className="hidden gap-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6e5560] @sm:flex">
            {t.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
        </header>
        <div className="mt-4 grid min-h-0 flex-1 grid-rows-[minmax(100px,1fr)_auto] gap-4 @[18rem]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] @[18rem]:grid-rows-1 @xl:mt-6 @xl:gap-8">
          <div className={cx(d(1).className, "relative min-h-0 overflow-hidden rounded-b-[6px] rounded-t-[999px]")} style={d(1).style}>
            <Image src="/demo/salon.jpg" alt="" fill sizes={imgSizes} quality={70} className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7f3350]">{t.info}</p>
            <p
              className={cx(d(2).className, "mt-2 line-clamp-3 break-words font-[family-name:var(--font-salon)] text-[clamp(1.6rem,8cqw,3.6rem)] leading-[1] pb-[0.12em]")}
              style={d(2).style}
            >
              {name}
            </p>
            <p className={cx(d(3).className, "mt-3 max-w-[28ch] text-[13px] leading-relaxed text-[#5f4952]")} style={d(3).style}>
              {t.tagline}
            </p>
            <div className={cx(d(4).className, "mt-4")} style={d(4).style}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6e5560]">{t.listLabel}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {t.list.map((slot, i) => (
                  <span
                    key={slot}
                    className={cx(
                      "rounded-full border px-2.5 py-1 text-[11px] tabular-nums",
                      i === 1 ? "border-[#7f3350] bg-[#7f3350] text-[#fbf3f6]" : "border-[#2b1d22]/25",
                    )}
                  >
                    {slot}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 border-b border-[#2b1d22] pb-0.5 text-xs font-semibold tracking-wide">
                {t.cta}
                <ArrowRightIcon size={12} weight="bold" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Auto({ name, t, intro }: Props) {
  const d = (i: number) => draft(intro, i);
  return (
    <div className="@container h-full" style={{ "--s-bg": "#111315", "--s-muted": "#9aa3ab" } as CSSProperties}>
      <div className="relative h-full overflow-hidden bg-[#111315] text-[#eef0f2]">
        <Image src="/demo/auto.jpg" alt="" fill sizes={imgSizes} quality={70} className="object-cover" />
        {/* Scrim so the copy stays readable over the photo. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#111315_42%,rgb(17_19_21/0.6)_72%,rgb(17_19_21/0.25))] @xl:bg-[linear-gradient(to_right,#111315_36%,rgb(17_19_21/0.6)_62%,rgb(17_19_21/0.1))]" />
        <div className="relative flex h-full flex-col p-5 @xl:p-7">
          <header className={cx(d(0).className, "flex items-center justify-between gap-3")} style={d(0).style}>
            <span className="flex min-w-0 items-center gap-2 font-[family-name:var(--font-auto)] text-base font-extrabold uppercase tracking-[0.04em]">
              <span className="size-2.5 shrink-0 bg-[#f5b301]" />
              <span className="truncate">{name}</span>
            </span>
            <span className="shrink-0 rounded-[3px] bg-[#f5b301] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111315]">{t.info}</span>
          </header>
          <div className="mt-auto max-w-[34rem]">
            <p
              className={cx(d(2).className, "line-clamp-3 break-words font-[family-name:var(--font-auto)] text-[clamp(2.4rem,10cqw,5rem)] font-extrabold uppercase leading-[0.86] pb-[0.12em]")}
              style={d(2).style}
            >
              {name}
            </p>
            <p className={cx(d(3).className, "mt-3 max-w-[30ch] text-[13px] leading-relaxed text-[#c9ced3]")} style={d(3).style}>
              {t.tagline}
            </p>
            <div className={cx(d(4).className, "mt-4")} style={d(4).style}>
              <span className="inline-block rounded-[3px] bg-[#f5b301] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#111315]">{t.cta}</span>
            </div>
          </div>
          <ul className={cx(d(1).className, "mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-3")} style={d(1).style}>
            {t.list.map((s, i) => (
              <li key={s} className="text-[11px] leading-tight text-[#c9ced3]">
                <span className="block font-[family-name:var(--font-auto)] text-sm font-bold text-[#f5b301]">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Build({ name, t, intro }: Props) {
  const d = (i: number) => draft(intro, i);
  const wide = "font-[family-name:var(--font-build)] [font-variation-settings:'wdth'_125]";
  return (
    <div className="@container h-full" style={{ "--s-bg": "#ebeae6", "--s-muted": "#5f5a53" } as CSSProperties}>
      <div className="flex h-full flex-col bg-[#ebeae6] p-5 text-[#1c1b19] @xl:p-7">
        <header className={cx(d(0).className, "flex items-center justify-between gap-4 border-b border-[#1c1b19]/20 pb-3")} style={d(0).style}>
          <span className={cx(wide, "truncate text-[13px] font-extrabold uppercase")}>{name}</span>
          <nav className="hidden gap-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#55504a] @sm:flex">
            {t.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
        </header>
        <p
          className={cx(d(2).className, wide, "mt-4 line-clamp-2 break-words text-[clamp(1.6rem,7.4cqw,3.4rem)] font-extrabold uppercase leading-[0.92] pb-[0.12em]")}
          style={d(2).style}
        >
          {name}
        </p>
        <div className="mt-4 grid min-h-0 flex-1 grid-rows-[minmax(110px,1fr)_auto] gap-4 @xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] @xl:grid-rows-1 @xl:gap-6">
          <div className={cx(d(1).className, "grid min-h-0 grid-cols-[1.4fr_1fr] gap-2")} style={d(1).style}>
            <div className="relative overflow-hidden rounded-[2px]">
              <Image src="/demo/build.jpg" alt="" fill sizes={imgSizes} quality={70} className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2px]">
              <Image src="/demo/build-2.jpg" alt="" fill sizes="(min-width: 1024px) 160px, 30vw" quality={70} className="object-cover" />
            </div>
          </div>
          <div className={cx(d(3).className, "flex min-h-0 flex-col justify-between gap-3")} style={d(3).style}>
            <p className="text-[13px] leading-relaxed text-[#4a4640]">{t.tagline}</p>
            <ul className="hidden @xl:block">
              {t.list.map((s, i) => (
                <li key={s} className="flex items-baseline gap-3 border-t border-[#1c1b19]/15 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em]">
                  <span className="tabular-nums text-[#a3430f]">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#a3430f]">
              {t.cta}
              <ArrowRightIcon size={14} weight="bold" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Any other business: no photo, set in the site's own text face, so it loads nothing extra. */
function General({ name, t, intro }: Props) {
  const d = (i: number) => draft(intro, i);
  return (
    <div className="@container h-full" style={{ "--s-bg": "#f4f5f7", "--s-muted": "#5b6474" } as CSSProperties}>
      <div className="flex h-full flex-col bg-[#f4f5f7] p-5 text-[#141b2d] @xl:p-7">
        <header className={cx(d(0).className, "flex items-center justify-between gap-4")} style={d(0).style}>
          <span className="flex min-w-0 items-center gap-2 text-[15px] font-semibold tracking-[-0.01em]">
            <span className="grid size-6 shrink-0 place-items-center rounded-[6px] bg-[#2f4fd8] text-[11px] font-semibold text-white">{name.trim().charAt(0).toUpperCase()}</span>
            <span className="truncate">{name}</span>
          </span>
          <nav className="hidden items-center gap-5 text-[11px] font-medium text-[#5b6474] @sm:flex">
            {t.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
        </header>
        <div className="mt-5 grid min-h-0 flex-1 content-center gap-6 @xl:mt-6 @xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] @xl:items-center @xl:gap-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e8fb] px-2.5 py-1 text-[10px] font-medium text-[#2f4fd8]">
              <span className="size-1.5 rounded-full bg-[#2f4fd8]" />
              {t.info}
            </span>
            <p
              className={cx(d(2).className, "mt-3 line-clamp-2 break-words text-[clamp(1.9rem,8.5cqw,3.8rem)] font-semibold leading-[1] tracking-[-0.035em] pb-[0.1em]")}
              style={d(2).style}
            >
              {name}
            </p>
            <p className={cx(d(3).className, "mt-3 max-w-[32ch] text-[13px] leading-relaxed text-[#4a5365]")} style={d(3).style}>
              {t.tagline}
            </p>
            <div className={cx(d(4).className, "mt-5 flex items-center gap-3")} style={d(4).style}>
              <span className="rounded-[8px] bg-[#141b2d] px-4 py-2.5 text-xs font-medium text-white">{t.cta}</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2f4fd8]">
                {t.nav[0]}
                <ArrowRightIcon size={12} weight="bold" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className={cx(d(1).className, "rounded-[12px] border border-[#141b2d]/10 bg-white p-4 shadow-[0_18px_40px_-24px_rgb(20_27_45/0.35)] @xl:p-5")} style={d(1).style}>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#5b6474]">{t.listLabel}</p>
            <ul className="mt-2 grid gap-2 @sm:grid-cols-3 @sm:gap-3 @xl:grid-cols-1">
              {t.list.map((s, i) => (
                <li key={s} className="flex items-center gap-2.5 text-[12px] font-medium leading-snug">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e3e8fb] text-[10px] font-semibold tabular-nums text-[#2f4fd8]">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Wireframe of the café sample, used as the "draft" side of the offer comparison. */
export function CafeWireframe() {
  const bar = "rounded-[2px] bg-[#0e1510]/15";
  return (
    <div className="@container h-full">
      <div className="flex h-full flex-col bg-[#f1f3ee] p-5 [background-image:linear-gradient(rgb(14_21_16/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(14_21_16/0.06)_1px,transparent_1px)] [background-size:24px_24px] @xl:p-7">
        <div className="flex items-center justify-between">
          <div className={`h-3 w-28 ${bar}`} />
          <div className="hidden gap-5 @sm:flex">
            <div className={`h-2 w-10 ${bar}`} />
            <div className={`h-2 w-10 ${bar}`} />
            <div className={`h-2 w-10 ${bar}`} />
          </div>
        </div>
        <div className="mt-4 grid min-h-0 flex-1 grid-rows-[auto_minmax(120px,1fr)] gap-5 @xl:mt-6 @xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] @xl:grid-rows-1 @xl:gap-8">
          <div className="flex flex-col justify-end gap-3">
            <div className={`h-2 w-24 ${bar}`} />
            <div className={`h-[9cqw] max-h-16 w-4/5 ${bar} bg-[#0e1510]/20`} />
            <div className={`h-[9cqw] max-h-16 w-3/5 ${bar} bg-[#0e1510]/20`} />
            <div className={`mt-1 h-2.5 w-11/12 ${bar}`} />
            <div className={`h-2.5 w-2/3 ${bar}`} />
            <div className="mt-2 h-9 w-32 rounded-full border border-dashed border-[#0e1510]/40" />
          </div>
          <div className="relative rounded-[6px] border border-dashed border-[#0e1510]/35 [background:linear-gradient(to_top_right,transparent_calc(50%-0.5px),rgb(14_21_16/0.18)_50%,transparent_calc(50%+0.5px)),linear-gradient(to_top_left,transparent_calc(50%-0.5px),rgb(14_21_16/0.18)_50%,transparent_calc(50%+0.5px))] ">
            <div className="absolute bottom-3 left-3 h-20 w-[150px] rounded-[6px] border border-dashed border-[#0e1510]/35 bg-[#f1f3ee] @xl:-left-6 @xl:bottom-5 @xl:w-[170px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
