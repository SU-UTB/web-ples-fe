import { InfoCard } from '../cards/InfoCard';

export const AboutCard = () => {
  return (
    <InfoCard headline="O PLESE:">
      <div className="flex flex-col order-1 gap-4">
        <p>
          Srdečně vás zveme na XXII. ročník Reprezentačního plesu Univerzity
          Tomáše Bati ve Zlíně. Již 16. 2. 2024 se v Kongresovém centru ve Zlíně
          společně přeneseme na Olymp a poznáme, jaké to je, KDYŽ BOHOVÉ TANČÍ.
        </p>
        <p>
          Ať už jste obyčejný smrtelník, polobůh nebo samotný Zeus, o ples pod
          Olympem, který se koná jednou za tisíc let, určitě nesmíte přijít!
        </p>
        <p>
          Aktuální dění a novinky sledujte na&nbsp;
          <a
            href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
            target="_blank"
            className="font-bold underline"
          >
            Facebookové události.
          </a>
        </p>
      </div>
    </InfoCard>
  );
};
