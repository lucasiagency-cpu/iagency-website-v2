import { unstable_setRequestLocale } from "next-intl/server";
import OrcamentoClient from "./OrcamentoClient";

export default function OrcamentoPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <OrcamentoClient />;
}
