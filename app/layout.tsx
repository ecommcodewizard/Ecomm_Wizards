import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ecomm Wizards — Shopify Integration & Automation Experts",
    template: "%s | Ecomm Wizards",
  },
  description:
    "Shopify experts specialising in store builds, migrations, optimisation, custom apps, B2B, POS, and marketing. Let's grow your ecommerce together.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--color-white)", color: "var(--color-dark)" }} suppressHydrationWarning>
        <Header />
        <main className="flex-1 pt-[70px] lg:pt-[110px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
