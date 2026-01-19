import { useState, useEffect } from 'react';
import vstupenky from '../../assets/img/headlines/vstupenky.svg';
import { TICKET_BUY } from '../../utils/constants';
import { ContactCard } from '../cards/ContactCard';
import { Section } from '../shared/Section';
import { TicketItemList } from '../ticket/TicketItemList';

export const TicketsSection = () => {
  const [isSaleActive, setIsSaleActive] = useState(
    () => new Date() >= TICKET_BUY,
  );

  // Stav pro dynamickou URL (defaultně vezme hodnotu z .env pro případ, že by JSON selhal)
  const [ticketUrl, setTicketUrl] = useState("");

  useEffect(() => {
    // Načtení konfigurace ze serveru při startu
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.TICKET_URL) {
          setTicketUrl(data.TICKET_URL);
        }
      })
      .catch((err) => console.error('Nepodařilo se načíst config.json:', err));
  }, []);

  useEffect(() => {
    if (isSaleActive) {
      return;
    }

    const intervalId = setInterval(() => {
      if (new Date() >= TICKET_BUY) {
        setIsSaleActive(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isSaleActive]);

  return (
    <div className="bg-violet text-white">
      <Section id="vstupenky">
        <img
          src={vstupenky}
          alt="Vstupenky"
          className="px-2 mb-4 h-12 md:h-16"
        />
        <div className="flex flex-col justify-between w-full gap-8 pb-6 md:pb-20 lg:flex-row">
          <div className="max-w-2xl px-2 space-y-2 text-lg desktop:px-0">
            <p>
              <b>Pro studující a zaměstnance UTB:</b>
              <br />
              Předprodej začíná <b>20. ledna 2026 v 9:00</b>. Vstupenky
              bude možné zakoupit pouze prostřednictvím unikátního odkazu, který
              obdržíte na svůj univerzitní e-mail.
            </p>
            <br />
            <p>
              <b>Pro veřejnost:</b>
              <br />
              Prodej vstupenek bude spuštěn <b>22. ledna 2026 v 9:00</b>.
            </p>
            <br />
            <p>
              <b>Kde lze vstupenky zakoupit?</b>
            </p>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '2rem' }}>
              <li>
                <b>Online:</b> Přes aplikaci nebo na webu SMSticket.
              </li>
            </ul>
          </div>
          <div className="px-10 py-8 bg-light-violet rounded-20 flex flex-col justify-center">
            <h3 className="text-xl font-bold">
              Bližší informace k předprodeji:
            </h3>
            <ContactCard
              title=""
              name="Hana Benešová"
              position=""
              email="benesova@sutb.cz"
              phone=""
            />
          </div>
        </div>

        <TicketItemList />
        
        {isSaleActive && (
          <div className="flex justify-center mt-8">
            <a
              href={ticketUrl} // Teď používáme dynamickou hodnotu ze state
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 rounded-full shadow-lg inline-block bg-light-violet text-white text-base font-bold text-center no-underline"
            >
              Koupit vstupenky
            </a>
          </div>
        )}
      </Section>
    </div>
  );
};