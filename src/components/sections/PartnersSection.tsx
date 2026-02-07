import { Section } from '../shared/Section';

import bonusia from '../../assets/img/partners/basic/bonusia.png';
import brgroup from '../../assets/img/partners/basic/brgroup.png';
import bubliny from '../../assets/img/partners/basic/bubliny.png';
import cebes from '../../assets/img/partners/basic/cebes.png';
import duometal from '../../assets/img/partners/basic/duometal.webp';
import idance from '../../assets/img/partners/basic/idance.svg';
import maximus from '../../assets/img/partners/basic/infinitmaximus.png';
import infitness from '../../assets/img/partners/basic/infitness.svg';
import letuska from '../../assets/img/partners/basic/letuska.png';
import mclimon from '../../assets/img/partners/basic/mclimon.png';
import sachy from '../../assets/img/partners/basic/sachovy_svaz.png';
import valasske_tornado from '../../assets/img/partners/basic/valasske_tornado.png';
import vest from '../../assets/img/partners/basic/vest.png';
import vincentka from '../../assets/img/partners/basic/vincentka.png';

const partners = [
  { src: bonusia, alt: 'Bonusia' },
  { src: brgroup, alt: 'BR Group' },
  { src: cebes, alt: 'Cebes' },
  { src: duometal, alt: 'Duometal' },
  { src: idance, alt: 'iDance studio Zlín' },
  { src: infitness, alt: 'Infitness' },
  { src: letuska, alt: 'Letuska' },
  { src: maximus, alt: 'Infinit Maximus' },
  { src: mclimon, alt: 'McLimón' },
  { src: bubliny, alt: 'Svět bublin' },
  { src: sachy, alt: 'Šachový svaz' },
  { src: valasske_tornado, alt: 'Valašské Tornádo' },
  { src: vest, alt: 'Vest' },
  { src: vincentka, alt: 'Vincentka' },
];

export const PartnersSection = () => {
  return (
    <>
      <style>
        {`
          .partner-logo {
            width: clamp(150px, 12vw, 200px);
            height: clamp(60px, 8vw, 75px);
            object-fit: contain;
          }
        `}
      </style>
      <div className="bg-white">
        <Section id="main-partner">
          <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
            <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-violet">
              Partneři:
            </h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center">
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
