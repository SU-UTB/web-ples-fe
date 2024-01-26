import { InfoCard } from "../cards/InfoCard"
import { SupportCard } from "../cards/SupportCard"

import calendarIcon from '../../assets/img/support/calendar.svg'
import statueEvent from '../../assets/img/support/statueEvent.png'
import vineEvent from '../../assets/img/support/vineEvent.png'

export const SupportProgramSection = () => {
  return (
    <section id="doprovodny-program">
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
            <span className="font-bold underline">
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
            img={vineEvent}
            alt="víno"
            name="Dionýsova škola šumivého vína"
            date="30.1.2024"
          />
          <SupportCard
            img={vineEvent}
            alt="víno"
            name="Apollónova škola tance"
            date="8.2.2024"
          />
          <SupportCard
            img={statueEvent}
            alt="víno"
            name="Dámský salón"
            date="16.1.2024"
          />
          <SupportCard
            img={statueEvent}
            alt="víno"
            name="Dionýsova škola šumivého vína"
            date="12.2-16.2.2024"
          />
        </div>
      </InfoCard>
    </section>
  )
}
