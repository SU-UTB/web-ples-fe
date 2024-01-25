type Props = {
  title: string;
  name: string;
  position: string;
  email: string;
  phone: string;
}

export const ContactCard = ({title, name, position, email, phone}: Props) => {

  return(
    <div className="flex flex-col text-xl py-2">
      <p className="font-bold "><span>{title}</span>{" "}<span className="uppercase">{name}</span></p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}
