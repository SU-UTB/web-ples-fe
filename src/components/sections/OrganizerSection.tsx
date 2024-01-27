import suIcon from '../../assets/icons/organizer/su-icon.svg';
import utbIcon from '../../assets/icons/organizer/utb-icon.svg';

export const OrganizerSection = () => {
  return (
    <section id="organizer" className="mx-auto max-w-screen-desktop">
      <h3 className="mb-10 text-3xl font-semibold uppercase font-numbers">
        Organizátoři:
      </h3>
      <div className="flex flex-wrap justify-around gap-4 py-12 gap-y-8">
        <img
          src={suIcon}
          alt="SU"
          width={320}
          height={42}
          className="max-w-[194px]  md:max-w-[320px]"
        />
        <img
          src={utbIcon}
          alt="UTB"
          width={320}
          height={42}
          className="max-w-[194px] md:max-w-[320px]"
        />
      </div>
    </section>
  );
};
