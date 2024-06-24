"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Array Visulizer",
//   description: "Created by Jaimeen M.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-dvh max-h-dvh pt-[50px] flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
