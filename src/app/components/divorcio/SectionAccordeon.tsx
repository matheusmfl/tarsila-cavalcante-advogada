import { Accordeon } from './microComponents/Accordion'
import { CtaButton } from './microComponents/CtaButton'

export function SectionAccordeon() {
  return (
    <section className="bg-slate-100 px-6 py-10 flex flex-col gap-7 w-full">
      <div className="w-full">
        <Accordeon type="divorcio" />
      </div>
      <div className="md:flex md:items-center md:justify-center">
        <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
      </div>
    </section>
  )
}
