import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tom's Jazz School",
  description: 'Generated by Gian',
  icons: 'favicon.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <body className={`bg-bg select-none border-black border-x-2 m-[0_64px] md:m-[0_36px] ${inter.className}`}>{children}</body>
    </html>
  )
}