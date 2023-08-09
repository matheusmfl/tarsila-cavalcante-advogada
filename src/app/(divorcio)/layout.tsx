import { ReactNode } from 'react'
import '../globals.css'
import { Roboto, Inter } from 'next/font/google'
import Script from 'next/script'

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
      {/* Analytics Tags */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-KN5WP87Z"
      ></Script>
      <Script
        id="TagManager"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'GTM-KN5WP87Z');
          `,
        }}
      />
      <body className="w-full bg-white flex flex-col items-center justify-center">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KN5WP87Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
