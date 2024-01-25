type Props = {
  img: string
  alt: string
  headline: string
  price: string
  capacity: string
  info: string
}

export const TicketCard = ({ img, alt, headline, price, capacity, info }: Props) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        width={450}
        height={450} 
        src={img} 
        alt={alt} 
        className="bg-gray-100 rounded-lg shadow-xl max-h-[1080px] max-w-[1080px] object-cover mb-4"
      />
      <div className="uppercase font-bold">{headline}</div>
      <div>{price}</div>
      <div>{capacity}</div>
      <div className="max-w-[450px] max-h-[50px] overflow-y-auto">{info}</div>
    </div>
  )
}
