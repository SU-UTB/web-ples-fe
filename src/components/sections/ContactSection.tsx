import { ContactCard } from '../cards/ContactCard';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';

export const ContactSection = () => {
  return (
    <Section id="kontakty" className="py-24">
      <InfoCard headline="Kontakty:">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            name="Jiří Pernica"
            position="Manažer plesu"
            email="pernica@sutb.cz"
            phone="+420 722 142 888"
          />
          <ContactCard
            name="David Fiala"
            position="Produkce"
            email="fiala@sutb.cz"
            phone="+420 739 437 387"
          />
          <ContactCard
            title="Bc."
            name="Marek Kos"
            position="Zástupce univerzity"
            email="m_kos@utb.cz"
            phone="+420 734 542 044"
          />
          <ContactCard
            name="Tina Marečková"
            position="Spolupráce a sponzoři"
            email="mareckova@sutb.cz"
            phone="+420 720 182 609"
          />
          <ContactCard
            name="Sára Forejtová"
            position="Propagace"
            email="forejtova@sutb.cz"
            phone="+421 728 411 288"
          />
        </div>
      </InfoCard>
    </Section>
  );
};
