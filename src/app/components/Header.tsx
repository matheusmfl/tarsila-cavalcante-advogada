import Image from 'next/image'
import logo from '../../../public/logoTarsila1.png'
import iconWhatsapp from '../../../public/icons/orangeIconWhatsapp.svg'
import iconMail from '../../../public/icons/ic_outline-email.svg'

export function Header() {
  return (
    <header
      className="flex flex-col lg:px-20 px-6 py-10 items-center justify-center bg-slate-900 w-full
    "
    >
      <div
        className="flex lg:flex-row lg:justify-between lg:w-full
       flex-col gap-4 items-center justify-center"
      >
        <div className="h-10 w-36">
          <Image
            src={logo}
            alt="Logo Empresa Advocacia"
            // className="w-[152px] h-[60px]"
          />
        </div>
        <div>
          <nav className="lg:flex lg:gap-4">
            <div className="flex mt-2 gap-3 text-center items-center justify-center lg:mt-0">
              {/* <Icon
                icon="ic:outline-email"
                className="h-6 w-6 text-orange-300"
              /> */}
              <Image
                src={iconWhatsapp}
                alt=""
                className="h-6 w-6 text-orange-300"
              />
              <a
                href="#"
                className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
              >
                contato@tarsilacavalcante.com.br
              </a>
            </div>
            <div className="flex mt-4 gap-4 text-center items-center justify-center lg:mt-0">
              <Image
                src={iconMail}
                alt=""
                className="h-6 w-6 text-orange-300"
              />
              <a
                href="#"
                className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
              >
                81 99976 - 6541
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
