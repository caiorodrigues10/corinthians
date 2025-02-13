import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Radley } from "next/font/google";

const radley = Radley({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corinthians | Uma breve história",
  description: "Criado por um Fiel torcedor - Caio Henrique Rodrigues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scrollbar-hide">
      <body className={radley.className}>{children}</body>
    </html>
  );
}
