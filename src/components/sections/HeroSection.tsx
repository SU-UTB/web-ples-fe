import { Countdown } from '../countdown/Countdown';

import { COUNTDOWN_DATE } from '../../utils/constants';

import clouds from '../../assets/img/hero/HeroClouds.png';
import heroHeading from '../../assets/img/hero/HeroHeading.svg';
import heroPillar from '../../assets/img/hero/HeroPillarsCropped.png';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-4 mt-24 bg-center bg-no-repeat bg-cover bg-card-grey md:pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))',
      }}
    >
      <img
        src={heroHeading}
        alt="Reprezentační ples UTB 2024"
        className="hero-heading"
      />
      <h1 className="hidden">Reprezentační ples UTB 2024</h1>
      <div className="pt-12 pb-4">
        <Countdown targetDate={COUNTDOWN_DATE} />
      </div>
      <div
        className="bg-center bg-no-repeat bg-cover m-0"
        style={{
          backgroundImage: `url('${clouds}')`,
        }}
      >
        <img src={heroPillar} alt="pilíře" className="w-full max-w-[1300px] min-w-[100px] h-auto relative hero-pillar" />
      </div>
    </section>
  );
};
