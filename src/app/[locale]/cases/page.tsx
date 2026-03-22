import { unstable_setRequestLocale } from "next-intl/server";
import CasesClient from "./CasesClient";

export default function CasesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <CasesClient />;
}
