import { ContactCard } from '../cards/ContactCard';
import { Section } from '../shared/Section';
import { TicketItemList } from '../ticket/TicketItemList';
import vstupenky from '../../assets/img/headlines/vstupenky.svg';
import buttonBackground from '../../assets/img/hero/heroBg.jpg';
import { TICKET_BUY } from '../../utils/constants'; // Import the ticket buy time

export const TicketsSection = () => {
  const currentDateTime = new Date(); // Get the current date and time

  return (
    <div
      style={{
        backgroundColor: '#F3E7E7',
      }}
    >
      <Section id="vstupenky">
        <img
          src={vstupenky} // Import the SVG
          alt="Vstupenky" // Alt text for accessibility
          className="px-2 mb-4 h-[50px] desktop:px-0" // Set height and margin (adjust as needed)
        />
        <div className="flex flex-col justify-between w-full gap-8 pb-6 md:pb-20 lg:flex-row">
          <div className="max-w-2xl px-2 space-y-2 text-lg desktop:px-0">
            <p>
              <b>Pro studující a zaměstnance UTB:</b>
              <br />
              Předprodej začíná <b>20. ledna 2025 v 9:00</b>. Vstupenky bude možné zakoupit pouze prostřednictvím unikátního odkazu,
              který obdržíte na svůj univerzitní e-mail.
            </p>
            <br />
            <p>
              <b>Pro veřejnost:</b>
              <br />
              Prodej vstupenek bude spuštěn <b>22. ledna 2025 v 9:00</b>.
            </p>
            <br />
            <p>
              <b>Kde lze vstupenky zakoupit?</b>
            </p>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '2rem' }}>
              <li>
                <b>Online:</b> Přes aplikaci nebo na webu SMSticket.
              </li>
              <li>
                <b>Osobně:</b> V Masters of Rock Café (Tyršovo nábřeží 5497, Zlín), kde je platba možná pouze v hotovosti.
              </li>
            </ul>
          </div>
          <div className="px-10 py-8 bg-card-grey rounded-20 shadow-card max-w-[500px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Bližší informace k předprodeji:</h3>
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
        {currentDateTime >= TICKET_BUY && ( // Show button only if current date is on or after TICKET_BUY
          <div className="flex justify-center mt-8">
            <a
              href="https://www.smsticket.cz/vstupenky/52588-xxiii-reprezentacni-ples-univerzity-tomase-bati-ve-zline?utm_medium=anchor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 rounded-full shadow-lg inline-block"
              style={{
                backgroundImage: `url(${buttonBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Koupit vstupenky
            </a>
          </div>
        )}
      </Section>
    </div>
  );
};
