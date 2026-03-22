"use client";

import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

type Props = {
  locale: string;
  messages: Record<string, unknown>;
  children: React.ReactNode;
};

export default function IntlWrapper({ locale, messages, children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const msgs = messages as any;
  return (
    <NextIntlClientProvider locale={locale} messages={msgs}>
      <Header locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </NextIntlClientProvider>
  );
}
