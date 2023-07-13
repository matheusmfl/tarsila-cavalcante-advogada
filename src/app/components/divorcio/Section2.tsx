import Image from 'next/image'
import icon1 from '../../../assets/iconCard1.svg'
import icon2 from '../../../assets/iconCard2.svg'
import icon3 from '../../../assets/iconCard3.svg'

export function Section2() {
  return (
    <section className="py-10 md:py-14 px-5 md:px-10 flex flex-col gap-5 md:gap-10 bg-slate-200 w-full">
      <h2 className="text-slate-900 font-roboto text-lg md:text-[36px] font-semibold leading-7 md:leading-10">
        Escritório especializado em Divórcio
      </h2>
      {/* Container Cards */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Card1 */}
        <div className="p-5 flex flex-col w-full items-center justify-center gap-5 shadow-lg bg-slate-50">
          <Image src={icon1} alt="icon" />

          <span className="text-slate-800 text-center font-roboto text-lg font-semibold leading-6">
            ADVOCACIA DE REFERÊNCIA
          </span>

          <span className="text-slate-800 text-center font-roboto text-base font-normal leading-6">
            CONTE COM PROFISSIONAIS
            <br /> EXEMPLARES DO MERCADO JURÍDICO
          </span>
        </div>

        {/* Card2 */}

        <div className="p-5 flex flex-col w-full items-center justify-center gap-5 shadow-lg bg-slate-50">
          <Image src={icon2} alt="icon" />

          <span className="text-slate-800 text-center font-roboto text-lg font-semibold leading-6">
            PROFISSIONAL ESPECIALIZADA
          </span>

          <span className="text-slate-800 text-center font-roboto text-base font-normal leading-6">
            O SEU CASO REPRESENTADO POR
            <br /> ADVOCAIA FOCALIZADA
          </span>
        </div>

        {/* Card3 */}
        <div className="p-5 flex flex-col w-full items-center justify-center gap-5 shadow-lg bg-slate-50">
          <Image src={icon3} alt="icon" />

          <span className="text-slate-800 text-center font-roboto text-lg font-semibold leading-6">
            AGILIDADE PROFISSIONAL
          </span>

          <span className="text-slate-800 text-center font-roboto text-base font-normal leading-6">
            ATENDIMENTO ONLINE EM TODO PAÍS
            <br /> COM A AGILIDADE NECESSÁRIA
          </span>
        </div>
      </div>
    </section>
  )
}
