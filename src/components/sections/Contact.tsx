import { ClockIcon, EnvelopeSimpleIcon, PhoneIcon, WhatsappLogoIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { routes, type Locale } from "@/i18n/config";
import { site, emailUrl, phoneUrl, whatsappUrl } from "@/lib/site";
import { QuoteForm } from "@/components/contact/QuoteForm";

export function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.contact;
  const direct = [
    { href: emailUrl, label: c.email, value: site.email, Icon: EnvelopeSimpleIcon },
    { href: phoneUrl, label: c.phone, value: site.phoneDisplay, Icon: PhoneIcon },
    { href: whatsappUrl, label: c.whatsapp, value: site.phoneDisplay, Icon: WhatsappLogoIcon, external: true },
  ];
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-paper-2">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8">
          <div>
            <h2 id="kontakt-title" className="font-display text-[clamp(2.5rem,6.4vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.038em] text-balance">
              {c.title}
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-ink-2 sm:text-xl text-pretty">{c.sub}</p>
          </div>
          <p className="flex w-fit items-center gap-2.5 rounded-[var(--radius-frame)] bg-leaf px-3.5 py-2 text-base font-semibold text-on-leaf">
            <ClockIcon size={20} weight="bold" aria-hidden="true" />
            {c.reply}
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-ink-2">{c.direct}</h3>
            <ul className="mt-3 border-t border-line-strong">
              {direct.map(({ href, label, value, Icon, external }) => (
                <li key={label} className="border-b border-line-strong">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group/d flex items-center gap-4 py-4 transition-colors duration-150 hover:text-leaf-ink"
                  >
                    <Icon size={22} weight="duotone" aria-hidden="true" className="shrink-0 text-leaf-ink" />
                    <span className="w-24 shrink-0 text-sm text-ink-2">{label}</span>
                    <span className="min-w-0 flex-1 truncate font-semibold">{value}</span>
                    <ArrowUpRightIcon
                      size={18}
                      weight="bold"
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-200 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/d:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover/d:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <QuoteForm form={c.form} locale={locale} privacyHref={routes.privacy[locale]} />
      </div>
    </section>
  );
}
