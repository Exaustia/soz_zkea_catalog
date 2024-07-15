import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./layout";
import Header from "./layout/Header";
import { MenuProvider } from "./context/MenuProvider";
import Modal from "./modal";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuProvider>
      <html lang="en">
        <body className={inter.className + " relative"}>
          <Header />
          {children}
          <Modal />
        </body>
      </html>
    </MenuProvider>
  );
}
