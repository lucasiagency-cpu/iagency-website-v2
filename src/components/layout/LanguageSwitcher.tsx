"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n";

const labels: Record<string, string> = {
  pt: "PT",
  es: "ES",
  en: "EN",
};

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 bg-bg-secondary/50 rounded-md p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-all ${
            locale === loc
              ? "bg-accent-primary/20 text-accent-primary"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
