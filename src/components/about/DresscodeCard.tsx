import { InfoCard } from '../cards/InfoCard';

export const DresscodeCard = () => {
  return (
    <InfoCard headline="DRESS CODE">
      <div className="flex flex-col order-3 gap-4">
        <p>
          Letošní dress code se na Olympu ponese v bílé, zlaté a zelené barvě,
          protože jen tak vzdáme úctu velké trojce - Diovi, Poseidónovi a
          Hádovi.
        </p>
        <p>
          <span className="font-bold">Ženy</span>, zkuste vstoupit na parket v
          dlouhých šatech v jedné ze zmíněných barev, popřípadě s vlečkou,
          dlouhým rukávem a výraznými ozdobami. Můžete si vybrat i kratší střih
          pod kolena, ale nezapomeňte na výrazné třpytivé doplňky v duchu
          antického Řecka – korunku, čelenku nebo jiný vlasový prvek. Určitě
          nesmí chybět ani elegantní podpatky, které vašemu outfitu dodají tu
          správnou božskou tečku.
        </p>
        <p>
          <span className="font-bold">Pro muže</span> doporučujeme modrý nebo
          bílý oblek, ale klidně můžete sáhnout i po klasických černých či
          šedých tónech. Celý outfit završte zlatou nebo zelenou kravatou,
          případně si dovolte experiment s motýlky v těchto odstínech. Dodatečný
          lesk můžete přidat třpytivými či originálně zdobenými manžetovými
          knoflíčky. A samozřejmě nezapomeňte na elegantní pánskou obuv.
        </p>
      </div>
    </InfoCard>
  );
};
