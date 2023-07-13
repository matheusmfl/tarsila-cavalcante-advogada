import starLive from '../../../../../public/liveStar.svg'
import deadStar from '../../../../../public/deadStar.svg'
import Image from 'next/image'

interface props {
  author: string
  stars: number
  content: string
}

export function CardsGoogleDivorcio({ author, stars, content }: props) {
  const maxStars = 5
  const rating = stars
  const emptyStars = maxStars - rating

  return (
    <div className="p-5 flex flex-col gap-3 items-left bg-slate-50 rounded-lg w-[320px] xl:scale-90">
      <h4 className="text-slate-950">{author}</h4>
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <Image src={starLive} alt="" key={`full_${i}`} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <Image src={deadStar} alt="" key={`empty_${i}`} />
        ))}
      </div>
      <span className="text-slate-950 text-sm font-normal line-clamp-3 text-left">
        {content}
      </span>
    </div>
  )
}
