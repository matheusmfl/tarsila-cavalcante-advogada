import { CardsGoogleDivorcio } from '../divorcio/microComponents/CardsGoogleDivorcio'

export function SectionFeedback() {
  return (
    <section className="py-10 px-6 flex items-center justify-center flex-col gap-8 md:gap-10 bg-slate-900 w-full">
      <h2 className="text-center text-slate-50 font-roboto text-xl md:text-[28px] font-semibold leading-7">
        O que dizem NOSSOS CLIENTES:
      </h2>

      <h3 className="text-center text-slate-50 md:text-[28px] font-roboto text-base font-semibold leading-7">
        4,9 🌟 Avaliações do Google
      </h3>

      <div className="flex flex-col md:flex-row gap-5 xl:hidden">
        <CardsGoogleDivorcio
          author={`Robson Maranhão`}
          stars={5}
          content={`Dra. Tarcila além de uma excelente advogada, é competente e também é um ser humano incrível;Atenciosa, escuta o cliente, anota os mínimos detalhes, tira dúvida do cliente, é "ágil", "competente", tem domínio no que faz....Vale muito apena ser cliente da Dra. Tarcila pois ela nos passa 100% de segurança...`}
        />
        <CardsGoogleDivorcio
          author={`Renata Marinho`}
          stars={5}
          content={`Profissional exemplar, ótimo atendimento`}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 xl:hidden">
        <CardsGoogleDivorcio
          author={`Esdras Morame`}
          stars={5}
          content={`Está com problemas ? Tarsila advogada é a solução. Excelente profissional,  recomendo 100%. Resolveu minha causa com muita atenção e proatividade.`}
        />
        <CardsGoogleDivorcio
          author={`Bruno Vidal`}
          stars={5}
          content={`Minha experiência como cliente do escritório da Tarsila Cavalcante foi uma boa, uma causa uma seg...`}
        />
      </div>

      {/* Div para XL */}
      <div className="hidden xl:flex xl:gap-2">
        <CardsGoogleDivorcio
          author={`Robson Maranhão`}
          stars={5}
          content={`Dra. Tarcila além de uma excelente advogada, é competente e também é um ser humano incrível;Atenciosa, escuta o cliente, anota os mínimos detalhes, tira dúvida do cliente, é "ágil", "competente", tem domínio no que faz....Vale muito apena ser cliente da Dra. Tarcila pois ela nos passa 100% de segurança...`}
        />
        <CardsGoogleDivorcio
          author={`Renata Marinho`}
          stars={5}
          content={`Profissional exemplar, ótimo atendimento`}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 xl:hidden">
        <CardsGoogleDivorcio
          author={`Esdras Morame`}
          stars={5}
          content={`Está com problemas ? Tarsila advogada é a solução. Excelente profissional,  recomendo 100%. Resolveu minha causa com muita atenção e proatividade.`}
        />
        <CardsGoogleDivorcio
          author={`Bruno Vidal`}
          stars={5}
          content={`Minha experiência como cliente do escritório da Tarsila Cavalcante foi uma boa, uma causa uma seg...`}
        />
      </div>
    </section>
  )
}
