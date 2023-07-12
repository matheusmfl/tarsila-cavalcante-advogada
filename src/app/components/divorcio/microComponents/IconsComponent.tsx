import Image from 'next/image'
import icon1 from '../../../../assets/icon1.svg'
import icon2 from '../../../../assets/icon2.svg'
import icon3 from '../../../../assets/icon3.svg'

export function IconsComponent() {
  return (
    <div className="py-10 px-6 flex flex-col gap-5 rounded-xl shadow-xl bg-slate-50">
      {/* Primeiros 2 cards */}
      <div className="flex">
        {/* Card1 */}
        <div className="flex flex-col items-center justify-center gap-1 w-[140px] h-[100px]">
          <Image src={icon1} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DIVÓRCIO <br />
            LITIGIOSO
          </span>
        </div>

        {/* Card2 */}
        <div className="flex flex-col items-center justify-center gap-1 w-[140px] h-[100px]">
          <Image src={icon2} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DIVÓRCIO NO
            <br />
            CARTÓRIO
          </span>
        </div>
      </div>
      {/* Outros 2 cards */}

      <div className="flex">
        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center gap-1 w-[140px] h-[100px]">
          <Image src={icon3} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DIVÓRCIO <br />
            AMIGÁVEL
          </span>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center gap-1 w-[140px] h-[100px]">
          <Image src={icon3} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DISSOLUÇÃO DE <br />
            UNIÃO INSTÁVEL
          </span>
        </div>
      </div>
    </div>
  )
}
