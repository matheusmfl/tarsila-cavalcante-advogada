import { CtaButton } from './microComponents/CtaButton'

export function Hero() {
  return (
    <main className="py-24 px-6 w-full md:py-16 bg-hero-bg bg-center">
      {/* Container principal */}
      <div className="flex flex-col gap-5">
        <h1 className="font-inter text-[28px] md:text-4xl font-semibold leading-9 text-center text-[#FDBA74]">
          Simplifique o seu divórcio com a ajuda de uma Advogada especialista
        </h1>

        <span className="text-slate-50 text-base md:text-xl font-inter font-semibold leading-5 text-center">
          Em um momento tão delicado, busque alguém com experiência para te
          guiar sem causar mais complicações.
        </span>

        <div className="md:flex md:items-center md:justify-center">
          <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
        </div>
      </div>
    </main>
  )
}
