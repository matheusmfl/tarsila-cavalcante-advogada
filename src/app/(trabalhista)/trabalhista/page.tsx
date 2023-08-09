import { Hero } from '@/app/components/trabalhista/Hero'
import { Section2 } from '@/app/components/trabalhista/Section2'
import { Section3 } from '@/app/components/trabalhista/Section3'
import { Section1 } from '@/app/components/trabalhista/Section1'
import { SectionAccordeon } from '@/app/components/divorcio/SectionAccordeon'
import { SectionFeedback } from '@/app/components/trabalhista/SectionFeedback'
import { SectionForm } from '@/app/components/trabalhista/SectionForm'
import { Footer } from '@/app/components/Footer'
import { SectionDividerForm } from '@/app/components/trabalhista/SectionDividerForm'
import { HeaderTrabalhista } from '@/app/components/trabalhista/HeaderTrabalhista'

export default function Trabalhista() {
  return (
    <>
      <HeaderTrabalhista />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionAccordeon />
      <SectionFeedback />
      <SectionDividerForm />
      <SectionForm />
      <Footer />
    </>
  )
}
