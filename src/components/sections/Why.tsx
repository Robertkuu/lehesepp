import type { CSSProperties } from "react";
import Image from "next/image";
import { EnvelopeSimpleIcon, PhoneIcon, UserIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { SampleSite } from "@/components/samples/Samples";
import { MountNear } from "@/components/motion/MountNear";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { site, phoneUrl, emailUrl, whatsappUrl } from "@/lib/site";
import { InView } from "@/components/motion/InView";
import { LoadTime } from "@/components/why/LoadTime";

const cell = "bento-cell flex flex-col gap-6 rounded-[var(--radius-frame)] p-6 sm:p-8";

export function Why({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.why;
  const salon = dict.hero.demo.types.salon;
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <h2 id="why-title" className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-balance">
        {w.title}
      </h2>

      <InView className="bento mt-12 grid gap-3 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        {/* Fast: a real measurement of this page */}
        <article className={`${cell} justify-between bg-paper-2`} style={{ "--i": 0 } as CSSProperties}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{w.fast.title}</h3>
            <p className="mt-2 max-w-[36ch] text-base leading-relaxed text-ink-2">{w.fast.body}</p>
          </div>
          <div>
            <p className="text-sm text-ink-2">{w.fast.measured}</p>
            <LoadTime locale={locale} measuring={w.fast.measuring} unit={w.fast.unit} />
          </div>
        </article>

        {/* Mobile: tall leaf cell with a phone showing a sample site */}
        <article className={`${cell} overflow-hidden bg-leaf text-on-leaf md:row-span-2 lg:col-start-2 lg:row-span-2`} style={{ "--i": 1 } as CSSProperties}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{w.mobile.title}</h3>
            <p className="mt-2 max-w-[36ch] text-base leading-relaxed text-on-leaf-2">{w.mobile.body}</p>
          </div>
          <div className="phone mx-auto mt-auto w-[min(250px,78%)] translate-y-10 rounded-[30px] border-[7px] border-[#0e1510] bg-[#f2e8e5] shadow-[0_30px_60px_-30px_rgb(8_30_15/0.7)]" aria-hidden="true">
            <MountNear className="h-[470px] overflow-hidden rounded-[23px] bg-[#f2e8e5]">
              <SampleSite type="salon" name={salon.sample} t={salon} />
            </MountNear>
          </div>
        </article>

        {/* One person: who you talk to, and every way to reach Robert */}
        <article className={`${cell} bg-ink text-paper lg:col-start-3 lg:row-span-2`} style={{ "--i": 2 } as CSSProperties}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{w.person.title}</h3>
            <p className="mt-2 max-w-[36ch] text-base leading-relaxed opacity-80">{w.person.body}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="relative size-20 shrink-0 overflow-hidden rounded-full bg-paper/10">
              <Image src="/robert-avatar.jpg" alt="" fill sizes="80px" className="object-cover object-[50%_20%]" />
            </span>
            <span className="grid">
              <span className="font-display text-2xl font-bold tracking-[-0.02em]">{site.founder}</span>
              <span className="text-sm opacity-80">{w.person.role}</span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
                <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
                {w.person.reply}
              </span>
            </span>
          </div>

          <div className="mt-auto grid gap-2">
            <a
              href={phoneUrl}
              className="press -mx-2 flex items-center gap-3 rounded-[var(--radius-frame)] px-2 py-2 transition-colors duration-150 hover:bg-paper/10"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-leaf text-on-leaf">
                <PhoneIcon size={22} weight="fill" aria-hidden="true" />
              </span>
              <span className="grid">
                <span className="text-sm opacity-80">{w.person.call}</span>
                <span className="font-display text-2xl font-bold tracking-[-0.02em] tabular-nums sm:text-3xl">{site.phoneDisplay}</span>
              </span>
            </a>
            <div className="grid gap-1 border-t border-paper/15 pt-2">
              <a href={emailUrl} className="press -mx-2 flex items-center gap-3 rounded-[var(--radius-frame)] px-2 py-2 transition-colors duration-150 hover:bg-paper/10">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-paper/25">
                  <EnvelopeSimpleIcon size={20} weight="bold" aria-hidden="true" />
                </span>
                <span className="grid min-w-0">
                  <span className="text-sm opacity-80">{w.person.email}</span>
                  <span className="truncate font-medium">{site.email}</span>
                </span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="press -mx-2 flex items-center gap-3 rounded-[var(--radius-frame)] px-2 py-2 transition-colors duration-150 hover:bg-paper/10">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-paper/25">
                  <WhatsappLogoIcon size={22} weight="bold" aria-hidden="true" />
                </span>
                <span className="grid">
                  <span className="text-sm opacity-80">{w.person.whatsapp}</span>
                  <span className="font-medium tabular-nums">{site.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>
        </article>

        {/* No overhead: the roles an agency bills for, against one contact */}
        <article className={`${cell} justify-between bg-paper-2 md:col-span-2 lg:col-span-1`} style={{ "--i": 3 } as CSSProperties}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{w.overhead.title}</h3>
            <p className="mt-2 max-w-[36ch] text-base leading-relaxed text-ink-2">{w.overhead.body}</p>
          </div>
          <dl className="grid gap-4">
            <div className="grid gap-2">
              <dt className="text-sm font-medium text-ink-2">{w.overhead.agencyLabel}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {w.overhead.agency.map((role) => (
                  <span key={role} className="rounded-[var(--radius-frame)] border border-line-strong px-2.5 py-1 text-sm text-ink-2">
                    {role}
                  </span>
                ))}
              </dd>
            </div>
            <div className="grid gap-2">
              <dt className="text-sm font-medium text-ink-2">{w.overhead.meLabel}</dt>
              <dd>
                <span className="inline-flex items-center gap-2 rounded-[var(--radius-frame)] bg-leaf px-2.5 py-1 text-sm font-semibold text-on-leaf">
                  <UserIcon size={16} weight="bold" aria-hidden="true" />
                  {w.overhead.me}
                </span>
              </dd>
            </div>
          </dl>
        </article>
      </InView>
    </section>
  );
}
