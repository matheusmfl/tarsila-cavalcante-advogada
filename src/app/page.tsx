import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { SecondSection } from './components/SecondSection'
import { SectionGoogle } from './components/SectionGoogle'
import { ThirdSection } from './components/ThirdSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <CtaSection />
      <SectionGoogle />
      <Footer />
    </>
  )
}
