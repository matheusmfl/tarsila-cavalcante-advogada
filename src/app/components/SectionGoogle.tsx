import Image from 'next/image'
import icon from '../../../public/googleSvg.svg'
import liveStar from '../../../public/liveStar.svg'
import { CardsGoogle } from './CardsGoogle'

export function SectionGoogle() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 lg:py-20 bg-slate-900 w-full">
      <div className="flex flex-col items-center">
        <Image src={icon} alt="Icone do google" width={40} height={40} />
        <div className="flex items-center justify-center gap-1 mt-3">
          <span className="text-xl text-slate-50">4,9</span>
          <Image
            src={liveStar}
            alt="Estrelinha do google"
            width={14}
            height={14}
          />
        </div>
        <h3 className="text-slate-50 font-semibold text-sm">
          Avaliações do google
        </h3>
      </div>

      <div className="mt-3 flex overflow-x-scroll lg:overflow-hidden w-full snap-x snap-mandatory max-w-screen-lg mx-auto justify-between snap-start ">
        <div className="snap-center mx-3">
          <CardsGoogle
            author="Cleto Cavalcanti"
            content='Rapidez no atendimento (via telefone)
       e eficiência no trato "on-line", quando necessário; também atende presencial. Recomendo.'
            stars={4}
          />
        </div>

        <div className="snap-center mx-3">
          <CardsGoogle
            author="Renata Marinho"
            content="Profissional exemplar, ótimo atendimento."
            stars={5}
          />
        </div>

        <div className="snap-center mx-3">
          <CardsGoogle
            author="Marcio Arruda"
            content="Minha experiência como cliente do escritório da
             Tarsila Cavalcante foi uma boa, uma causa uma seg..."
            stars={5}
          />
        </div>
      </div>
    </section>
  )
}
