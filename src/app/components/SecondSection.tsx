import Image from 'next/image'
import image from '../../../public/g1Image.png'

export function SecondSection() {
  return (
    <section className="p-5 bg-white flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-slate-950 text-center font-medium">
          Ter acesso ao FIES é um direito seu!
        </h2>
        <span className="text-base text-slate-950 text-center">
          Conte com nossa ajuda para garantir que você tenha a educação que
          merece.
        </span>
      </div>

      <div className="h-80 w-full">
        <Image
          alt="Foto do G1 informando alunos que ficaram conseguir se matricular"
          src={image}
        />
      </div>
    </section>
  )
}
