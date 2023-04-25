'use client'
import Image from 'next/image'
import heroImage from '../../../public/heroImage.png'
import iconWhatsapp from '../../../public/icons/ic_baseline-whatsapp.svg'

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
          className="flex px-6 py-3 gap-3
       items-center justify-center bg-green-600 hover:bg-green-700 text-slate-50 uppercase rounded-md"
        >
          <a href="#">Quero ajuda especializada</a>
          <Image
            src={iconWhatsapp}
            alt="icone whatsapp"
            width={20}
            height={20}
            className="text-white "
          />
        </button>
      </div>
    </main>
  )
}
