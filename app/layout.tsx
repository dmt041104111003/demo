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
  description: "Website quản lý và mua bán nông sản tươi ngon từ các vùng miền Việt Nam",
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
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} ${lexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
