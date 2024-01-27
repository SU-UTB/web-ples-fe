import { ContactCard } from '../cards/ContactCard';
import { InfoCard } from '../cards/InfoCard';
import { TicketItemList } from '../ticket/TicketItemList';

export const TicketsSection = () => {
  return (
    <section id="vstupenky" className="px-4 mx-auto mt-10 max-w-screen-2xl">
      <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl font-numbers">
        Vstupenky
      </h2>
      <div className="flex justify-between w-full pb-8">
        <div>
          <div className="space-y-2 text-lg max-w-[740px]">
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
        </div>
        <div className="col-start-3 col-end-4">
          <div className="px-10 py-8 bg-card-grey rounded-20 shadow-card">
            <h4 className="text-xl font-semibold">
              Bližší informace k předprodeji:
            </h4>
            <ContactCard
              title=""
              name="Pavlína Šromotová"
              position=""
              email="sromotova@sutb.cz"
              phone="+421 918 234 777"
              isHeadlineBold={false}
            />
          </div>
        </div>
      </div>
      <TicketItemList />
    </section>
  );
};
