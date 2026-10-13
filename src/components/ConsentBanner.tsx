"use client";

import { useEffect, useState } from "react";
import { adsEnabled, CONSENT_OPEN_EVENT, loadAds, readConsent, saveConsent, type Consent } from "@/lib/ads";
import { buttonClass } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n";

export function ConsentBanner({ t, privacyHref }: { t: Dictionary["consent"]; privacyHref: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!adsEnabled) return;
    const saved = readConsent();
    if (saved === "granted") loadAds();
    const reopen = () => setOpen(true);
    // Shown after first paint so it never competes with the page's own load.
    const frame = saved === null ? requestAnimationFrame(reopen) : 0;
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
    };
  }, []);

  if (!open) return null;

  const choose = (c: Consent) => {
    saveConsent(c);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-3 z-50 rounded-[var(--radius-frame)] border border-line-strong bg-paper p-5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.5)] sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-[400px]"
    >
      <p id="consent-title" className="font-display text-lg font-bold tracking-[-0.02em]">
        {t.title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
        {t.body}{" "}
        <a href={privacyHref} className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
          {t.privacy}
        </a>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => choose("denied")} className={buttonClass("secondary", "sm")}>
          {t.reject}
        </button>
        <button type="button" onClick={() => choose("granted")} className={buttonClass("primary", "sm")}>
          {t.accept}
        </button>
      </div>
    </div>
  );
}

/** Footer link that reopens the banner so the choice can be changed. */
export function ConsentSettingsLink({ label }: { label: string }) {
  if (!adsEnabled) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))} className="w-fit text-left text-ink-2 transition-colors hover:text-ink">
      {label}
    </button>
  );
}
