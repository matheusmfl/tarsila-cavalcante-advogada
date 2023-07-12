import { CtaButton } from './microComponents/CtaButton'

export function Hero() {
  return (
    <main className="py-24 px-6 bg-hero-bg bg-center">
      {/* Container principal */}
      <div className="flex flex-col gap-5">
        <h1 className="font-inter text-[28px] font-semibold leading-9 text-center text-[#FDBA74]">
          Simplifique o seu divórcio com a ajuda de uma Advogada especialista
        </h1>

        <span className="text-slate-50 font-inter font-semibold leading-5 text-center">
          Em um momento tão delicado, busque alguém com experiência para te
          guiar sem causar mais complicações.
        </span>

        <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
      </div>
    </main>
  )
}
