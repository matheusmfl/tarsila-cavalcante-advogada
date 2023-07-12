import Image from 'next/image'
import { IconsComponent } from './microComponents/IconsComponent'
import check from '../../../assets/check.svg'
import { CtaButton } from './microComponents/CtaButton'

export function Section1() {
  return (
    <section className="py-6 bg-slate-100">
      <div className="px-[31px] -translate-y-20">
        <IconsComponent />
      </div>

      {/* Main Container */}
      <div className="px-6 flex flex-col gap-6">
        {/* Texto1 */}
        <span className="text-slate-700 font-roboto text-base font-medium leading-6">
          <strong>Conte com uma especialista.</strong> Não cometa o erro de
          contratar profissionais generalistas. Tenha uma equipe especializada e
          atenciosa representando o seu caso.
        </span>

        {/* Texto laranja */}
        <h2 className="text-center text-amber-600 font-roboto text-xl font-semibold leading-7">
          Vantagens em nos escolher para representar o seu divórcio:
        </h2>

        {/* Texto com checkpoints */}
        <div className="flex flex-col gap-2 font-roboto font-normal text-slate-600 leading-6">
          {/* Texto1 */}
          <div className="flex items-start justify-start gap-3">
            <Image src={check} alt="Check laranja" />
            <span>
              Recomendação das melhores práticas
              <br /> alinhadas aos seus interesses;
            </span>
          </div>
          {/* Texto2 */}
          <div className="flex items-start justify-start gap-3">
            <Image src={check} alt="Check laranja" />
            <span>
              Agilidade processual na resolução do <br /> caso que outros
              escritórios demoram <br /> meses;
            </span>
          </div>

          {/* Texto3 */}
          <div className="flex items-start justify-start gap-3">
            <Image src={check} alt="Check laranja" />
            <span>
              Nossos métodos não causam <br /> desconforto a sua família;
            </span>
          </div>
        </div>

        <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
      </div>
    </section>
  )
}
