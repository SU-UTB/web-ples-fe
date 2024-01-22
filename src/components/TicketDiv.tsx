import { CSSProperties } from 'react';

type Props = {
  img: string
  alt: string
  headline: string
  price: string
  capacity: string
  info: string
}

const infoStyle: CSSProperties = {
  maxWidth: '450px',
  maxHeight: '50px', 
  overflowY: 'auto', 
  padding: '0 10px', 
};

const imgStyle: CSSProperties = {
  backgroundColor: '#f7fafc', 
  borderRadius: '0.5rem',     
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
  WebkitBoxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
  MozBoxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
  filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))',
  maxHeight: '1080px', 
  maxWidth: '1080px',  
  height: 'auto',     
  width: 'auto',      
  objectFit: 'cover', 
}

export const TicketDiv = ({ img, alt, headline, price, capacity, info  }: Props) => {
  return (
    <div className="flex flex-col justify-start items-center text-center p-4 ">
      <img src={img} alt={alt} style={imgStyle} className="mb-4"/>
      <div className="uppercase font-bold ">{headline}</div>
      <div className=" ">{price}</div>
      <div>{capacity}</div>
      <div style={infoStyle}>{info}</div>
    </div>
  )
}
