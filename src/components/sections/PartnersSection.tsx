import { Section } from '../shared/Section';

import klubPanuZPonozkovic from '../../assets/img/partners/klub-panu-z-ponozkovic.png';
import laserGameZlin from '../../assets/img/partners/laser-game-zlin.png';
import lazneLuhacovice from '../../assets/img/partners/lazne-luhacovice.png';
import lekysDetailing from '../../assets/img/partners/lekys-detailing.png';
import marmelady from '../../assets/img/partners/marmelady.png';
import meatfly from '../../assets/img/partners/meatfly.png';
import modaProstejov from '../../assets/img/partners/moda-prostejov.png';
import oveckarna from '../../assets/img/partners/oveckarna.png';
import pivovarKojetin from '../../assets/img/partners/pivovar-kojetin.png';
import vertikon from '../../assets/img/partners/vertikon.jpg';
import vest from '../../assets/img/partners/vest.png';
import vincentka from '../../assets/img/partners/vincentka.png';
import vitar from '../../assets/img/partners/vitar.png';
import zijemeGastrem from '../../assets/img/partners/zijeme-gastrem.png';
import zlinFilmFestival from '../../assets/img/partners/zlin-film-festival.png';

import adrop from '../../assets/img/partners/basic/adrop.png';
import maximus from '../../assets/img/partners/basic/infinitmaximus.svg';
import tamazpet from '../../assets/img/partners/basic/tamazpet.png';

const partners = [
  { src: adrop, alt: 'Adrop' },
  { src: maximus, alt: 'Infinit Maximus' },
  { src: tamazpet, alt: 'Tamazpet' },
  { src: laserGameZlin, alt: 'Laser game Zlín' },
  { src: lazneLuhacovice, alt: 'Lázně Luhačovice' },
  { src: lekysDetailing, alt: 'Leskys detailing' },
  { src: meatfly, alt: 'Meatfly' },
  { src: oveckarna, alt: 'Ovečkárna' },
  { src: pivovarKojetin, alt: 'Pivovar Kojetín' },
  { src: vest, alt: 'Vest' },
  { src: vincentka, alt: 'Vincentka' },
  { src: vitar, alt: 'Vitar' },
  { src: zijemeGastrem, alt: 'Žijeme gastrem' },
  { src: zlinFilmFestival, alt: 'Zlín film festival' },
  { src: klubPanuZPonozkovic, alt: 'Klub pánů z ponožkovic' },
  { src: modaProstejov, alt: 'Móda Prostějov' },
  { src: marmelady, alt: 'Marmelady' },
  { src: vertikon, alt: 'Vertikon' },
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
