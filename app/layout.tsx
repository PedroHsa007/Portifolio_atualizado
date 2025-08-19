import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AdminProvider } from "@/components/admin-provider"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pedro Henrique - Portfólio Profissional",
  description: "Desenvolvedor Full Stack especializado em VBA, React, Python e análise de dados",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <AdminProvider>
            <Suspense fallback={null}>
              <AnalyticsTracker />
              {children}
              <Toaster />
            </Suspense>
          </AdminProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
