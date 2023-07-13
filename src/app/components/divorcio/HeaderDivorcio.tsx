import Image from 'next/image'
import logo from '../../../../public/logoTarsila1.png'
import iconWhatsapp from '../../../../public/icons/orangeIconWhatsapp.svg'
import iconMail from '../../../../public/icons/ic_outline-email.svg'
import iconWhatsappWhite from '../../../../public/icons/ic_baseline-whatsapp.svg'

export function HeaderDivorcio() {
  return (
    <header
      className="flex font-roboto flex-col lg:px-20 px-6 py-10 items-center justify-center bg-slate-900 w-full
    "
    >
      <div
        className="flex lg:flex-row lg:justify-between lg:w-full
       flex-col gap-4 items-center justify-center"
      >
        <div className="h-10 w-36">
          <Image src={logo} alt="Logo Empresa Advocacia" />
        </div>
        <div>
          <nav className="flex gap-2  lg:flex lg:gap-4">
            <div className="flex  gap-1 text-center items-center justify-center lg:mt-0">
              {/* <Icon
                icon="ic:outline-email"
                className="h-4 w-4 text-orange-300"
              /> */}
              <Image
                src={iconMail}
                alt=""
                className="h-4 w-4 text-orange-300"
              />
              <a
                href="mailto:contato@tarsilacavalcante.com.br"
                target="_blank"
                className="font-roboto font-normal font-medium:text-base text-xs text-slate-50"
                rel="noreferrer"
              >
                contato@tarsilacavalcante.com.br
              </a>
            </div>
            <div className="flex  gap-1 text-center items-center justify-center lg:mt-0">
              <Image
                src={iconWhatsapp}
                alt=""
                className="h-4 w-4 text-orange-300"
              />
              <a
                href="https://wa.me/5581999766541?text=Doutora%20Tarsila%20quero%20resolver%20meu%20FIES."
                target="_blank"
                className="font-roboto font-normal font-medium:text-base text-xs text-slate-50"
                rel="noreferrer"
              >
                81 99976-6541
              </a>
            </div>
          </nav>
        </div>
      </div>
      <button
        aria-label="Chamada para o whatsapp da advogada Tarsila"
        className="rounded-full h-16 w-16 fixed right-2 bottom-2 lg:right-10 animate-pulse lg:bottom-10 bg-green-500 flex items-center justify-center"
      >
        <a href="https://wa.me/5581999766541?text=Doutora%20Tarsila%20quero%20resolver%20meu%20FIES.">
          <Image src={iconWhatsappWhite} alt="" className="h-12 w-12" />
        </a>
      </button>
    </header>
  )
}
