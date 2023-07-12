import './globals.css'
import type { Metadata } from 'next'
import { Lateef } from 'next/font/google'

const lateef = Lateef(
  { 
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-lateef', 
  }
)

export const metadata: Metadata = {
  title: 'Adriano Costa',
  description: 'Escritório de Advocacia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lateef.className}>{children}</body>
    </html>
  )
}
