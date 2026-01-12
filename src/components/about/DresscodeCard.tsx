import { InfoCard } from '../cards/InfoCard';
import dresscode from "../../assets/img/headlines/dresscode.svg"

export const DresscodeCard = () => {
  return (
    <InfoCard headline={dresscode}>
      <div className="flex flex-col order-3 gap-4">
        <p>
          Dress code letošního ročníku se ponese v duchu elegance, noblesy a&nbsp;
          <span className="font-bold">Tajemství stříbrné noci</span>.
          Barevná paleta zahrnuje <span className="font-bold"> fialovou, stříbrnou a černou</span>.
          Součástí letošního dress codu může být také maska, která podtrhuje tajemnou atmosféru. 
          Můžete zvolit masku přes oči, polomasku i masku přes celý obličej, vítané jsou i masky na tyčce. 
          Maska může být jemná i výraznější, podle vašeho vkusu.
        </p>
        <br/>
        <p>
          <span className="font-bold">Dámy</span> zveme k výběru večerní róby v jedné z uvedených barev, 
          doplněné škraboškou a stříbrnými třpytivými šperky. Vhodné jsou jak dlouhé šaty, tak i kratší šaty pod kolena, 
          doplněné elegantními společenskými botami.
        </p>
        <p>
          <span className="font-bold">Gentlemanům</span> doporučujeme černý nebo tmavý oblek, případně tmavší odstíny fialové, 
          doplněné maskou a kravatou/motýlkem v rámci barevné palety. Slavnostní charakter večera podtrhnou manžetové knoflíčky a společenská pánská obuv.
        </p>
      </div>
    </InfoCard>
  );
};
