import { Section } from '../shared/Section';

import suIcon from '../../assets/icons/organizer/su-icon.svg';
import utbIcon from '../../assets/icons/organizer/utb-icon.svg';

export const OrganizerSection = () => {
  return (
    <Section
      id="organizer"
      className="bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <h2 className="text-center mb-12 text-2xl sm:text-3xl font-semibold uppercase font-numbers text-gray-950">
        Organizátoři:
      </h2>
      <div className="flex flex-wrap justify-center gap-16 gap-y-8">
        <img src={suIcon} alt="Studentská unie UTB" className="h-6 sm:h-8" />
        <img
          src={utbIcon}
          alt="Univerzita Tomáše Bati"
          className="h-6 sm:h-8"
        />
      </div>
    </Section>
  );
};
