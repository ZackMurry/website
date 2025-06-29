import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans_Mono, Nunito_Sans, Open_Sans } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap'
})

const notoMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-mono',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Zack Murry</title>
      </head>
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
