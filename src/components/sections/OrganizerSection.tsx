import suIcon from '../../assets/icons/organizer/su-icon.svg';
import utbIcon from '../../assets/icons/organizer/utb-icon.svg';
import { Section } from '../shared/Section';

export const OrganizerSection = () => {
  return (
    <div className="bg-violet">
      <Section id="organizer">
        <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
          <h2 className="mt-8 mb-16 text-2xl font-semibold text-center uppercase sm:text-3xl font-numbers text-[#F3E7E7]">
            Organizátoři:
          </h2>
          <div className="flex flex-wrap justify-center gap-16 gap-y-8">
            <a
              href="https://su.utb.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={suIcon}
                loading="lazy"
                alt="Studentská unie UTB"
                className="h-6 sm:h-8"
              />
            </a>
            <a
              href="https://www.utb.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={utbIcon}
                loading="lazy"
                alt="Univerzita Tomáše Bati"
                className="h-6 sm:h-8"
              />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};
