import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/cabecalho";
import Footer from "./components/footer/rodape";
import CookiePopup from "./components/cookies/Cookie";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico', // /public path
  },
  title: "Oceanômetro",
  description: "Ajude o nosso mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />


        <main>

          {children}

        </main>
      <CookiePopup/>
      <Footer/>
      </body>
    </html>
  );
}
