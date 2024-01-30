import { ContactCard } from '../cards/ContactCard';
import { Section } from '../shared/Section';
import { TicketItemList } from '../ticket/TicketItemList';

export const TicketsSection = () => {
  return (
    <Section id="vstupenky">
      <h2 className="px-2 mb-4 text-2xl font-semibold uppercase sm:text-3xl font-numbers desktop:px-0">
        Vstupenky
      </h2>
      <div className="flex flex-col justify-between w-full gap-8 pb-20 lg:flex-row">
        <div className="max-w-2xl px-2 space-y-2 text-lg desktop:px-0">
          <p>
            Oficiální předprodej vstupenek na XXII. Reprezentační ples
            Univerzity Tomáše Bati bude spuštěn{' '}
            <span className="font-bold">29. 1. 2024</span> a bude probíhat v
            budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555, Zlín.
          </p>
          <p>
            Prodej bude pokračovat od pondělí do čtvrtka od{' '}
            <span className="font-bold">9:00 do 16:00</span> a v pátky od{' '}
            <span className="font-bold">9:00 do 12:00</span> až do{' '}
            <span className="font-bold">
              16.2. 2024, nebo do vyprodání lístků.
            </span>
          </p>
        </div>
        <div className="px-10 py-8 bg-card-grey rounded-20 shadow-card">
          <h3 className="text-xl font-semibold">
            Bližší informace k předprodeji:
          </h3>
          <ContactCard
            title=""
            name="Pavlína Šromotová"
            position=""
            email="sromotova@sutb.cz"
            phone="+420  777 293 697"
          />
        </div>
      </div>
      <TicketItemList />
    </Section>
  );
};
