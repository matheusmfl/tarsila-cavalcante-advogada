import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '../components/Header'
import Script from 'next/script'
import '../'

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
      <link rel="icon" href="../favicon.ico" sizes="any" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-PJHLWH7R"
      ></Script>
      <Script
        id="TagManager"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJHLWH7R');
          `,
        }}
      />
      <body className="max-w-[1420px] bg-white flex flex-col items-center justify-center">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJHLWH7R"
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
