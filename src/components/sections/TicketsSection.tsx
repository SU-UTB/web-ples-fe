import { ContactCard } from '../cards/ContactCard';
import { Section } from '../shared/Section';
import { TicketItemList } from '../ticket/TicketItemList';
import vstupenky from '../../assets/img/headlines/vstupenky.svg'

export const TicketsSection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="vstupenky">
        <img
          src={vstupenky} // Import the SVG
          alt="Vstupenky" // Alt text for accessibility
          className="px-2 mb-4 h-[50px] desktop:px-0" // Set height and margin (adjust as needed)
        />
        <div className="flex flex-col justify-between w-full gap-8 pb-6 md:pb-20 lg:flex-row">
          <div className="max-w-2xl px-2 space-y-2 text-lg desktop:px-0">
            <p>
              Předprodej vstupenek začíná již{' '}
              <span className="font-bold">20. ledna 2025</span>.{' '}
              Lístky lze nově zakoupit{' '}
              <span className="font-bold">online</span> přes aplikaci nebo na webu{' '}
              <span className="font-bold">SMSticket</span>.
            </p>
            <br/>
            <p>
              Vstupenky jsou k dispozici také v{' '}
              <span className="font-bold">Masters of Rock Café</span> (Tyršovo nábřeží 5497, Zlín),{' '}
              kde je platba možná{' '}
              <span className="font-bold">pouze v hotovosti</span>.
            </p>
          </div>
          <div className="px-10 py-8 bg-card-grey rounded-20 shadow-card max-w-[500px]">
            <h3 className="text-xl font-semibold">
              Bližší informace k předprodeji:
            </h3>
            <ContactCard
              title=""
              name="Aneta Nejezchlebová"
              position=""
              email="nejezchlebova@sutb.cz"
              phone="+420 723 132 295"
            />
          </div>
        </div>
        <TicketItemList />
      </Section>
    </div>
  );
};
