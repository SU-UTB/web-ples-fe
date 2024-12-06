import { Section } from '../shared/Section';

import bennonIcon from '../../assets/img/partners/general/bennon-icon.svg';
import flyUnitedIcon from '../../assets/img/partners/general/flyUnited-icon.svg';

export const GeneralPartnerSection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="general-partner">
        <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
          <h2 className="mb-16 text-2xl font-semibold text-center uppercase sm:text-3xl font-numbers text-[#02264F]">
            Generální partneři:
          </h2>
          <div className="flex flex-wrap justify-center gap-16 gap-y-8">
            <img
              src={bennonIcon}
              loading="lazy"
              alt="Bennon"
              className="h-30 sm:h-30"
            />
            <img
              src={flyUnitedIcon}
              loading="lazy"
              alt="FlyUnited"
              className="h-30 sm:h-30"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
