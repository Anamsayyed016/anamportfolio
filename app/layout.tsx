import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import BackToTop from "@/components/ui/back-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Anam Sayyed - Full-Stack Python Developer",
    template: "%s | Anam Sayyed",
  },
  description:
    "Professional Full-Stack Python Developer specializing in Django, Flask, React.js, and modern web development. Based in Bhopal, Madhya Pradesh.",
  keywords: "Full-Stack Developer, Python Developer, Django, Flask, React.js, Web Development, Bhopal",
  authors: [{ name: "Anam Sayyed" }],
  creator: "Anam Sayyed",
  metadataBase: new URL("https://anamsayyed.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anamsayyed.vercel.app",
    title: "Anam Sayyed - Full-Stack Python Developer",
    description:
      "Professional Full-Stack Python Developer specializing in Django, Flask, React.js, and modern web development.",
    siteName: "Anam Sayyed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anam Sayyed - Full-Stack Python Developer",
    description:
      "Professional Full-Stack Python Developer specializing in Django, Flask, React.js, and modern web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
