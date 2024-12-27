import { InfoCard } from '../cards/InfoCard';
import dresscode from "../../assets/img/headlines/dresscode.svg"

export const DresscodeCard = () => {
  return (
    <InfoCard headline={dresscode}>
      <div className="flex flex-col order-3 gap-4">
        <p>
          Dress code letošního ročníku bude inspirován francouzskou elegancí a šarmem. 
          Barvy letošního ročníku se ponesou v duchu francouzské trikolóry:&nbsp; 
          <span className="font-bold">červená, tmavě modrá a bílá</span>. 
        </p>
        <p>
          <span className="font-bold">Dámy</span>, nechte se unášet tematikou
          romantické Paříže a vyberte si róbu v jedné ze zmíněných barev. 
          Doplnit ji můžete šperky či doplňky, které budou třešničkou na dortu Vašeho jedinečného stylu. 
          Můžete si zvolit i kratší šaty pod kolena. Nezapomeňte doplnit Váš outfit o krásné lodičky nebo podpatky.
        </p>
        <p>
          <span className="font-bold">Pro gentlemany</span> doporučujeme tmavě modrý oblek.<br/> 
          Pro pány, kteří se nebojí odlišit, je skvělou volbou oblek v barvě bordó či v jiném odstínu červené. 
          Outfit můžete doplnit kravatou nebo motýlkem v barvách plesu. 
          Celkový dojem podtrhnou zdobené manžetové knoflíčky nebo jiné doplňky, a samozřejmě společenská pánská obuv.
        </p>
      </div>
    </InfoCard>
  );
};
