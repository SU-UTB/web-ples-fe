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
        <h3 className="font-bold text-lg sm:text-xl">
          {title} <span className="">{name}</span>
        </h3>
        <p className="text-lg sm:text-xl">{position}</p>
      </hgroup>
      <div className="space-y-1 flex flex-col sm:text-lg">
        <a
          href={`mailto:${email}`}
          className="hover:text-[#B22547] transition-all"
        >
          {email}
        </a>
        <a
          href={`tel:${phone}`}
          className="hover:text-[#B22547] transition-all"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};
