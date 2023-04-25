import Image from 'next/image'
import supportIcon from '../../../public/icons/Support.svg'
import whatsappIcon from '../../../public/icons/ic_baseline-whatsapp.svg'

export function CtaSection() {
  return (
    <section className="bg-slate-50 flex flex-col py-10 px-5 gap-5 w-full items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image
          src={supportIcon}
          alt="Icone de suporte ao cliente"
          width={35}
          height={35}
        />
        <h3 className="font-semibold text-xl text-slate-950">
          Inicie agora seu ATENDIMENTO!
        </h3>
      </div>
      <button
        className="flex px-6 py-3 gap-3
       items-center justify-center bg-green-600 hover:bg-green-700 text-slate-50 uppercase rounded-md"
      >
        <a href="#">Quero ajuda especializada</a>
        <Image
          src={whatsappIcon}
          alt="icone whatsapp"
          width={20}
          height={20}
          className="text-white"
        />
      </button>
    </section>
  )
}
