import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"
import { Junge } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

const junge = Junge({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "AM Créa.",
  description: "Sacs et Accessoires - Des créations uniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={junge.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
