import { Section } from '../shared/Section';

import kellerIcon from '../../assets/img/partners/main/keller-icon.svg';
import onsemi from '../../assets/img/partners/main/onsemi.png';
import bennon from '../../assets/img/partners/main/bennon.svg';
import topnatur from '../../assets/img/partners/main/topnatur.png';
import vincentka from '../../assets/img/partners/main/vincentka.svg';
import eurocar from '../../assets/img/partners/main/eurocar.png';
import sykora from '../../assets/img/partners/main/sykora.png';
import greiner from '../../assets/img/partners/main/greiner.svg';
import bageterie from '../../assets/img/partners/main/bageterie.png';

const mainPartners = [
  { src: kellerIcon, alt: 'Keller' },
  { src: onsemi, alt: 'Onsemi' },
  { src: bennon, alt: 'Bennon' },
  { src: topnatur, alt: 'Topnatur' },
  { src: vincentka, alt: 'Vincentka' },
  { src: eurocar, alt: 'Eurocar' },
  { src: sykora, alt: 'Sykora' },
  { src: greiner, alt: 'Greiner' },
  { src: bageterie, alt: 'Bageterie' },
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
        `}
      </style>
      <div className='bg-white'>
        <Section id="main-partner">
          <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
            <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-violet">
              Hlavní partneři:
            </h2>
            <div className="flex flex-wrap justify-center gap-16 gap-y-8">
              {mainPartners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  loading="lazy"
                  alt={partner.alt}
                  className="main-partner-logo"
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
