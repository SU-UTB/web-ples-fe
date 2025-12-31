import { COUNTDOWN_DATE } from '../../utils/constants';
import { Countdown } from '../countdown/Countdown';

import heroHeading from '../../assets/img/hero/HeroHeading.svg';
import maskImage from '../../assets/img/hero/heroImg.png';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center bg-violet min-h-[60vh] md:min-h-[80vh] overflow-hidden pt-12"
    >
      {/* --- LEVÁ MASKA --- */}
      <div className="absolute -left-10 md:left-0 md:right-auto bottom-0 w-3/4 md:w-1/3 pointer-events-none z-10 [mask-image:linear-gradient(to_bottom,white_75%,transparent)]">
        <img
          src={maskImage}
          alt=""
          // Added md:[mask-image:...] to fade the right edge on desktop
          // We use md: prefix so it doesn't affect mobile view where it's full width
          className="max-h-[45vh] md:max-h-[80vh] w-full object-contain object-bottom -scale-x-100 opacity-80 md:opacity-100 md:[mask-image:linear-gradient(to_left,white_75%,transparent)]"
        />
      </div>

      {/* --- PRAVÁ MASKA --- */}
      <div className="absolute right-0 bottom-0 w-1/3 pointer-events-none z-10 hidden md:block md:[mask-image:linear-gradient(to_bottom,white_75%,transparent)]">
        <img
          src={maskImage}
          alt=""
          // Added [mask-image:...] to fade the left edge
          className="max-h-[80vh] w-full object-contain object-bottom [mask-image:linear-gradient(to_left,white_75%,transparent)]"
        />
      </div>

      {/* --- CENTRÁLNÍ OBSAH --- */}
      <div className="z-20 w-full max-w-4xl flex flex-col items-center mt-10 px-4">
        {/* Nadpis */}
        <img
          src={heroHeading}
          alt="Reprezentační ples UTB 2026"
          // Added w-full to ensure it shrinks on very small screens if needed
          className="w-full md:max-w-[50vw] h-auto md:px-0"
        />

        {/* Countdown */}
        <div className="mt-24 md:mt-32">
          <Countdown targetDate={COUNTDOWN_DATE} />
        </div>
      </div>
    </section>
  );
};
