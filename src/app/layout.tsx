import { Header } from "@/molecules";
import { ToastContainer } from "react-toastify";
import { Footer } from "@/molecules/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aumnix-Unlock Your Home with AI",
  description:
    "Experience the future of home security with our cutting-edge AI technology. Unlock Your Home with AI brings a new level of convenience and safety to your doorstep. Our advanced system adapts to your lifestyle, providing seamless access control through innovative artificial intelligence. Enjoy the peace of mind that comes with intelligent, personalized home security. Embrace the future – unlock a smarter, safer home with Unlock Your Home with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} [background:linear-gradient(120.38deg,_#3b4563,_#151924)]`}
      >
        {/* <Header /> */}
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
