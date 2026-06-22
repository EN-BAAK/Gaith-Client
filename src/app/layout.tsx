import type { Metadata } from "next"
import { Cairo, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic, } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { CommonParentProps } from "@/types/global"

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700",],
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700",],
})

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700",],
})

export const metadata: Metadata = {
  title: "الغيث",
  description: "Arabic application",
}

export default function RootLayout({ children, }: Readonly<CommonParentProps>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(
        cairo.variable,
        ibmPlexArabic.variable,
        notoKufi.variable,
        "h-full antialiased"
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-text font-sans">
        {children}
      </body>
    </html>
  )
}