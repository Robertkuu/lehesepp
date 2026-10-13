"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { CheckIcon, CaretDownIcon, SpinnerGapIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { submitQuote } from "@/lib/submitQuote";
import { trackLead } from "@/lib/ads";

type Form = Dictionary["contact"]["form"];
type Field = "businessName" | "contactName" | "email" | "needs";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputCls =
  "h-12 w-full rounded-[var(--radius-frame)] border border-line-strong bg-paper px-3.5 text-base text-ink placeholder:text-ink-2/80 transition-[border-color,box-shadow] duration-150 hover:border-ink focus-visible:border-ink focus-visible:outline-offset-1 aria-[invalid=true]:border-danger";

export function QuoteForm({ form, locale, privacyHref }: { form: Form; locale: string; privacyHref: string }) {
  const id = useId();
  const reduce = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [attempted, setAttempted] = useState(false);

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    if (!String(fd.get("businessName") ?? "").trim()) e.businessName = form.errors.required;
    if (!String(fd.get("contactName") ?? "").trim()) e.contactName = form.errors.required;
    const email = String(fd.get("email") ?? "").trim();
    if (!email) e.email = form.errors.required;
    else if (!EMAIL.test(email)) e.email = form.errors.email;
    if (fd.getAll("needs").length === 0) e.needs = form.errors.needs;
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const el = ev.currentTarget;
    const fd = new FormData(el);
    if (fd.get("website")) return; // honeypot: bots fill hidden fields
    setAttempted(true);
    const e = validate(fd);
    setErrors(e);
    const first = Object.keys(e)[0] as Field | undefined;
    if (first) {
      const target = el.querySelector<HTMLElement>(first === "needs" ? `[name="needs"]` : `[name="${first}"]`);
      target?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitQuote({
        businessName: String(fd.get("businessName")).trim(),
        contactName: String(fd.get("contactName")).trim(),
        email: String(fd.get("email")).trim(),
        phone: String(fd.get("phone") ?? "").trim(),
        businessType: String(fd.get("businessType") ?? ""),
        currentSite: String(fd.get("currentSite") ?? "").trim(),
        needs: fd.getAll("needs").map(String),
        message: String(fd.get("message") ?? "").trim(),
        locale,
      });
      setStatus("sent");
      trackLead();
    } catch {
      setStatus("error");
    }
  }

  function revalidate() {
    if (!attempted || !formRef.current) return;
    setErrors(validate(new FormData(formRef.current)));
  }

  function reset() {
    formRef.current?.reset();
    setErrors({});
    setAttempted(false);
    setStatus("idle");
  }

  const swap = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, filter: "blur(4px)", transform: "translateY(8px)" },
        animate: { opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" },
        exit: { opacity: 0, filter: "blur(4px)", transform: "translateY(-8px)" },
      };

  return (
    <div className="relative rounded-[var(--radius-frame)] border border-line-strong bg-paper p-5 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <m.div
            key="sent"
            {...swap}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="flex min-h-[420px] flex-col items-start justify-center gap-5"
            role="status"
          >
            <m.span
              initial={reduce ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.35, delay: 0.1 }}
              className="flex size-16 items-center justify-center rounded-[0_100%_0_100%] bg-leaf text-on-leaf"
            >
              <CheckIcon size={30} weight="bold" aria-hidden="true" />
            </m.span>
            <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{form.success.title}</h3>
            <p className="max-w-[40ch] text-lg text-ink-2">{form.success.body}</p>
            <button type="button" onClick={reset} className="press mt-2 text-sm font-semibold text-leaf-ink underline decoration-1 underline-offset-4 hover:decoration-2">
              {form.success.again}
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            {...swap}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            onChange={revalidate}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField id={`${id}-bn`} name="businessName" label={form.businessName} error={errors.businessName} autoComplete="organization" required />
              <TextField id={`${id}-cn`} name="contactName" label={form.contactName} error={errors.contactName} autoComplete="name" required />
              <TextField id={`${id}-em`} name="email" type="email" label={form.email} error={errors.email} autoComplete="email" inputMode="email" required />
              <TextField id={`${id}-ph`} name="phone" type="tel" label={form.phone} autoComplete="tel" inputMode="tel" />
              <div className="grid gap-2">
                <label htmlFor={`${id}-bt`} className="text-sm font-medium">
                  {form.businessType}
                </label>
                <div className="relative">
                  <select id={`${id}-bt`} name="businessType" defaultValue="" className={`${inputCls} appearance-none pr-10`}>
                    <option value="" disabled>
                      {form.businessTypePlaceholder}
                    </option>
                    {form.businessTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <CaretDownIcon size={18} weight="bold" aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-2" />
                </div>
              </div>
              <TextField
                id={`${id}-cs`}
                name="currentSite"
                type="url"
                label={
                  <>
                    {form.currentSite} <span className="font-normal text-ink-2">({form.optional})</span>
                  </>
                }
                placeholder={form.currentSitePlaceholder}
                autoComplete="url"
                inputMode="url"
              />
            </div>

            <fieldset aria-describedby={errors.needs ? `${id}-needs-err` : undefined} aria-invalid={errors.needs ? true : undefined}>
              <legend className="mb-2 text-sm font-medium">
                {form.needs}
                <span aria-hidden="true" className="text-leaf-ink"> *</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {form.needsOptions.map((n) => (
                  <label key={n} className="press relative cursor-pointer">
                    <input type="checkbox" name="needs" value={n} className="peer sr-only" />
                    <span className="flex h-11 items-center gap-2 rounded-[var(--radius-frame)] border border-line-strong px-3.5 text-sm font-medium text-ink-2 transition-colors duration-150 hover:border-ink hover:text-ink peer-checked:border-leaf peer-checked:bg-leaf peer-checked:text-on-leaf peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--focus)]">
                      <CheckIcon size={16} weight="bold" aria-hidden="true" className="hidden [label:has(:checked)_&]:inline" />
                      {n}
                    </span>
                  </label>
                ))}
              </div>
              {errors.needs && (
                <p id={`${id}-needs-err`} className="mt-2 text-sm font-medium text-danger">
                  {errors.needs}
                </p>
              )}
            </fieldset>

            <div className="grid gap-2">
              <label htmlFor={`${id}-msg`} className="text-sm font-medium">
                {form.message}
              </label>
              <textarea
                id={`${id}-msg`}
                name="message"
                rows={4}
                placeholder={form.messagePlaceholder}
                className={`${inputCls} h-auto min-h-[120px] resize-y py-3 leading-relaxed`}
              />
            </div>

            {/* Honeypot: hidden from people, tempting for bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-[var(--radius-frame)] border border-danger/40 px-4 py-3 text-sm font-medium text-danger">
                {form.errors.submit}
              </p>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[44ch] text-sm leading-relaxed text-ink-2">
                {form.consentA}{" "}
                <a href={privacyHref} className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                  {form.consentLink}
                </a>
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="press inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-frame)] bg-leaf px-6 text-[15px] font-semibold text-on-leaf hover:bg-leaf-hover disabled:cursor-progress"
              >
                {status === "sending" && <SpinnerGapIcon size={18} weight="bold" aria-hidden="true" className="animate-spin" />}
                {status === "sending" ? form.sending : form.submit}
              </button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function TextField({
  id,
  name,
  label,
  error,
  type = "text",
  required,
  ...rest
}: {
  id: string;
  name: string;
  label: ReactNode;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "url" | "text";
}) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden="true" className="text-leaf-ink">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={inputCls}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
