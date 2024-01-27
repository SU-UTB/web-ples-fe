type Props = {
  title: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  isHeadlineBold?: boolean;
};

export const ContactCard = ({
  title,
  name,
  position,
  email,
  phone,
  isHeadlineBold = true,
}: Props) => {
  return (
    <div className="flex flex-col py-2 text-xl text-contact-grey">
      <p className={isHeadlineBold ? 'font-bold' : ''}>
        {title} <span className="uppercase">{name}</span>
      </p>
      <p>{position}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  );
};
