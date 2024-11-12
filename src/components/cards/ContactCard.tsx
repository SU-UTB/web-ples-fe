type Props = {
  title?: string;
  name: string;
  position: string;
  email: string;
  phone: string;
};

export const ContactCard = ({ title, name, position, email, phone }: Props) => {
  return (
    <div className="flex flex-col py-2 text-gray-900 space-y-2">
      <hgroup className="">
        <h3 className="font-bold text-lg sm:text-xl">
          {title} <span className="uppercase">{name}</span>
        </h3>
        <p className="text-lg sm:text-xl">{position}</p>
      </hgroup>
      <div className="space-y-1 flex flex-col sm:text-lg">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
};
