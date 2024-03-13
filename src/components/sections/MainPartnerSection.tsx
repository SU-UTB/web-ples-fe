import { Section } from '../shared/Section';

import kellerIcon from '../../assets/img/partners/main/keller-icon.svg';
import laviteIcon from '../../assets/img/partners/main/lavite-icon.svg';
import sushiHubIcon from '../../assets/img/partners/main/sushiHub-icon.svg';

export const MainPartnerSection = () => {
  return (
    <Section id="main-partner">
      <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
        <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-gray-950">
          Hlavní partneři:
        </h2>
        <div className="flex flex-wrap justify-center gap-16 gap-y-8">
          <img
            src={laviteIcon}
            loading="lazy"
            alt="Lavite"
            className="h-30 sm:h-30"
          />
          <img
            src={kellerIcon}
            loading="lazy"
            alt="Keller"
            className="h-30 sm:h-30"
          />
          <img
            src={sushiHubIcon}
            loading="lazy"
            alt="SushiHub"
            className="h-30 sm:h-30"
          />
        </div>
      </div>
    </Section>
  );
};
