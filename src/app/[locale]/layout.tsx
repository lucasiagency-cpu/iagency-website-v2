import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import "@/styles/globals.css";
import IntlWrapper from "./IntlWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <head>
        <meta name="theme-color" content="#07070D" />
        <title>IAgency Digital — IA, Automações e Sistemas Web</title>
        <meta name="description" content="Traduzimos complexidade em resultado." />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#07070D] text-[#F8FAFC] antialiased`}
      >
        <IntlWrapper locale={locale} messages={messages}>
          {children}
        </IntlWrapper>
      </body>
    </html>
  );
}
