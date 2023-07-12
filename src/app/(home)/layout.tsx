import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '../components/Header'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Tarsila Cavalcante | FIES',
  description: 'Tarsila cavalcante Advogada',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="max-w-[1420px] bg-white flex flex-col items-center justify-center">
        <Header />
        {children}
      </body>
    </html>
  )
}
