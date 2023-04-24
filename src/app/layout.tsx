import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Você na faculdade',
  description: 'Tarsila cavalcanti Advogada',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="max-w-[1420px] flex flex-col items-center justify-center">
        <Header />
        {children}
      </body>
    </html>
  )
}
