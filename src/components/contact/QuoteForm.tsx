"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { CheckIcon, SpinnerGapIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n";
import { EMAIL, submitQuote } from "@/lib/submitQuote";
import { trackLead } from "@/lib/ads";
import { trackEvent } from "@/lib/analytics";

type Form = Dictionary["contact"]["form"];
type Field = "name" | "contact" | "message";
type Errors = Partial<Record<Field, string>>;

// A phone number: digits with optional +, spaces, dashes or brackets, at least 7 digits.
const PHONE = /^\+?[\d\s()-]+$/;

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
    if (!String(fd.get("name") ?? "").trim()) e.name = form.errors.required;
    const contact = String(fd.get("contact") ?? "").trim();
    if (!contact) e.contact = form.errors.required;
    else if (!EMAIL.test(contact) && !(PHONE.test(contact) && contact.replace(/\D/g, "").length >= 7)) e.contact = form.errors.contact;
    if (!String(fd.get("message") ?? "").trim()) e.message = form.errors.required;
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
      const target = el.querySelector<HTMLElement>(`[name="${first}"]`);
      target?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitQuote({
        name: String(fd.get("name")).trim(),
        contact: String(fd.get("contact")).trim(),
        message: String(fd.get("message")).trim(),
        locale,
      });
      setStatus("sent");
      trackLead();
      trackEvent("quote-sent", { locale });
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
              <TextField id={`${id}-nm`} name="name" label={form.name} error={errors.name} autoComplete="name" required />
              <TextField id={`${id}-ct`} name="contact" label={form.contact} hint={form.contactHint} error={errors.contact} autoComplete="email" required />
            </div>

            <div className="grid gap-2">
              <label htmlFor={`${id}-msg`} className="text-base font-medium">
                {form.message}
                <span aria-hidden="true" className="text-leaf-ink"> *</span>
              </label>
              <textarea
                id={`${id}-msg`}
                name="message"
                rows={4}
                placeholder={form.messagePlaceholder}
                aria-required
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? `${id}-msg-err` : undefined}
                className={`${inputCls} h-auto min-h-[130px] resize-y py-3 leading-relaxed`}
              />
              {errors.message && (
                <p id={`${id}-msg-err`} className="text-sm font-medium text-danger">
                  {errors.message}
                </p>
              )}
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
                className="press inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-frame)] bg-leaf px-6 text-base font-semibold text-on-leaf hover:bg-leaf-hover disabled:cursor-progress"
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
  hint,
  type = "text",
  required,
  ...rest
}: {
  id: string;
  name: string;
  label: ReactNode;
  error?: string;
  hint?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "url" | "text";
}) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={id} className="text-base font-medium">
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
        aria-describedby={[hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(" ") || undefined}
        className={inputCls}
        {...rest}
      />
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-ink-2">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
