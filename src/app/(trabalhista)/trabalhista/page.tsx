import { HeaderDivorcio } from '@/app/components/divorcio/HeaderDivorcio'
import { Hero } from '@/app/components/trabalhista/Hero'
import { Section2 } from '@/app/components/trabalhista/Section2'
import { Section3 } from '@/app/components/trabalhista/Section3'
import { Section1 } from '@/app/components/trabalhista/Section1'
import { SectionAccordeon } from '@/app/components/divorcio/SectionAccordeon'
import { SectionFeedback } from '@/app/components/trabalhista/SectionFeedback'

export default function Trabalhista() {
  return (
    <>
      <HeaderDivorcio />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionAccordeon />
      <SectionFeedback />
    </>
  )
}
