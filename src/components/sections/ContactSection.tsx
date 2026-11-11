import { ContactCard } from '../cards/ContactCard';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';
import kontakty from "../../assets/img/headlines/kontakty.svg"

export const ContactSection = () => {
  return (
    <div className='bg-violet'>
      <Section id="kontakty" className="py-24">
        <div className='px-4'>
          <InfoCard headline={kontakty}>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ContactCard
                name="Bc. Ema Kubíčková"
                position="Manažerka plesu"
                email="kubickova@sutb.cz"
                phone="+420 778 489 420"
              />
              <ContactCard
                name="Bc. Karolína Korená"
                position="Manažerka plesu"
                email="korena@sutb.cz"
                phone="+420 737 148 498"
              />
              <ContactCard
                name="Kateřina Minaříková"
                position="Produkce"
                email="minarikova@sutb.cz"
                phone="+420 739 988 781"
              />
              {/* <ContactCard
                title="Bc."
                name="Marek Kos"
                position="Zástupce univerzity"
                email="m_kos@utb.cz"
                phone="+420 734 542 044"
              /> */}
              <ContactCard
                name="Patrik Kašpar"
                position="Sponzoring"
                email="kaspar@sutb.cz"
                phone="+420 739 116 111"
              />
              <ContactCard
                name="Lukáš Pikula"
                position="Propagace"
                email="pikula@sutb.cz"
                phone="+420 732 329 291"
              />
            </div>
          </InfoCard>
        </div>
      </Section>
    </div>
  );
};
