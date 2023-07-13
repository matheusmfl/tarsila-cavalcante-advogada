import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/divorcio/Hero'
import { Section1 } from '@/app/components/divorcio/Section1'
import { Section2 } from '@/app/components/divorcio/Section2'
import { SectionAccordeon } from '@/app/components/divorcio/SectionAccordeon'

export default function Divorcio() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <SectionAccordeon />
    </>
  )
}
