type Props = {
  img: string
  alt: string
  headline: string
  price: string
  info: string
}

export const TicketCard = ({ img, alt, headline, price, info }: Props) => {
  return (
    <div className="flex flex-col items-center text-center mx-5">
      <img
        width={450}
        height={450} 
        src={img} 
        alt={alt} 
        className="bg-gray-100 rounded-lg shadow-xl max-h-[1080px] max-w-[1080px] object-cover mb-4"
      />
      <div className="uppercase text-2xl font-semibold">{headline}</div>
      <div className="text-2xl">{price}</div>
      <div className="text-lg max-w-[450px] max-h-[70px] overflow-y-auto">{info}</div>
    </div>
  )
}
