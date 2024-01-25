import { SupportCard } from "../cards/SupportCard"
import { InfoCard } from "../cards/InfoCard"

export const SupportProgramSection = () => {
  return (
    <section className="doprovodny-program">
      <InfoCard headline="Doprovodný program">
        <div className="flex flex-col justify-center gap-4">
          <p>
            Abychom vás správně naladili, připravili jsme si dva doslova božské
            doprovodné programy. Těšit se můžete na <strong>Dionýsovu školu šumivého&nbsp;</strong> 
            vína a <strong>Apollónovu školu tance.</strong> 
          </p>
          <p>
            V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
            kosmetičkami za symbolickou částku. Stačí si vybrat salon, který se
            vám líbí, nahlásit promo kód <strong>Zeus2024&nbsp;</strong> a sleva je vaše!
          </p>
          <p>
            Nezapomněli jsme ani na pány. Ti se mohou objednat do partnerského
            salónu po celý týden. Slevu získají po zadání promo kódu <strong>Zeus2024&nbsp;</strong>
            při rezervaci termínu.
          </p>
          <p>
            Bližší informace najdete na&nbsp;
            <span className="underline font-bold">
              <a
                href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
                target="_blank"
              >
                Facebookové události.
              </a>
            </span>
          </p>
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
    </section>
  )
}
