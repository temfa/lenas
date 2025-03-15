import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Ads from "@/components/ads";
import { Providers } from "@/redux/provider";
import CartModal from "@/components/cart-modal";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <Head>
          <title>Lenas Organic Skincare and Spa.</title>
          <meta name="description" content="Lenas Organic Skincare and Spa." />
          <meta name="keywords" content="Beauty Cosmetics and Personal Care" />
          <meta name="author" content="Lenas Organic" />
          <meta property="og:title" content="Lenas Organic Skincare and Spa" />
          <meta property="og:description" content="Beauty Cosmetics and Personal Care" />
          <meta property="og:url" content="http://lenasorganicskincare.com/" />
          <meta property="og:image" content="http://lenasorganicskincare.com/images/logo-black.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Lenas Organic",
                url: "http://lenasorganicskincare.com/",
                logo: "http://lenasorganicskincare.com/images/logo-black.png",
                description: "UK & Destination Wedding Photography | Dtee Studios",
                sameAs: ["https://www.instagram.com/lenas_organicskincare/"],
              }),
            }}
          />
        </Head>
        <ToastContainer />
        <Providers>
          <Ads />
          <Header />
          {children}
          <Footer />
          <CartModal />
        </Providers>
      </body>
    </html>
  );
}
