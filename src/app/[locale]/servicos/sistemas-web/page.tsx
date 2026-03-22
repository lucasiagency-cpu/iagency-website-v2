import { unstable_setRequestLocale } from "next-intl/server";
import WebClient from "./WebClient";

export default function SistemasWebPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <WebClient />;
}
