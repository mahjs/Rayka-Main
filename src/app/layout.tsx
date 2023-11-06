import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ماورای ابعاد رایکا",
  description: "همگام با تکنولوژی برای آینده ای هوشمندتر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
