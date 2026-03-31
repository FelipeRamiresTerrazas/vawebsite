import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veritas Analytics | Mentoria de Carreira · Analytics · Engenharia de Dados",
  description:
    "Mentoria de carreira personalizada, consultoria em Analytics e Engenharia de Dados para profissionais e empresas que querem crescer com dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
