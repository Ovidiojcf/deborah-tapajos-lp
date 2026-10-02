import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Deborah Tapajós | Advocacia em Santarém - PA",
  description: "Dra. Deborah Carolina Batista Tapajós atua nas áreas de Direito Médico, Cível, Criminal e Previdenciário em Santarém, Pará.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={geistSans.variable}
    >
      <body className={`${geistMono.variable} ${playfairDisplay.className} bg-neutral-light dark:bg-neutral-dark min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
