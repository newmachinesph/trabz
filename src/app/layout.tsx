import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics, MetaPixel } from '@/lib/analytics'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fil">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-white`}>
        <GoogleAnalytics />
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
