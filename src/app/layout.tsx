import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "RISE PROJECT — Игровой проект и студия разработчиков",
  description:
    "RISE PROJECT — самый смелый проект игровых серверов. Высококачественный сервис для игроков. RISE STUDIO — разработка плагинов, дизайна, ботов, 3D моделей и игровых модификаций.",
  keywords: [
    "RISE PROJECT",
    "RISE STUDIO",
    "игровые серверы",
    "Rust",
    "Squad",
    "разработка плагинов",
    "игровые проекты",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
