import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aiveo',
  description: 'Created by DPRAHUL',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
