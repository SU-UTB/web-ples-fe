import { InfoCard } from "../divs/InfoCard"
import { ContactDiv } from "../divs/ContactDiv"

export const ContactSection = () => {
  return (
    <div className="my-7">
      <InfoCard headline="kontakty:">
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <ContactDiv
            name="Michaela Filipcová"
            position="Manažerka plesu"
            email="filipcova@sutb.cz"
            phone="+420 725 126 034"
          />
          <ContactDiv
            name="Jakub Staněk"
            position="Produkce"
            email="stanek@sutb.cz"
            phone="+420 776 459 859"
          />
          <ContactDiv
            name="Marek Koš"
            position="Zástupce univerzity"
            email="m_kos@utb.cz"
            phone="+420 734 542 044"
          />
          <ContactDiv
            name="Karel Kratochvíl"
            position="Spolupráce a sponzoři"
            email="kratochvil@sutb.cz"
            phone="+420 725 979 411"
          />
          <ContactDiv
            name="Sara Skuběnková"
            position="Propagace"
            email="skubenkova@sutb.cz"
            phone="+421 918 234 777"
          />
        </div>
      </InfoCard>
    </div>
  )
}
