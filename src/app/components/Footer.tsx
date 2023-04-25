'use client'
import { Icon } from '@iconify/react'

export function Footer() {
  return (
    <footer className="flex flex-col p-6 items-center justify-center bg-slate-950">
      <div>
        <div className="flex mt-2 gap-3 text-center items-center justify-center">
          <Icon icon="ic:outline-email" className="h-6 w-6 text-orange-300" />
          <a
            href="#"
            className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
          >
            contato@tarsilacavalcante.com.br
          </a>
        </div>
        <div className="flex mt-4 gap-4 text-center items-center justify-center">
          <Icon
            icon="ic:baseline-whatsapp"
            className="h-6 w-6 text-orange-300"
          />
          <a
            href="#"
            className="font-roboto font-normal font-medium:text-base text-sm text-slate-50"
          >
            81 99976 - 6541
          </a>
        </div>
      </div>
      <span className="font-normal text-sm text-orange-300 pt-6 text-center">
        © 2023 Tarsila Cavalcante - Advogados. Todos os direitos reservados
      </span>
    </footer>
  )
}
