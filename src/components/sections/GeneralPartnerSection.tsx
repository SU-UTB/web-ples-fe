import { Section } from '../shared/Section';

import fairyTailors from '../../assets/img/partners/general/fairy_tailors.svg'
import flyUnitedIcon from '../../assets/img/partners/general/flyUnited-icon.svg';
import infitness from '../../assets/img/partners/general/infitness.svg'
import isprodukce from '../../assets/img/partners/general/isProdukce.svg'

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
              src={fairyTailors}
              loading="lazy"
              alt="Fairy Tailors"
              className="h-10 sm:h-10"
            />
            <img
              src={infitness}
              loading="lazy"
              alt="InFitness"
              className="h-10 sm:h-10"
            />
            <img
              src={isprodukce}
              loading="lazy"
              alt="IS Produkce"
              className="h-10 sm:h-10"
            />
            <img
              src={flyUnitedIcon}
              loading="lazy"
              alt="FlyUnited"
              className="h-10 sm:h-10"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
