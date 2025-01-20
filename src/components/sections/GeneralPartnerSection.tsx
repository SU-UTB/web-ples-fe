import { Section } from '../shared/Section';

import fairyTailors from '../../assets/img/partners/general/fairy_tailors.svg';
import flyUnitedIcon from '../../assets/img/partners/general/flyUnited-icon.svg';
import infitness from '../../assets/img/partners/general/infitness.svg';
import isprodukce from '../../assets/img/partners/general/isProdukce.svg';

const partners = [
  { src: fairyTailors, alt: 'Fairy Tailors' },
  { src: infitness, alt: 'InFitness' },
  { src: isprodukce, alt: 'IS Produkce' },
  { src: flyUnitedIcon, alt: 'FlyUnited' },
];

export const GeneralPartnerSection = () => {
  return (
    <>
      <style>
        {`
          .partner-logo {
            width: clamp(175px, 15vw, 225px);
            height: auto;
            aspect-ratio: 3 / 1;
            object-fit: contain;
          }
        `}
      </style>
      <div style={{ backgroundColor: '#F3E7E7' }}>
        <Section id="general-partner">
          <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
            <h2 className="mb-16 text-2xl font-semibold text-center uppercase sm:text-3xl font-numbers text-[#02264F]">
              Generální partneři:
            </h2>
            <div className="flex flex-wrap justify-center gap-16 gap-y-8">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  loading="lazy"
                  alt={partner.alt}
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
