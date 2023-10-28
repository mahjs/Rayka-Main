import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'ماورای ابعاد رایکا',
  description: 'همگام با تکنولوژی برای آینده ای هوشمندتر',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
