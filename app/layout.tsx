import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JWT AUTH example',
  description: 'A simple exemple of JWT AUTH with login and register in the DB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col w-full h-screen items-center justify-center`}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
