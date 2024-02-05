import { InfoCard } from '../cards/InfoCard';
import { SupportCard } from '../cards/SupportCard';

import danceEvent from '../../assets/img/support/danceEvent.png';
import statueEvent from '../../assets/img/support/statueEvent.png';
import vineEvent from '../../assets/img/support/vineEvent.png';
import { Section } from '../shared/Section';

export const SupportProgramSection = () => {
  return (
    <Section id="doprovodny-program">
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
            <a
              href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
              target="_blank"
              className="font-bold underline"
            >
              Facebookové události.
            </a>
          </p>
          <div className="text-center opacity-50">
            <p>Promo kód pro dámské salony platí pouze v den konání akce.</p>
            <p>Promo kód pro pánský salon platí v celém týdnu konání akce.</p>
          </div>
        </div>
        <SupportCard
          img={vineEvent}
          alt="socha"
          name="Dionýsova škola šumivého vína"
          date="30. 1. 2024"
          link="https://www.facebook.com/events/751058619875618?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22user_timeline%22%7D%2C%7B%22mechanism%22%3A%22your_upcoming_events_unit%22%2C%22surface%22%3A%22bookmark%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
        />
        <SupportCard
          img={danceEvent}
          alt="socha"
          name="Apollónova škola tance"
          date="8. 2. 2024"
          link="https://www.facebook.com/events/363189926451782"
        />
        <SupportCard
          img={statueEvent}
          alt="socha"
          name="Afroditin salón krásy"
          date="16. 2. 2024"
          link="https://www.facebook.com/events/761448135869848"
        />
        <SupportCard
          img={statueEvent}
          alt="socha"
          name="Diúv salón"
          date="12. 2. - 16. 2. 2024"
          link="https://www.facebook.com/events/772241391627604/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
        />
      </InfoCard>
    </Section>
  );
};
