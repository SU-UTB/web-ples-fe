import aboutImg from '../../assets/img/about-socha.png';
import program from '../../assets/img/headlines/program.svg';
import { AboutCard } from '../about/AboutCard';
import { InfoCard } from '../cards/InfoCard';
import { Section } from '../shared/Section';

export const AboutSection = () => {
  return (
    <div className="bg-violet">
      <Section id="o-plese" className="">
        <div className="flex flex-col items-center justify-center lg:items-start lg:gap-x-4 lg:flex-row relative">
          <img
            src={aboutImg}
            alt="Socha"
            width={645}
            height={645}
            className="w-full max-w-[645px] h-auto hidden desktop:hidden sticky top-0 self-start z-10"
          />
          <div className="flex flex-col px-8 md:px-0 gap-8">
            <AboutCard />
            {/* <DresscodeCard /> */}
            <section id="program">
              <InfoCard headline={program}>
                {/* <div className="order-3 my-4 text-xl">
                  Celým večerem Vás provede moderátorka Jitka Nováčková.
                </div> */}
                <div className="order-3 my-4 text-xl">Připravujeme.</div>
                {/* <ProgramItemList />
                <div className="mt-6 text-center opacity-50">
                  Změna programu vyhrazena
                </div> */}
              </InfoCard>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};
