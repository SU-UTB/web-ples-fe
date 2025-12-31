type Props = {
  title?: string;
  name: string;
  position: string;
  email: string;
  phone: string;
};

export const ContactCard = ({ title, name, position, email, phone }: Props) => {
  return (
    <div className="flex flex-col py-2 space-y-2">
      <hgroup>
        <h3 className="text-xl md:text-xl">
          {title} <span className="font-bold text-2xl md:text-2xl">{name}</span>
        </h3>
        <p className="text-lg sm:text-xl">{position}</p>
      </hgroup>
      <div className="space-y-1 flex flex-col sm:text-lg">
        <a
          href={`mailto:${email}`}
          className="hover:text-dark-violet transition-all"
        >
          {email}
        </a>
        <a
          href={`tel:${phone}`}
          className="hover:text-dark-violet transition-all"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};
