import type { Metadata } from "next";
import "./globals.css";
import { Inter, EB_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "Pulse of Music. Logic of Code.",
  description: "Deine Website für Musikproduktion und Softwareentwicklung",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"], 
  variable: "--font-eb-garamond",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${ebGaramond.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
