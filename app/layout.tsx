import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Deborah Tapajós | Advocacia em Santarém - PA",
  description: "Dra. Deborah Carolina Batista Tapajós atua nas áreas de Direito Médico, Cível, Criminal e Previdenciário em Santarém, Pará.",
  keywords: ["Dra. Deborah Tapajós", "Advogada", "Santarém", "Pará", "Direito Médico", "Direito Cível", "Direito Criminal", "Direito Previdenciário"],
  openGraph:{
    title: "Dra. Deborah Tapajós | Advogada em Santarém - PA",
    description: "Dra. Deborah Carolina Batista Tapajós atua nas áreas de Direito Médico, Cível, Criminal e Previdenciário em Santarém, Pará.",
    url: "https://seudominio.com.br",
    siteName: "Dra. Deborah Tapajós",
    locale: "pt-BR",
    type: "website",
    images:[
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dra. Deborah Tapajós - Advocacia",
      }
    ]
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={playfairDisplay.variable}
    >
      <body className={`${playfairDisplay.className} bg-neutral-light dark:bg-neutral-dark min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
