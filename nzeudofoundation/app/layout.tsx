import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { Francois_One } from "next/font/google";
import { cn } from "@/lib/utils";

const francoisOne = Francois_One({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-francois-one"

});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Nzeudo Education Foundation",
  description: "Empowering futures through education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${francoisOne.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
