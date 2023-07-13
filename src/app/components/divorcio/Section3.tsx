import { CardsGoogleDivorcio } from './microComponents/CardsGoogleDivorcio'

export function Section3() {
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
          author={`Cleto Cavalcanti`}
          stars={5}
          content={`Rapidez no atendimento (via telefone) e eficiência no trato " on-line", quando necessário; também atende presencial. Recomendo.`}
        />
        <CardsGoogleDivorcio
          author={`Renata Marinho`}
          stars={5}
          content={`Profissional exemplar, ótimo atendimento`}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 xl:hidden">
        <CardsGoogleDivorcio
          author={`Marcio Arruda`}
          stars={5}
          content={`Excelente advogada! Muito prestativa com um atendimento maravilhoso, gratidão imensa pela ajuda, recomendo de olhos fechados.`}
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
          author={`Cleto Cavalcanti`}
          stars={5}
          content={`Rapidez no atendimento (via telefone) e eficiência no trato " on-line", quando necessário; também atende presencial. Recomendo.`}
        />
        <CardsGoogleDivorcio
          author={`Renata Marinho`}
          stars={5}
          content={`Profissional exemplar, ótimo atendimento`}
        />
        <CardsGoogleDivorcio
          author={`Marcio Arruda`}
          stars={5}
          content={`Excelente advogada! Muito prestativa com um atendimento maravilhoso, gratidão imensa pela ajuda, recomendo de olhos fechados.`}
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
