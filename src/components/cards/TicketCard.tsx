import { TicketCardType } from '../../AppTypes';

export const TicketCard = ({
  headline,
  price,
  info,
  textColor,
  bgColor,
}: TicketCardType) => {
  return (
    <article
      className={`flex flex-col items-center justify-center text-center gap-y-8 rounded-20 w-full max-w-[412px] h-[412px] p-6 ${bgColor} ${textColor}`}
    >
      <div className="flex flex-col items-center justify-center px-12">
        <h3 className="text-2xl font-bold uppercase">{headline}</h3>
        <h4 className="text-2xl">{price}</h4>
        <p className="text-lg max-w-[412px]">{info}</p>
      </div>
    </article>
  );
};
