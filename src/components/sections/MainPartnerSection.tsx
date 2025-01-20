import { Section } from '../shared/Section';

import kellerIcon from '../../assets/img/partners/main/keller-icon.svg';
import onsemi from '../../assets/img/partners/main/onsemi.png';
import bennon from '../../assets/img/partners/main/bennon.svg';
import topnatur from '../../assets/img/partners/main/topnatur.png';
import vincentka from '../../assets/img/partners/main/vincentka.svg';

const mainPartners = [
  { src: kellerIcon, alt: 'Keller' },
  { src: onsemi, alt: 'Onsemi' },
  { src: bennon, alt: 'Bennon' },
  { src: topnatur, alt: 'Topnatur' },
  { src: vincentka, alt: 'Vincentka' },
];

export const MainPartnerSection = () => {
  return (
    <>
      <style>
        {`
          .main-partner-logo {
            width: clamp(150px, 12vw, 200px);
            height: auto;
            aspect-ratio: 3 / 1;
            object-fit: contain;
          }
          .main-partner-logo.vincentka {
            aspect-ratio: auto; /* Specific override for Vincentka's logo */
          }
        `}
      </style>
      <div style={{ backgroundColor: '#F3E7E7' }}>
        <Section id="main-partner">
          <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
            <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-[#02264F]">
              Hlavní partneři:
            </h2>
            <div className="flex flex-wrap justify-center gap-16 gap-y-8">
              {mainPartners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  loading="lazy"
                  alt={partner.alt}
                  className={`main-partner-logo ${partner.alt === 'Vincentka' ? 'vincentka' : ''}`}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
