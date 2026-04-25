import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Allure | Energia Solar Residencial e Empresarial',
  description: 'A Allure projeta e instala sistemas solares completos para você economizar até 95% na conta de luz. Energia inteligente. Engenharia que transforma.',
  keywords: ['energia solar', 'painéis solares', 'economia de energia', 'sustentabilidade', 'energia renovável'],
  authors: [{ name: 'Allure' }],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
