import calendarIcon from '../../assets/icons/calendar.svg';

type Props = {
  img: string;
  alt: string;
  name: string;
  date: string;
}

export const SupportCard = ({ img, alt, name, date, icon }: Props) => {
  return(
    <div className="flex items-start justify-between p-4 my-4 bg-white rounded-lg shadow-lg">
      <div className="flex">
        <img src={img} alt={alt} className="w-24 h-24 rounded-sm " />
        <div className="px-4">
          <div className="mb-1 text-2xl font-semibold">{name}</div>
          <div>{date}</div>
        </div>
      </div>
      <img src={calendarIcon} alt="kalendář" className="self-end w-5 h-5" />
    </div>
  )
}
