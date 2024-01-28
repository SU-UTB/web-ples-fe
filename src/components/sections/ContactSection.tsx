import { ContactCard } from '../cards/ContactCard';
import { Section } from '../shared/Section';

export const ContactSection = () => {
  return (
    <Section id="kontakty" className="py-24">
      <div className="max-w-4xl py-14 px-10 bg-card-grey rounded-20 shadow-card space-y-6 -mx-2 sm:mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase font-numbers">
          Kontakty:
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            title="Bc."
            name="Michaela Filipcová"
            position="Manažerka plesu"
            email="filipcova@sutb.cz"
            phone="+420 725 126 034"
          />
          <ContactCard
            title=""
            name="Jakub Staněk"
            position="Produkce"
            email="stanek@sutb.cz"
            phone="+420 776 459 859"
          />
          <ContactCard
            title="Bc."
            name="Marek Kos"
            position="Zástupce univerzity"
            email="m_kos@utb.cz"
            phone="+420 734 542 044"
          />
          <ContactCard
            title="Bc."
            name="Karel Kratochvíl"
            position="Spolupráce a sponzoři"
            email="kratochvil@sutb.cz"
            phone="+420 725 979 411"
          />
          <ContactCard
            title=""
            name="Sára Skuběnková"
            position="Propagace"
            email="skubenkova@sutb.cz"
            phone="+421 918 234 777"
          />
        </div>
      </div>
    </Section>
  );
};
