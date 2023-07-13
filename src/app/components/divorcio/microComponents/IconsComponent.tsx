import Image from 'next/image'
import icon1 from '../../../../assets/icon1.svg'
import icon2 from '../../../../assets/icon2.svg'
import icon3 from '../../../../assets/icon3.svg'
import icon4 from '../../../../assets/icon4.svg'

export function IconsComponent() {
  return (
    <div className="py-10 px-6 xl:px-20 flex flex-col md:items-center md:justify-center md:flex-row gap-5 xl:justify-between rounded-xl shadow-xl bg-slate-50">
      {/* Primeiros 2 cards */}
      <div className="flex xl:justify-between xl:w-full xl:hidden">
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

      <div className="flex xl:justify-between xl:w-full xl:hidden">
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
          <Image src={icon4} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DISSOLUÇÃO DE <br />
            UNIÃO INSTÁVEL
          </span>
        </div>
      </div>
      {/* Div para XL */}

      <div className="hidden xl:flex xl:w-full xl:justify-between">
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
          <Image src={icon4} alt="Icone Justiça" />
          <span className="font-inter text-base font-semibold leading-5 text-slate-700">
            DISSOLUÇÃO DE <br />
            UNIÃO INSTÁVEL
          </span>
        </div>
      </div>
    </div>
  )
}
