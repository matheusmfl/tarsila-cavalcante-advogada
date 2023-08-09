import { Accordeon } from '../divorcio/microComponents/Accordion'
import { CtaButton } from '../divorcio/microComponents/CtaButton'

export function SectionAccordeon() {
  return (
    <section className="bg-slate-100 px-6 py-10 flex flex-col gap-7 w-full">
      <div className="w-full">
        <Accordeon type="trabalhista" />
      </div>
      <div className="md:flex md:items-center md:justify-center">
        <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
      </div>
    </section>
  )
}
