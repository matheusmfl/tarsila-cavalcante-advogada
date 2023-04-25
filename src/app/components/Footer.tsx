'use client'
import { Icon } from '@iconify/react'

export function Footer() {
  return (
    <footer className="flex flex-col p-6 items-center lg:flex-row lg:justify-between lg:items-center justify-center w-full bg-slate-950">
      <div className="lg:flex lg:gap-5 lg:items-center lg:justify-center">
        <div className="flex mt-2 gap-3 text-center items-center lg:mt-0 justify-center">
          <Icon icon="ic:outline-email" className="h-6 w-6 text-orange-300" />
          <a
            href="mailto:contato@tarsilacavalcante.com.br"
            target="_blank"
            className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
            rel="noreferrer"
          >
            contato@tarsilacavalcante.com.br
          </a>
        </div>
        <div className="flex mt-4 gap-4 text-center items-center justify-center lg:mt-0">
          <Icon
            icon="ic:baseline-whatsapp"
            className="h-6 w-6 text-orange-300"
          />
          <a
            href="https://wa.me/5581999766541?text=Doutora%20Tarsila%20quero%20resolver%20meu%20FIES."
            target="_blank"
            className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
            rel="noreferrer"
          >
            81 99976 - 6541
          </a>
        </div>
      </div>
      <span className="font-normal text-sm text-orange-300 pt-6 lg:pt-0 text-center">
        © 2023 Tarsila Cavalcante - Advogados. Todos os direitos reservados
      </span>
    </footer>
  )
}
