import { TicketCard } from '../cards/TicketCard';

import sezeni from '../../assets/img/tickets/Sezeni1.png';
import sezeniRaut from '../../assets/img/tickets/SezeniRaut1.png';
import stani from '../../assets/img/tickets/Stani1.png';

export const TicketItemList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
      <TicketCard
        img={stani}
        alt="Stání"
        headline="na stání"
        price="350,-"
        info="(možnost sednout si na volně dostupné sedačky bez stolu a bez možnosti místenky)"
      />
      <TicketCard
        img={sezeni}
        alt="Sezení"
        headline="na sezení"
        price="500,-"
        info="(sezení bez rautu v 2. patře)"
      />
      <TicketCard
        img={sezeniRaut}
        alt="Sezení s rautem"
        headline="na sezení s rautem"
        price="750,-"
        info="(nezahrnuje nápoje)"
      />
    </div>
  );
};
