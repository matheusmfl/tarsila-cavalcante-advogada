import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '../components/Header'
import Script from 'next/script'

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-T5NRLNQT"
      ></Script>
      <Script
        id="TagManager"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'GTM-T5NRLNQT');
          `,
        }}
      />
      <body className="max-w-[1420px] bg-white flex flex-col items-center justify-center">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5NRLNQT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        {children}
      </body>
    </html>
  )
}
