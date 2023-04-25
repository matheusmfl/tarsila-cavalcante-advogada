'use client'
import Image from 'next/image'
import heroImage from '../../../public/heroImage.png'
import iconWhatsapp from '../../../public/icons/ic_baseline-whatsapp.svg'

export function HeroSection() {
  return (
    <main className="flex w-full flex-col lg:px-20 px-5 pb-14 items-center justify-center lg:items-start bg-slate-900 overflow-y-hidden relative z-10">
      <div className="w-80 h-80 absolute z-[-1] lg:top-[-80px]  lg:right-6 lg:w-[550px] lg:h-[600px]">
        <Image
          src={heroImage}
          alt="Foto do simbolo da justiça"
          className="h-full w-full opacity-40"
        />
      </div>

      <div className="flex flex-col w-full gap-5 lg:max-w-[600px] ">
        <h1
          className="font-normal font-roboto text-orange-300
          text-3xl text-center lg:text-left lg:text-6xl lg:w-[720px]"
        >
          Enfrentando problemas para ter acesso ao Fies?
        </h1>
        <span className="text-base text-slate-50 text-center lg:text-left lg:max-w-[420px] lg:text-lg">
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
       items-center justify-center lg:w-80 bg-green-600 hover:bg-green-700 text-slate-50 uppercase rounded-md"
        >
          <a
            href="https://wa.me/5581999766541?text=Doutora%20Tarsila%20quero%20resolver%20meu%20FIES."
            target="_blank"
            rel="noreferrer"
          >
            Quero ajuda especializada
          </a>
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
