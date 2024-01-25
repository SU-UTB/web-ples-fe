import { InfoCard } from "../cards/InfoCard"
import { ContactCard } from "../cards/ContactCard"

export const ContactSection = () => {
  return (
    <section id="Kontakty" className="my-7 mx-5">
      <InfoCard headline="kontakty:">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-2 auto-rows-max">
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
      </InfoCard>
    </section>
  )
}
