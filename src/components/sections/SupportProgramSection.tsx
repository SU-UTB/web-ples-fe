import { InfoCard } from '../cards/InfoCard';
import { SupportCard } from '../cards/SupportCard';

import statueEvent from '../../assets/img/support/statueEvent.png';
import vineEvent from '../../assets/img/support/vineEvent.png';

export const SupportProgramSection = () => {
  return (
    <section id="doprovodny-program">
      <InfoCard headline="Doprovodný program">
        <div className="flex flex-col justify-center gap-4">
          <p>
            Abychom vás správně naladili, připravili jsme si dva doslova božské
            doprovodné programy. Těšit se můžete na{' '}
            <span className="font-bold">Dionýsovu školu šumivého&nbsp;</span>
            vína a <span className="font-bold">Apollónovu školu tance.</span>
          </p>
          <p>
            V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
            kosmetičkami za symbolickou částku. Stačí si vybrat salon, který se
            vám líbí, nahlásit promo kód{' '}
            <span className="font-bold">Zeus2024&nbsp;</span>a sleva je vaše!
          </p>
          <p>
            Nezapomněli jsme ani na pány. Ti se mohou objednat do partnerského
            salónu po celý týden. Slevu získají po zadání promo kódu{' '}
            <span className="font-bold">Zeus2024&nbsp;</span>
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
          <div className="text-center opacity-50">
            <p>Promo kód pro dámské salony platí pouze v den konání akce.</p>
            <p>Promo kód pro pánský salon platí v celém týdnu konání akce.</p>
          </div>
        </div>
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
      </InfoCard>
    </section>
  );
};
