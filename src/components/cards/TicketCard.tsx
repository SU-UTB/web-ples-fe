type Props = {
  img: string;
  alt: string;
  headline: string;
  price: string;
  info: string;
};

export const TicketCard = ({ img, alt, headline, price, info }: Props) => {
  return (
    <article className="flex flex-col items-center text-center gap-y-8 bg-card-grey">
      <img
        width={412}
        height={412}
        src={img}
        alt={alt}
        className="rounded-20 bg-card-grey shadow-card w-full max-w-[412px] max-h-[412px] object-cover"
      />
      <div>
        <h3 className="text-2xl font-semibold uppercase">{headline}</h3>
        <h4 className="text-2xl">{price}</h4>
        <p className="text-lg max-w-[450px]">{info}</p>
      </div>
    </article>
  );
};
