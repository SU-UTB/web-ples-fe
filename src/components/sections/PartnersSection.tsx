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

export const PartnersSection = () => {
  return (
    <Section id="main-partner">
      <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
        <h2 className="mb-16 text-center text-2xl font-semibold uppercase sm:text-3xl font-numbers text-gray-950">
          Partneři:
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center ">
          <img
            src={laserGameZlin}
            loading="lazy"
            alt="Laser game Zlín"
            className="h-16"
          />
          <img
            src={lazneLuhacovice}
            loading="lazy"
            alt="Lázně Luhačovice"
            className="h-16"
          />
          <img
            src={lekysDetailing}
            loading="lazy"
            alt="Leskys detailing"
            className="h-16"
          />
          <img src={meatfly} loading="lazy" alt="Meatfly" className="h-16" />
          <img
            src={oveckarna}
            loading="lazy"
            alt="Ovečkárna"
            className="h-16"
          />
          <img
            src={pivovarKojetin}
            loading="lazy"
            alt="Pivovar Kojetín"
            className="h-16"
          />
          <img src={vest} loading="lazy" alt="Vest" className="h-16" />
          <img
            src={vincentka}
            loading="lazy"
            alt="Vincentka"
            className="h-16"
          />
          <img src={vitar} loading="lazy" alt="Vitar" className="h-16" />
          <img
            src={zijemeGastrem}
            loading="lazy"
            alt="Žijeme gastrem"
            className="h-16"
          />
          <img
            src={zlinFilmFestival}
            loading="lazy"
            alt="Zlín film festival"
            className="h-16"
          />
          <img
            src={klubPanuZPonozkovic}
            loading="lazy"
            alt="Klub pánů z ponožkovic"
            className="h-16"
          />
          <img
            src={modaProstejov}
            loading="lazy"
            alt="Móda Prostějov"
            className="h-16"
          />
          <img
            src={marmelady}
            loading="lazy"
            alt="Marmelady"
            className="h-16"
          />
          <img src={vertikon} loading="lazy" alt="Vertikon" className="h-16" />
        </div>
      </div>
    </Section>
  );
};
