import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Allure | Energia Solar Residencial e Empresarial',
  description: 'A Allure projeta e instala sistemas solares completos para você economizar até 95% na conta de luz. Energia inteligente. Engenharia que transforma.',
  keywords: ['energia solar', 'painéis solares', 'economia de energia', 'sustentabilidade', 'energia renovável'],
  authors: [{ name: 'Allure' }],
  generator: 'v0.app',
  icons: {
    icon: '/images/i1-rounded.png?v=3',
    apple: '/images/i1-rounded.png?v=3',
  },
}

export const viewport: Viewport = {
  themeColor: '#0E2C6B',
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
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
