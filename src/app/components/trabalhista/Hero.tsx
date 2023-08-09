import { CtaButton } from '../divorcio/microComponents/CtaButton'

export function Hero() {
  return (
    <main className="py-24 -z-10 px-6 w-full md:py-16 xl:bg-no-repeat xl:px-32 xl:flex xl:items-center xl:justify-center xl:bg-cover bg-hero-bg bg-center">
      {/* Container principal */}
      <div className="flex flex-col gap-5 xl:gap-10 xl:py-14 ">
        <h1 className="font-inter text-[28px] md:text-4xl font-semibold leading-9 text-center text-[#FDBA74]">
          Advogados Trabalhistas
          <br className="hidden xl:block" /> especialistas e competentes
        </h1>

        <span className="text-slate-50 text-base md:text-xl font-inter font-semibold leading-5 text-center">
          Tenha uma equipe de advogados trabalhando para garantir os seus
          direitos de forma ágil, humanizada e acessível.
        </span>

        <div className="md:flex md:items-center md:justify-center">
          <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
        </div>
      </div>
    </main>
  )
}
