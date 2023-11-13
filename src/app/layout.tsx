import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/**
 * The Layout component for the whole app and showing the static component that is showing on the whole app.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>شرکت ماورای ابعاد رایکا</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="همگام با تکنولوژی برای آینده ای هوشمندتر"
        />
        <meta
          name="keywords"
          content="رایکا، پروژه ملی، ماورای ابعاد رایکا، شرکت رایکا"
        />
        <meta name="author" content="نام نویسنده یا شرکت" />
        <link rel="canonical" href="https://raikaco.org" />
        <meta http-equiv="Content-Language" content="fa" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raikaco.org" />
        <meta property="og:title" content="ماورای ابعاد رایکا" />
        <meta
          property="og:description"
          content="همگام با تکنولوژی برای آینده ای هوشمندتر"
        />
        <meta
          property="og:image"
          content="https://raikaco.org/images/share.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://raikaco.org" />
        <meta property="twitter:title" content="ماورای ابعاد رایکا" />
        <meta
          property="twitter:description"
          content="همگام با تکنولوژی برای آینده ای هوشمندتر"
        />
        <meta
          property="twitter:image"
          content="https://raikaco.org/images/share.png"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
