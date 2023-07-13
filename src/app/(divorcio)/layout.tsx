import { ReactNode } from 'react'
import '../globals.css'
import { Roboto, Inter } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Tarsila Cavalcante | DIVÓRCIO',
  description: 'Tarsila cavalcante Advogada',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className} ${inter.className}`}>
      <body className="max-w-[1420px] bg-white flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  )
}
