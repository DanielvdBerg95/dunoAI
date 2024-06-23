import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});



export const metadata: Metadata = {
  title: "Duno",
  description: "Your AI Business Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
  </html>
  </ClerkProvider>
    
    
  );
}
