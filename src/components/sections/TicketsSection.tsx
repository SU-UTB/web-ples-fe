import { TicketDiv } from "../TicketDiv"

export const TicketsSection = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="uppercase font-bold text-xl mb-4">Vstupenky</div>
      <div className="flex">
        <TicketDiv
          img="/tickets/Stani1.png"
          alt="Stání"
          headline="na stání"
          price="350,-"
          capacity="500/500"
          info="(možnost sednout si na volně dostupné sedačky bez stolu a bez možnosti místenky)"
        />
        <TicketDiv
          img="/tickets/Sezeni1.png"
          alt="Sezení"
          headline="na sezení"
          price="500,-"
          capacity="500/500"
          info="(sezení bez rautu v 2. patře)"
        />
        <TicketDiv
          img="/tickets/SezeniRaut1.png"
          alt="Sezení s rautem"
          headline="na sezení s rautem"
          price="750,-"
          capacity="500/500"
          info="(nezahrnuje nápoje)"
        />
      </div>
    </div>
  )
}
