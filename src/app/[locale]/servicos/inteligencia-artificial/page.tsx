import { unstable_setRequestLocale } from "next-intl/server";
import IAClient from "./IAClient";

export default function IAPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <IAClient />;
}
