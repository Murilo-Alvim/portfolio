import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://muriloalvim-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Murilo Alvim — Desenvolvedor Full-Stack",
  description:
    "Portfólio de Murilo Alvim, estudante de Sistemas de Informação e desenvolvedor full-stack. Projetos em React, Next.js, Node.js, TypeScript, C# / .NET e PostgreSQL.",
  keywords: [
    "Murilo Alvim",
    "muriloalvim",
    "Portfólio",
    "Desenvolvedor Full-Stack",
    "Sistemas de Informação",
    "UNISANTA",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "C#",
    ".NET",
  ],
  authors: [{ name: "Murilo Alvim", url: SITE_URL }],
  creator: "Murilo Alvim",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Murilo Alvim — Desenvolvedor Full-Stack",
    description:
      "Portfólio de Murilo Alvim, estudante de Sistemas de Informação e desenvolvedor full-stack.",
    url: SITE_URL,
    siteName: "muriloalvim.dev",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murilo Alvim — Desenvolvedor Full-Stack",
    description:
      "Portfólio de Murilo Alvim, estudante de Sistemas de Informação e desenvolvedor full-stack.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-bg-base text-zinc-200 font-sans">{children}</body>
    </html>
  );
}
