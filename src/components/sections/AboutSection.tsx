import { AboutCard } from '../about/AboutCard';
import { DresscodeCard } from '../about/DresscodeCard';

import { ProgramItemList } from '../about/ProgramItemList';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';

import aboutImg from '../../assets/img/about-socha.png';

export const AboutSection = () => {
  return (
    <Section id="o-plese" className="my-7">
      <div className="flex flex-col items-center justify-center lg:items-start lg:gap-x-4 lg:flex-row">
        <img
          src={aboutImg}
          alt="Socha"
          width={645}
          height={645}
          className="w-full max-w-[645px] h-auto"
        />
        <div className="flex flex-col gap-8">
          <AboutCard />
          <DresscodeCard />
          <section id="program">
            <InfoCard headline="PROGRAM:">
              <div className="order-3 my-4 text-xl">
                Celým večerem vás provede moderátor, herec a zpěvák Milan
                Peroutka.
              </div>
              <ProgramItemList />
              <div className="mt-6 text-center opacity-50">
                Změna programu vyhrazena
              </div>
            </InfoCard>
          </section>
        </div>
      </div>
    </Section>
  );
};
