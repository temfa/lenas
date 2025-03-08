import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ads from "@/components/ads";
import { Providers } from "@/provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lenas Organic Skincare And Spa",
  description: "Beauty Cosmetics and Personal Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <Providers>
          <Ads />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
