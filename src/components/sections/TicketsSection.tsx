import { TicketCard } from "../cards/TicketCard"
import { ContactCard } from "../cards/ContactCard"
import { InfoCard } from "../cards/InfoCard"

export const TicketsSection = () => {
  return (
    <section
      id="vstupenky"
      className="flex flex-col items-center mt-10 max-w-screen-2xl mx-auto gap-8"
    >
      <div className="flex justify-between items-center flex-wrap w-full">
        <div className="mx-5">
          <div className="uppercase font-bold text-4xl mb-4 font-numbers">
            Vstupenky
          </div>
          <div className="flex flex-col gap-2 text-lg max-w-2xl">
            <p>
              Oficiální předprodej vstupenek na XXII. Reprezentační ples
              Univerzity Tomáše Bati bude spuštěn <strong>29. 1. 2024</strong> a bude probíhat v
              budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555, Zlín.
            </p>
            <p>
              Prodej bude pokračovat od pondělí do čtvrtka od <strong>9:00 do 16:00</strong> a v
              pátky od <strong>9:00 do 12:00</strong> až do <strong>16.2. 2024, nebo do vyprodání lístků.</strong>
            </p>
          </div>
        </div>
        <div className="col-start-3 col-end-4 mx-5">
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
      <div className="flex flex-wrap justify-between w-full mb-10 gap-4 ">
        <TicketCard
          img="/tickets/Stani1.png"
          alt="Stání"
          headline="na stání"
          price="350,-"
          info="(možnost sednout si na volně dostupné sedačky bez stolu a bez možnosti místenky)"
        />
        <TicketCard
          img="/tickets/Sezeni1.png"
          alt="Sezení"
          headline="na sezení"
          price="500,-"
          info="(sezení bez rautu v 2. patře)"
        />
        <TicketCard
          img="/tickets/SezeniRaut1.png"
          alt="Sezení s rautem"
          headline="na sezení s rautem"
          price="750,-"
          info="(nezahrnuje nápoje)"
        />
      </div>
    </section>
  )
}
