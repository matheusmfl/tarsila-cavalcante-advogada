import Image from 'next/image'
import check from '../../../assets/orange-check.svg'

export function Section1() {
  return (
    <section className="px-10 pb-[40px] flex items-center justify-center w-full">
      {/* Container dos cards */}
      <div className="w-full flex flex-col bg-slate-50 py-10 px-6 rounded-xl shadow-2xl gap-5 -translate-y-10 z-30">
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Calculo e cobrança de
            <br /> rescisão
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Horas extras
          </span>
        </div>

        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Acidente de trabalho
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Aviso prévio
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Assédio moral
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Estabilidade grávida
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Seguro desemprego <br /> e FGTS
          </span>
        </div>

        {/* Separador */}
        <div className="flex gap-4">
          <div className="h-full items-start justify-start">
            <Image src={check} alt="Check" className="scale-125" />
          </div>
          <span className="pr-4 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Registro da Carteira
            <br /> de Trabalho
          </span>
        </div>
      </div>
    </section>
  )
}
