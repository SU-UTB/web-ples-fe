import { Section } from '../shared/Section';

import adrop from '../../assets/img/partners/basic/adrop.png';
import amem from '../../assets/img/partners/basic/amem.png';
import continental from '../../assets/img/partners/basic/continental.png'; 
import dermacol from '../../assets/img/partners/basic/dermacol.png'; 
import exitroom from '../../assets/img/partners/basic/exitroom.png'; 
import gienger from '../../assets/img/partners/basic/gienger.png'; 
import maximus from '../../assets/img/partners/basic/infinitmaximus.svg';
import lasergame from '../../assets/img/partners/basic/lasergame.png';
import lazneluha from '../../assets/img/partners/basic/lazneluha.png';
import marmellady from '../../assets/img/partners/basic/marmellady.png';
import roomstock from '../../assets/img/partners/basic/roomstock.png';
import sushi from '../../assets/img/partners/basic/sushi.svg';
import tamazpet from '../../assets/img/partners/basic/tamazpet.png';
import vest from '../../assets/img/partners/basic/vest.png';
import vitar from '../../assets/img/partners/basic/vitar.png';
import vosime from '../../assets/img/partners/basic/vosime.png';
import zff from '../../assets/img/partners/basic/zff.png';

// tombola
import everstar from '../../assets/img/partners/basic/everstar.png';
import fatra from '../../assets/img/partners/basic/fatra.png';
import rallye from '../../assets/img/partners/basic/rallye.png';
import rjelinek from '../../assets/img/partners/basic/rjelinek.png';


const partners = [
  { src: adrop, alt: 'Adrop' },
  { src: amem, alt: 'Ambulance estetické medicíny' },
  { src: continental, alt: 'Continental'},
  { src: dermacol, alt: 'Dermacol'},
  { src: exitroom, alt: 'Exitroom Zlín'},
  { src: gienger, alt: 'Gienger'},
  { src: maximus, alt: 'Infinit Maximus' },
  { src: lasergame, alt: 'Laser game Zlín' },
  { src: lazneluha, alt: 'Lázně Luhačovice' },
  { src: marmellady, alt: 'Marmellady' },
  { src: roomstock, alt: 'Roomstock' },
  { src: sushi, alt: 'SushiHub' },
  { src: tamazpet, alt: 'Tamazpet' },
  { src: vest, alt: 'Vest' },
  { src: vitar, alt: 'Vitar' },
  { src: vosime, alt: 'Vosíme' },
  { src: zff, alt: 'Zlín film festival' },
  //tombola
  { src: everstar, alt: 'Everstar' },
  { src: fatra, alt: 'Fatra' },
  { src: rallye, alt: 'Rallye Design' },
  { src: rjelinek, alt: 'R. Jelínek' },
];

export const PartnersSection = () => {
  return (
    <>
      <style>
        {`
          .partner-logo {
            width: clamp(150px, 12vw, 200px);
            height: auto;
            aspect-ratio: 3 / 1;
            object-fit: contain;
          }
        `}
      </style>
      <div style={{ backgroundColor: '#F3E7E7' }}>
        <Section id="main-partner">
          <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
            <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-[#02264F]">
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
