import { HeaderDivorcio } from '@/app/components/divorcio/HeaderDivorcio'
import { Hero } from '@/app/components/divorcio/Hero'
import { Section2 } from '@/app/components/trabalhista/Section2'
import { Section1 } from '@/app/components/trabalhista/Sections1'

export default function Trabalhista() {
  return (
    <>
      <HeaderDivorcio />
      <Hero />
      <Section1 />
      <Section2 />
    </>
  )
}
