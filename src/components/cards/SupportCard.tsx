import calendarIcon from '../../assets/icons/calendar.svg';

type Props = {
  img: string;
  alt: string;
  name: string;
  date: string;
};

export const SupportCard = ({ img, alt, name, date }: Props) => {
  return (
    <article className="relative flex items-start justify-between p-4 my-4 bg-card-grey rounded-20 shadow-card">
      <div className="flex items-center gap-x-4">
        <img src={img} alt={alt} className="w-24 h-24 rounded-lg" />
        <div className="space-y-1">
          <h3 className="text-xl font-semibold md:text-2xl">{name}</h3>
          <p className="md:text-xl">{date}</p>
        </div>
      </div>
      <img
        src={calendarIcon}
        alt="kalendář"
        className="absolute w-5 h-5 right-4 bottom-4"
      />
    </article>
  );
};
