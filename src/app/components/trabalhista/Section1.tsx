import Image from 'next/image'
import check from '../../../assets/orange-check.svg'

export function Section1() {
  return (
    <section className="px-4 pb-[40px] lg:px-[120px] flex items-center justify-center w-full">
      {/* Container dos cards */}
      <div className="w-full flex md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-4 lg:gap-9 lg:px-20 lg:py-10 lg:grid-rows-3 flex-col bg-slate-50 py-10 px-6 rounded-xl shadow-2xl gap-5 -translate-y-10 z-30">
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Calculo e cobrança de
            <br className="md:hidden" /> rescisão
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Horas extras
          </span>
        </div>

        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Férias
          </span>
        </div>

        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Acidente de trabalho
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Aviso prévio
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Assédio moral
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Estabilidade grávida
          </span>
        </div>
        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Seguro desemprego <br className="md:hidden" /> e FGTS
          </span>
        </div>

        {/* Separador */}
        <div className="flex gap-4">
          <Image
            src={check}
            alt="Check"
            className="scale-100 h-[24px] w-[24px] md:scale-100"
          />
          <span className="pr-4 md:pr-0 text-slate-700 font-inter text-xl font-semibold leading-[20px]">
            Registro da Carteira
            <br className="md:hidden" /> de Trabalho
          </span>
        </div>
      </div>
    </section>
  )
}
