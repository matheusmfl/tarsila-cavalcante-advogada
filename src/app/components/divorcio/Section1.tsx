import Image from 'next/image'
import { IconsComponent } from './microComponents/IconsComponent'
import check from '../../../assets/check.svg'
import { CtaButton } from './microComponents/CtaButton'

export function Section1() {
  return (
    <section className="py-6 bg-slate-100 w-full">
      <div className="px-[31px] -translate-y-20 md:-translate-y-16">
        <IconsComponent />
      </div>

      {/* Main Container */}
      <div className="px-6 flex flex-col gap-6 xl:flex-row xl:px-[120px]">
        {/* Texto1 */}

        {/* Container para XL */}
        <div className="xl:w-[580px]">
          <span className="text-slate-700 font-roboto text-base font-medium leading-6 ">
            <strong>Conte com uma especialista.</strong> Não cometa o erro de
            contratar profissionais generalistas. Tenha uma equipe especializada
            e atenciosa representando o seu caso.
          </span>
        </div>

        {/* container2 para XL */}
        <div className="xl:w-[580px] xl:flex xl:flex-col xl:gap-6 flex flex-col gap-6">
          {/* Texto laranja */}
          <h2 className="text-center text-amber-600 font-roboto text-xl md:text-[36px] font-semibold leading-7 md:leading-10">
            Vantagens em nos escolher para representar o seu divórcio:
          </h2>

          {/* Texto com checkpoints */}
          <div className="flex flex-col gap-2 font-roboto font-normal text-slate-600 leading-6">
            {/* Texto1 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span>
                Recomendação das melhores práticas
                <br className="md:hidden" /> alinhadas aos seus interesses;
              </span>
            </div>
            {/* Texto2 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span>
                Agilidade processual na resolução do{' '}
                <br className="md:hidden" /> caso que outros escritórios demoram{' '}
                <br className="md:hidden" /> meses;
              </span>
            </div>

            {/* Texto3 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span>
                Nossos métodos não causam <br className="md:hidden" />{' '}
                desconforto a sua família;
              </span>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-center xl:items-start xl:justify-start">
            <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
          </div>
        </div>
      </div>
    </section>
  )
}
