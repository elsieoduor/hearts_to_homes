import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Hearts to Homes - Children's Home NGO",
  description:
    "Supporting children in need through love, care, and community. Join us in making a difference in young lives.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>       
         <Suspense fallback={null}>
          {children}
          <Footer />
         </Suspense>
        <Analytics />

      </body>
    </html>
  )
}