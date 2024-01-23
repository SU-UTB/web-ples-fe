import { SupportCard } from "../support/SupportCard"
import { InfoCard } from "../divs/InfoCard"

export const SupportProgramSection = () => {
  return (
    <InfoCard headline="Doprovodný program">
      <div className="flex flex-col justify-center ">
        <div>
          Abychom vás správně naladili, připravili jsme si po celý únor několik
          doprovodných programů. Těšit se můžete na bruslení na ledové ploše,
          promítání tématického filmu, tančírnu, či workshop na míchání drinků,
          ze, kterých vám ztuhne krev v žilách.
        </div>
      </div>
      <div>
        <SupportCard
          img="/support/statueEvent.png"
          alt="víno"
          name="Dionýsova škola šumivého vína"
          date="30.1.2024"
          icon="/support/calendar.svg"
        />
        <SupportCard
          img="/support/vineEvent.png"
          alt="víno"
          name="Apollónova škola tance"
          date="8.2.2024"
          icon="/support/calendar.svg"
        />
        <SupportCard
          img="/support/statueEvent.png"
          alt="víno"
          name="Dámský salón"
          date="16.1.2024"
          icon="/support/link-chain.svg"
        />
        <SupportCard
          img="/support/statueEvent.png"
          alt="víno"
          name="Dionýsova škola šumivého vína"
          date="12.2-16.2.2024"
          icon="/support/link-chain.svg"
        />
      </div>
    </InfoCard>
  )
}
