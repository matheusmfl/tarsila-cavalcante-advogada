import { Accordeon } from './microComponents/Accordion'
import { CtaButton } from './microComponents/CtaButton'

export function SectionAccordeon() {
  return (
    <section className="bg-slate-100 px-6 py-10 flex flex-col gap-7">
      <Accordeon />
      <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
    </section>
  )
}
