type Props = {
  name: string
  position: string
  email: string
  phone: string
}

export const ContactDiv = ({name, position, email, phone}: Props) => {

  return(
    <div className="flex flex-col text-xl py-2">
      <div className="font-bold uppercase">{name}</div>
      <div>{position}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  )
}
