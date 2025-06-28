import type { Metadata } from 'next'
import { Noto_Sans, Nunito_Sans, Open_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans', // Optional: use with Tailwind
  display: 'swap' // Better CLS
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
