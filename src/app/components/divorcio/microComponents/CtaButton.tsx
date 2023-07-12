import Image from 'next/image'
import wpp from '../../../../assets/wppIcon.svg'

export function CtaButton({ title }: { title: string }) {
  return (
    <button className="w-full bg-[#009F16] font-roboto text-base font-medium leading-5 flex gap-[10px] py-[14px] items-center justify-center rounded-[32px]">
      {title}
      <Image src={wpp} alt="logo do whatsapp" />
    </button>
  )
}
