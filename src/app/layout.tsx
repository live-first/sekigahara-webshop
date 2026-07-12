import type { Metadata } from 'next'
import './globals.css'
import Provider from './Provider'
import { Geist } from 'next/font/google'
import { cn } from '@/components/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '関ケ原唄姫合戦2026',
  description:
    '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2026年は7月18日(土)、19日(日)、20日(月祝)に開催します。',
  metadataBase: new URL('https://sekigahara-idolwars.net'),
  openGraph: {
    title: '関ケ原唄姫合戦2026',
    description:
      '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2026年は7月18日(土)、19日(日)、20日(月祝)に開催します。',
    url: 'https://sekigahara-idolwars.net',
    siteName: '関ケ原唄姫合戦2026',
    images: [
      {
        url: '/2026/logo_2026.png',
        width: 1200,
        height: 630,
        alt: '関ケ原唄姫合戦2026',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '関ケ原唄姫合戦2026',
    description:
      '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2026年は7月18日(土)、19日(日)、20日(月祝)に開催します。',
    images: ['/2026/logo_2026.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={cn('font-sans', geist.variable)}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
