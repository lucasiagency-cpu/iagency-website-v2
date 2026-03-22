import { unstable_setRequestLocale } from "next-intl/server";
import SobreClient from "./SobreClient";

export default function SobrePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <SobreClient />;
}
