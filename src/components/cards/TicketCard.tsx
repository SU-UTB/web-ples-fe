import { TicketCardType } from '../../AppTypes';

type TicketCardProps = TicketCardType & {
  textColor?: string; // Optional parameter for text color
};

export const TicketCard = ({
  img,
  alt,
  headline,
  price,
  info,
  textColor = 'white', // Default text color is white
}: TicketCardProps) => {
  return (
    <article className="flex flex-col items-center text-center gap-y-8 bg-[#F3E7E7] relative">
      <div className="relative w-full max-w-[412px]">
        <img
          width={412}
          height={412}
          src={img}
          alt={alt}
          className="rounded-20 bg-card-grey shadow-card w-full max-w-[412px] max-h-[412px]"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-12"
          style={{ color: textColor }} // Dynamically set the text color
        >
          <h3 className="text-2xl font-semibold uppercase">{headline}</h3>
          <h4 className="text-2xl">{price}</h4>
          <p className="text-lg max-w-[450px]">{info}</p>
        </div>
      </div>
    </article>
  );
};
