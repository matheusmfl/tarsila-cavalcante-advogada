import { CardsGoogleDivorcio } from './microComponents/CardsGoogleDivorcio'

export function Section3() {
  return (
    <section className="py-10 px-6 flex items-center justify-center flex-col gap-8 bg-slate-900 w-full">
      <h2 className="text-center text-slate-50 font-roboto text-xl font-semibold leading-7">
        O que dizem NOSSOS CLIENTES:
      </h2>

      <h3 className="text-center text-slate-50 font-roboto text-base font-semibold leading-7">
        4,9 🌟 Avaliações do Google
      </h3>

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
    </section>
  )
}
