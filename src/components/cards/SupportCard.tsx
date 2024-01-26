import calendarIcon from '../../assets/icons/calendar.svg';

type Props = {
  img: string;
  alt: string;
  name: string;
  date: string;
}

export const SupportCard = ({ img, alt, name, date }: Props) => {
  return(
    <article className="flex items-start justify-between p-4 my-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center">
        <img src={img} alt={alt} className="w-24 h-24 rounded-sm" />
        <div className="px-4">
          <p className="mb-1 text-xl font-semibold md:text-2xl">{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <img src={calendarIcon} alt="kalendář" className="self-end w-5 h-5" />
    </article>
  )
}
