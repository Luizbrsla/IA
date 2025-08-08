import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Emprego+ | Plataforma Nacional de Empregos",
  description: "A plataforma nacional de empregos que conecta talentos e oportunidades com inteligência artificial e design centrado no usuário.",
  keywords: "empregos, vagas, carreira, trabalho, RH, recrutamento, Brasil",
  authors: [{ name: "Emprego+ Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Emprego+ | Plataforma Nacional de Empregos",
    description: "A plataforma nacional de empregos que conecta talentos e oportunidades com inteligência artificial e design centrado no usuário.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
