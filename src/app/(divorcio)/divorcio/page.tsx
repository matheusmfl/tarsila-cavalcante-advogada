import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { DividerImageSection } from '@/app/components/divorcio/DividerImageSection'
import { Hero } from '@/app/components/divorcio/Hero'
import { Section1 } from '@/app/components/divorcio/Section1'
import { Section2 } from '@/app/components/divorcio/Section2'
import { Section3 } from '@/app/components/divorcio/Section3'
import { SectionAccordeon } from '@/app/components/divorcio/SectionAccordeon'
import { SectionForm } from '@/app/components/divorcio/SectionForm'

export default function Divorcio() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <SectionAccordeon />
      <Section3 />
      <DividerImageSection />
      <SectionForm />
      <Footer />
    </>
  )
}
