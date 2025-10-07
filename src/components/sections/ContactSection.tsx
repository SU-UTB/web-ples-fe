import { ContactCard } from '../cards/ContactCard';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';
import kontakty from "../../assets/img/headlines/kontakty.svg"

export const ContactSection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="kontakty" className="py-24">
        <div style={{
          color: '#02264F',
        }}>
          <InfoCard headline={kontakty}>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ContactCard
                name="Bc. David Fiala"
                position="Manažer plesu"
                email="fiala@sutb.cz"
                phone="+420 739 437 387"
              />
              <ContactCard
                name="Kristina Marečková"
                position="Manažerka plesu"
                email="mareckova@sutb.cz"
                phone="+420 720 182 609"
              />
              <ContactCard
                name="Bc. Lukáš Faksa"
                position="Produkce"
                email="faksa@sutb.cz"
                phone="+420 605 456 216"
              />
              {/* <ContactCard
                title="Bc."
                name="Marek Kos"
                position="Zástupce univerzity"
                email="m_kos@utb.cz"
                phone="+420 734 542 044"
              /> */}
              <ContactCard
                name="Bc. Daniel Bušos"
                position="Spolupráce a sponzoři"
                email="busos@sutb.cz"
                phone="+420 731 926 176"
              />
              <ContactCard
                name="Tímea Patáková"
                position="Propagace"
                email="patakova@sutb.cz"
                phone="+420 735 389 035"
              />
            </div>
          </InfoCard>
        </div>
      </Section>
    </div>
  );
};
