import Image from 'next/image'
import heroImage from '../../../public/heroImage.png'

export function HeroSection() {
  return (
    <main className="flex flex-col px-5 pb-14 items-center justify-center bg-slate-900 overflow-y-hidden relative z-10">
      <div className="w-80 h-80 absolute z-[-1] top-[-10px]">
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
          Exigir nota mínima para ingressão ao FIES é ilegal e podemos te ajudar
          a garantir seu direito de ingressar em uma faculdade imediatamente.
        </span>
        <button
          type="submit"
          className=" uppercase bg-slate-950 py-3 px-4 w-full rounded-md text-orange-300"
        >
          quero ajuda especializada
        </button>
      </div>
    </main>
  )
}
