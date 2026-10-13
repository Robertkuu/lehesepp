import Link from "next/link";
import { getDictionary } from "@/i18n";
import { buttonClass } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  const t = getDictionary("et").notFound;
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1400px] flex-col justify-center gap-6 px-4 sm:px-6 lg:px-10">
      <Logo className="text-lg" />
      <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.038em]">{t.title}</h1>
      <p className="text-lg text-ink-2">{t.body}</p>
      <Link href="/" className={`${buttonClass("primary", "md")} w-fit`}>
        {t.back}
      </Link>
    </main>
  );
}
