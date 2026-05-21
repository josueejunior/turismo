import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AppLayout } from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: {
    default: "Convention Visitors | Turismo Regional",
    template: "%s | Convention Visitors"
  },
  description:
    "Marketplace institucional de descoberta turística com eventos, restaurantes, hospedagens, associados e conteúdo regional.",
  openGraph: {
    title: "Convention Visitors | Turismo Regional",
    description:
      "Descubra eventos, gastronomia, hospedagens e experiências regionais em uma vitrine institucional premium.",
    siteName: "Convention Visitors",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Convention Visitors | Turismo Regional",
    description: "Portal premium de turismo regional para visitantes, associados e eventos."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
