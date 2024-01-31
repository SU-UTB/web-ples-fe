import { Section } from '../shared/Section';

import bennonIcon from '../../assets/img/partners/general/bennon-icon.svg';
import flyUnitedIcon from '../../assets/img/partners/general/flyUnited-icon.svg';

export const GeneralPartnerSection = () => {
  return (
    <Section
      id="general-partner"
      className="bg-gradient-to-b "
    >
      <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
        <h2 className="mb-12 text-2xl font-semibold text-left uppercase sm:text-3xl font-numbers text-gray-950">
          Generální partneři:
        </h2>
        <div className="flex flex-wrap justify-center gap-16 gap-y-8">
          <img src={bennonIcon} alt="Bennon" className="h-30 sm:h-30" />
          <img src={flyUnitedIcon} alt="FlyUnited" className="h-30 sm:h-30" />
        </div>
      </div>
    </Section>
  );
};
