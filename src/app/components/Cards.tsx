import Image from 'next/image'
import icon1 from '../../../public/icons/icon1.svg'
import icon2 from '../../../public/icons/icon2.svg'
import icon3 from '../../../public/icons/icon3.svg'

type CardProps = {
  imageType: 'image1' | 'image2' | 'image3'
  title: string
  subtitle: string
}

export function Cards({ imageType, title, subtitle }: CardProps) {
  let imagePath: string
  if (imageType === 'image1') {
    imagePath = icon1
  } else if (imageType === 'image2') {
    imagePath = icon2
  } else {
    imagePath = icon3
  }

  return (
    <div className="h-56 gap-5 p-5 bg-slate-950 flex flex-col items-center justify-center rounded-md shadow-md shadow-slate-600">
      <Image src={imagePath} alt="Icone de card" width={60} height={60} />
      <h3 className="font-semibold text-lg text-center text-white">{title}</h3>
      <span className="font-normal text-base text-center text-orange-100">
        {subtitle}
      </span>
    </div>
  )
}
