type Props = {
  name: string;
  position: string;
  email: string;
  phone: string;
}

export const ContactDiv = ({name, position, email, phone}: Props) => {

  return(
    <div className="flex flex-col text-xl py-2">
      <p className="font-bold uppercase">{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}
