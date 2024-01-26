type Props = {
  img: string
  alt: string
  headline: string
  price: string
  info: string
}

export const TicketCard = ({ img, alt, headline, price, info }: Props) => {
  return (
    <article className="flex flex-col items-center text-center">
      <img
        width={412}
        height={412} 
        src={img} 
        alt={alt} 
        className="bg-gray-100 rounded-lg shadow-xl w-full max-w-[412px] max-h-[412px] object-cover mb-4"
      />
      <h3 className="text-2xl font-semibold uppercase">{headline}</h3>
      <h4 className="text-2xl">{price}</h4>
      <p className="text-lg max-w-[450px] max-h-[70px] overflow-y-auto">{info}</p>
    </article>
  )
}
