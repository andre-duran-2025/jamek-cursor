import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/common/GoogleAnalytics"
import CookieBanner from "@/components/common/CookieBanner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Jamek Soluções Industriais | Automação Industrial para Pequenas Empresas",
    template: "%s | Jamek Soluções Industriais"
  },
  description: "Transforme sua empresa com automação industrial acessível. Painéis elétricos, retrofit, programação CLP, células robóticas e software de monitoramento. Orçamento gratuito.",
  keywords: [
    "automação industrial",
    "painéis elétricos", 
    "retrofit industrial",
    "programação CLP",
    "células robóticas",
    "esquemas elétricos",
    "software monitoramento industrial",
    "jamek soluções industriais",
    "pequenas empresas",
    "indústria 4.0"
  ],
  authors: [{ name: "Jamek Soluções Industriais" }],
  creator: "Jamek Soluções Industriais",
  publisher: "Jamek Soluções Industriais",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jamek.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jamek.com.br",
    title: "Jamek Soluções Industriais | Automação Industrial",
    description: "Transforme sua empresa com automação industrial acessível. Especialistas em painéis elétricos, retrofit e programação CLP.",
    siteName: "Jamek Soluções Industriais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamek Soluções Industriais | Automação Industrial",
    description: "Transforme sua empresa com automação industrial acessível.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}