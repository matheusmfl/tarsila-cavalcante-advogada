'use client'
import Image from 'next/image'
import heroImage from '../../../public/heroImage.png'
import { Icon } from '@iconify/react'

export function HeroSection() {
  return (
    <main className="flex flex-col px-5 pb-14 items-center justify-center bg-slate-900 overflow-y-hidden relative z-10">
      <div className="w-80 h-80 absolute z-[-1] top-12">
        <Image
          src={heroImage}
          alt="Foto do simbolo da justiça"
          className="h-full w-full opacity-40"
        />
      </div>

      <div className="flex flex-col w-full gap-5">
        <h1
          className="font-normal font-roboto text-orange-400
          text-3xl text-center"
        >
          Enfrentando problemas para ter acesso ao Fies?
        </h1>
        <span className="text-base text-slate-50 text-center">
          Exigir nota mínima para ingressão ao{' '}
          <span className="bg-orange-300/30">FIES</span> é ilegal e podemos te
          ajudar a garantir seu{' '}
          <span className="font-bold">
            direito de ingressar em uma faculdade
          </span>{' '}
          imediatamente.
        </span>
        <button
          type="submit"
          className=" uppercase bg-slate-950 py-3 px-4 w-full rounded-md gap-4 text-orange-300 flex items-center justify-center"
        >
          quero ajuda especializada
          <Icon
            icon="ic:baseline-whatsapp"
            className="h-6 w-6 text-orange-300"
          />
        </button>
      </div>
    </main>
  )
}
