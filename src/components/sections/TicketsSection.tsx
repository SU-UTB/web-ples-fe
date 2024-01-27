import { ContactCard } from "../cards/ContactCard"
import { InfoCard } from "../cards/InfoCard"
import { TicketCard } from "../cards/TicketCard"

import sezeni from '../../assets/img/tickets/Sezeni1.png'
import sezeniRaut from '../../assets/img/tickets/SezeniRaut1.png'
import stani from '../../assets/img/tickets/Stani1.png'

export const TicketsSection = () => {
  return (
    <section
      id="vstupenky"
      className="flex flex-col items-center gap-8 px-4 mx-auto mt-10 max-w-screen-2xl"
    >
      <div className="flex flex-wrap items-center justify-between w-full">
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl font-numbers">
            Vstupenky
          </h2>
          <div className="flex flex-col max-w-2xl gap-2 text-lg">
            <p>
              Oficiální předprodej vstupenek na XXII. Reprezentační ples
              Univerzity Tomáše Bati bude spuštěn <span className="font-bold">29. 1. 2024</span> a bude probíhat v
              budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555, Zlín.
            </p>
            <p>
              Prodej bude pokračovat od pondělí do čtvrtka od <span className="font-bold">9:00 do 16:00</span> a v
              pátky od <span className="font-bold">9:00 do 12:00</span> až do <span className="font-bold">16.2. 2024, nebo do vyprodání lístků.</span>
            </p>
          </div>
        </div>
        <div className="col-start-3 col-end-4">
          <InfoCard headline="Bližší informace k předprodeji:">
            <ContactCard
              title=""
              name="Pavlína Šromotová"
              position=""
              email="sromotova@sutb.cz"
              phone="+421 918 234 777"
            />
          </InfoCard>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full gap-4 px-4 mb-10">
        <TicketCard
          img={stani}
          alt="Stání"
          headline="na stání"
          price="350,-"
          info="(možnost sednout si na volně dostupné sedačky bez stolu a bez možnosti místenky)"
        />
        <TicketCard
          img={sezeni}
          alt="Sezení"
          headline="na sezení"
          price="500,-"
          info="(sezení bez rautu v 2. patře)"
        />
        <TicketCard
          img={sezeniRaut}
          alt="Sezení s rautem"
          headline="na sezení s rautem"
          price="750,-"
          info="(nezahrnuje nápoje)"
        />
      </div>
    </section>
  )
}
