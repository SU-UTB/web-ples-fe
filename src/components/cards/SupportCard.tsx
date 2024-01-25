type Props = {
  img: string
  alt: string
  name: string
  date: string
  icon: string
}

export const SupportCard = ({ img, alt, name, date, icon }: Props) => {
  return(
    <div className="flex items-start justify-between bg-white rounded-lg shadow-lg p-4 my-4">
      <div className="flex">
        <img src={img} alt={alt} className="w-24 h-24 rounded-sm " />
        <div className="px-4">
          <div className="text-2xl font-semibold mb-1">{name}</div>
          <div>{date}</div>
        </div>
      </div>
      <img src={icon} alt="kalendář" className="w-5 h-5 self-end" />
    </div>
  )
}
