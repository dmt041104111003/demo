import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"], 
  variable: "--font-lexend", 
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Nông Sản Việt - Chất lượng từ thiên nhiên",
  description: "Hệ thống mua bán nông sản tươi ngon từ các vùng miền Việt Nam",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} ${lexend.className} antialiased overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}
