import { Section } from '../shared/Section';

import bennon from '../../assets/img/partners/main/bennon.svg';
import barber from '../../assets/img/partners/main/barber.svg';
import sushi from '../../assets/img/partners/main/sushi.svg';
import zalesi from '../../assets/img/partners/main/zalesi.png';

const mainPartners = [
  { src: bennon, alt: 'Bennon' },
  { src: barber, alt: 'HeadBarber' },
  { src: sushi, alt: 'Sushi Hub' },
  { src: zalesi, alt: 'Zálesí' },
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
