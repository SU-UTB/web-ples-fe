import { TicketDiv } from "../divs/TicketDiv"
import { ContactDiv } from "../divs/ContactDiv"
import { InfoCard } from "../divs/InfoCard"

export const TicketsSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <div className="grid grid-cols-3 grid-rows-1 justify-center items-center">
        <div className="px-8 col-start-1 col-end-3">
          <div className="uppercase font-bold text-4xl mb-4 font-numbers">
            Vstupenky
          </div>
          <div className="text-lg ">
            Srdečně vás zveme na XXII. ročník Reprezentačního plesu Univerzity
            Tomáše Bati ve Zlíně. Již 16. 2. 2024 se v Kongresovém centru ve
            Zlíně společně přeneseme na Olymp a poznáme, jaké to je, KDYŽ BOHOVÉ
            TANČÍ. Ať už jste obyčejný smrtelník, polobůh nebo samotný Zeus, o
            ples pod Olympem určitě nesmíte přijít! Aktuální dění a novinky
            můžete sledovat na Facebookové události.
          </div>
        </div>
        <div className="max-w-md px-8 col-start-3 col-end-4">
          <InfoCard headline="Bližší informace k předprodeji:">
            <ContactDiv
              name="Pavlína Šromotová"
              position=""
              email="sromotova@sutb.cz"
              phone="+421 918 234 777"
            />
          </InfoCard>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
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
