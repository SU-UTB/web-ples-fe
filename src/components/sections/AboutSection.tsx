import { AboutCard } from '../about/AboutCard';
import { DresscodeCard } from '../about/DresscodeCard';
import { ProgramItemList } from '../about/ProgramItemList';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';
import aboutImg from '../../assets/img/about-socha.png';

export const AboutSection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="o-plese" className="">
        <div className="flex flex-col items-center justify-center lg:items-start lg:gap-x-4 lg:flex-row">
          <img
            src={aboutImg}
            alt="Socha"
            width={645}
            height={645}
            className="w-full max-w-[645px] h-auto hidden desktop:block"
          />
          <div className="flex flex-col gap-8">
            <AboutCard />
            <DresscodeCard />
            <section id="program">
              <InfoCard headline="PROGRAM:">
                <div className="order-3 my-4 text-xl">
                  Celým večerem Vás provede moderátorka Jitka Nováčková.
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
    </div>
  );
};
