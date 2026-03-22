import { unstable_setRequestLocale } from "next-intl/server";
import CaseDetailClient from "./CaseDetailClient";
import { cases } from "@/lib/cases";

const locales = ["pt", "es", "en"];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    cases.map((c) => ({ locale, slug: c.slug }))
  );
}

export default function CaseDetailPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <CaseDetailClient />;
}
