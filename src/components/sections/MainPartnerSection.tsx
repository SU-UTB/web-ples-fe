import { Section } from '../shared/Section';

import kellerIcon from '../../assets/img/partners/main/keller-icon.svg';
import onsemi from '../../assets/img/partners/main/onsemi.png';
import bennon from '../../assets/img/partners/main/bennon.svg';
import topnatur from '../../assets/img/partners/main/topnatur.png';
import vincentka from '../../assets/img/partners/main/vincentka.svg';

export const MainPartnerSection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="main-partner">
        <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
          <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-[#02264F]">
            Hlavní partneři:
          </h2>
          <div className="flex flex-wrap justify-center gap-16 gap-y-8">
            <img
              src={kellerIcon}
              loading="lazy"
              alt="Keller"
              className="h-12 sm:h-12"
            />
            <img
              src={onsemi}
              loading="lazy"
              alt="Onsemi"
              className="h-12 sm:h-12"
            />
            <img
              src={bennon}
              loading="lazy"
              alt="Bennon"
              className="h-12 sm:h-12"
            />
            <img
              src={topnatur}
              loading="lazy"
              alt="Topnatur"
              className="h-12 sm:h-12"
            />
            <img
              src={vincentka}
              loading="lazy"
              alt="Vincentka"
              className="h-16 sm:h-16"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
