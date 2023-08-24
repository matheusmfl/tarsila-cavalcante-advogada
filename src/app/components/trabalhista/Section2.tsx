import Image from 'next/image'
import { CtaButton } from '../divorcio/microComponents/CtaButton'
import check from '../../../assets/check.svg'

export function Section2() {
  return (
    <>
      {/* Main Container */}
      <div className="px-3 pb-10 flex flex-col gap-6 xl:flex-row xl:px-[120px] xl:w-full xl:gap-60">
        {/* Texto1 */}

        {/* Container para XL */}
        <div className="xl:w-[580px] xl:pt-20">
          <div className="flex flex-col gap-4">
            <span className="text-slate-700 font-roboto text-2xl font-medium leading-6 text-center ">
              <strong className="pb-2 text-center">
                Conte com uma especialista <br />
              </strong>{' '}
            </span>
            <span className="text-slate-700 font-roboto text-lg font-medium leading-6 text-center">
              Não cometa o erro de contratar profissionais generalistas. Tenha
              uma equipe especializada e atenciosa representando o seu caso.
            </span>
          </div>
        </div>

        {/* container2 para XL */}
        <div className="xl:w-[580px] xl:flex xl:flex-col xl:gap-6 flex flex-col gap-6">
          {/* Texto laranja */}
          <h2 className="text-center text-amber-600 font-roboto text-2xl md:text-[36px] font-semibold leading-7 md:leading-10">
            Vantagens em nos escolher para representar o seu divórcio:
          </h2>

          {/* Texto com checkpoints */}
          <div className="flex flex-col gap-2 font-roboto font-normal text-slate-600 leading-6">
            {/* Texto1 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span className="text-xl">
                Recomendação das melhores práticas
                <br className="md:hidden" /> alinhadas aos seus interesses;
              </span>
            </div>
            {/* Texto2 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span className="text-xl">
                Agilidade processual na resolução do{' '}
                <br className="md:hidden" /> caso que outros escritórios demoram{' '}
                <br className="md:hidden" /> meses;
              </span>
            </div>

            {/* Texto3 */}
            <div className="flex items-start justify-start gap-3">
              <Image src={check} alt="Check laranja" />
              <span className="text-xl">
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
    </>
  )
}
