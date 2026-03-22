import { unstable_setRequestLocale } from "next-intl/server";
import BlogPostClient from "./BlogPostClient";
import { blogPosts } from "@/lib/blog";

const locales = ["pt", "es", "en"];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export default function BlogPostPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <BlogPostClient />;
}
