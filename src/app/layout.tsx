import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ScaleITS - Professionelle IT-Lösungen',
  description: 'Ihr Partner für moderne IT-Lösungen mit ACMP, Hornetsecurity und Arctic Wolf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}




