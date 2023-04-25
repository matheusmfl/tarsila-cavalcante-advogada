import Image from 'next/image'
import image from '../../../public/g1Image.png'

export function SecondSection() {
  return (
    <section className="p-5 bg-slate-50 flex flex-col lg:px-28 lg:flex-row lg:pt-8 lg:h-[500px]">
      <div className="flex flex-col gap-4 lg:mr-2 lg:mt-20">
        <h2 className="text-xl text-slate-950 text-center font-medium lg:text-4xl lg:font-semibold lg:w-[320px] lg:text-left">
          Ter acesso ao FIES é um direito seu!
        </h2>
        <span className="text-base text-slate-950 text-center lg:text-left lg:text-xl">
          Conte com nossa ajuda para garantir que você tenha a educação que
          merece.
        </span>
      </div>

      <div className="h-80 w-full lg:h-60">
        <Image
          alt="Foto do G1 informando alunos que ficaram conseguir se matricular"
          src={image}
        />
      </div>
    </section>
  )
}
