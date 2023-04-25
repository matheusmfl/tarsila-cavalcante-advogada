import { Cards } from './Cards'

export function ThirdSection() {
  return (
    <section className="flex flex-col px-5 py-10 bg-slate-100 lg:w-full lg:items-center lg:px-20 lg:py-20">
      <h2 className="text-slate-950 font-semibold text-xl text-center lg:w-[600px] lg:text-4xl">
        Escritório especializado em Direito do Consumidor e crédito estudantil
      </h2>

      <div className="flex flex-col gap-5 lg:gap-8 mt-10 lg:flex-row">
        <Cards
          imageType="image1"
          title="ADVOCACIA DE REFERÊNCIA"
          subtitle="CONTE COM PROFISSIONAIS EXEMPLARES DO MERCADO JURÍDICO"
        />
        <Cards
          imageType="image2"
          title="PROFISSIONAL ESPECIALIZADO"
          subtitle="O SEU CASO REPRESENTADO POR UMA ADVOCACIA DE REFERENCIA"
        />
        <Cards
          imageType="image3"
          title="ADVOCACIA DE REFERÊNCIA"
          subtitle="ATENDIMENTO ONLINE EM TODO PAÍS COM A AGILIDADE NECESSÁRIA"
        />
      </div>
    </section>
  )
}
