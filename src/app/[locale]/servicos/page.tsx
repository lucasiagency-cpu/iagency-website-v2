import { unstable_setRequestLocale } from "next-intl/server";
import ServicosClient from "./ServicosClient";

export default function ServicosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <ServicosClient />;
}
