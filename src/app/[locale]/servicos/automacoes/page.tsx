import { unstable_setRequestLocale } from "next-intl/server";
import AutomacoesClient from "./AutomacoesClient";

export default function AutomacoesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <AutomacoesClient />;
}
