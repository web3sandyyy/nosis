import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarComponent from "@/components/Sidebar";
import Header from "@/components/Header";
import { PwaProvider } from "@/components/PwaProvider";
import BottomBar from "@/components/BottomBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nosis",
  description: "Nosis is a digital library",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nosis",
  },
  applicationName: "Nosis",
  other: {
    "http-equiv": "Cache-Control",
    content: "no-cache, no-store, must-revalidate",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PwaProvider>
          <div className="min-h-[100vh] w-full flex">
            <SidebarComponent />
            <div className="w-full">
              <Header />
              <div className="min-h-[calc(100dvh-69px)] w-full bg-secondary">
                {children}
              </div>
            </div>
            <BottomBar />
          </div>
        </PwaProvider>
      </body>
    </html>
  );
}
