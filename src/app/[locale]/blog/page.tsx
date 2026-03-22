import { unstable_setRequestLocale } from "next-intl/server";
import BlogClient from "./BlogClient";

export default function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <BlogClient />;
}
