type Props = {
  img: string
  alt: string
  headline: string
  price: string
  capacity: string
  info: string
}

export const TicketDiv = ({ img, alt, headline, price, capacity, info }: Props) => {
  return (
    <div className="flex flex-col justify-start items-center text-center p-4 ">
      <img 
        src={img} 
        alt={alt} 
        style={{ maxHeight: '1080px', maxWidth: '1080px', objectFit: 'cover' }}
        className="bg-gray-100 rounded-lg shadow-xl mb-4"
      />
      <div className="uppercase font-bold">{headline}</div>
      <div>{price}</div>
      <div>{capacity}</div>
      <div className="max-w-[450px] max-h-[50px] overflow-y-auto px-2.5">{info}</div>
    </div>
  )
}
